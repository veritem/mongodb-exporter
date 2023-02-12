<script lang="ts">
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import { Toaster } from "svelte-french-toast";
</script>

<main>
	<Toaster />
	<slot />
</main>
