import type { Actions } from "./$types";
import { MongoClient } from "mongodb"

export const actions = {
	export: async ({ request }) => {
		const formData = await request.formData()
		const db_url = formData.get('db_url') as string

		try {
			const client = await (await new MongoClient(db_url).connect()).db()

			const data = await client.listCollections().toArray()

			const collections = data.map((collection) => collection.name)

			const jsonData = await Promise.all(collections.map(async (collection) => {
				const data = await client.collection(collection).find().toArray()
				return { [collection]: data }
			}))


			return {
				status: 200, body: {
					data: JSON.stringify(jsonData.reduce((acc, curr) => ({ ...acc, ...curr }), {}))
				}
			}
		} catch (error) {
			return { status: 500, body: { error: "Invalid mongodb connection string" } }
		}
	}
} satisfies Actions