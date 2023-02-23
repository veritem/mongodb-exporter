<script lang="ts">
	const download = (data: string, filename: string) => {
		const link = document.createElement("a");

		link.setAttribute(
			"href",
			"data:text/plain;charset=utf-8," + encodeURIComponent(data)
		);

		link.setAttribute("download", filename || "data.json");
		link.style.display = "none";

		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
	};

	import { onMount } from "svelte";
	import type { ActionData } from "./$types";
	export let form: ActionData;
	import toast from "svelte-french-toast";

	onMount(() => {
		if (form?.body.data) {
			download(form.body.data, "export.json");
		}

		if (form?.body.error) {
			toast.error(form.body.error);
		}
	});
</script>

<svelte:head>
	<title>Export mongoDB</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Export mongoDB" />
</svelte:head>

<main
	class="flex justify-center items-center justify-center h-screen w-screen flex-col font-sans"
>
	<h2 class="text-3xl py-8 capitalize">MongoDB exporter</h2>
	<form method="post" action="?/export">
		<input
			type="text"
			placeholder="protocol://username:password@database_host/database_name"
			name="db_url"
			class="border-2 rounded-md px-4 py-3 w-96"
		/>
		<button class="bg-blue-500 py-3 px-6 text-white rounded-sm"
			>submit</button
		>
	</form>
</main>

<!--Always stay at the bottom-->

<footer class="absolute bottom-0 w-full h-16 flex justify-center items-center">
	<p>
		hand crafted by <a
			href="https://github.com/veritem"
			target="_blank"
			rel="noopener noreferrer"
			class="text-blue-500">veritem</a
		>
	</p>
</footer>
