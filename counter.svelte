<script>
    // Svelte Version of a Counter
    let count = 0

    const addOne = () => { count = count + 1}

</script>

<div>
<h1>{count}</h1>
<button on:click={addOne}>Add One</button>
</div>

<style>
    h1 {
        color: red;
    }
</style>