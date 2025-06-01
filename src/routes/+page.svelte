<h1>Welcome to SvelteKit</h1>
<p>Visit
    <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script lang="ts">
    import {writable} from "svelte/store";
    let count = writable(0);
    let name = 'world';
    count.subscribe(x => {
        localStorage.count = x;
    });
</script>

<h1>Hello {name}!</h1>
<button onclick={
	() => $count++
}>
    {$count}
</button>

<style lang="scss">
    h1 {
      text-align: center;
    }
</style>
