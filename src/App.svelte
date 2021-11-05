<main>
  <h1>Upload an anime screenshot to find out which anime and episode it belongs to</h1>
  <Search bind:response={res} />
  {#if res && !res.error}
    <Results results={res.result} />
  {/if}
</main>

<script lang="ts">
  import Search from "./components/Search.svelte";
  import Results from "./components/Results.svelte";
  import type { traceMoeResponse } from './api/traceMoe';

  let file: File;
  let res: traceMoeResponse;
</script>

<style lang="scss">
  main {
    margin: 0 auto;
    text-align: center;
		display: grid;
    grid-gap: 16px;
    padding: 6rem 2.66rem;
    // justify-content: center;
    // justify-items: center;
    max-width: 1024px;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      font-weight: 100;
      margin-bottom: 1rem;
    }
  }

</style>