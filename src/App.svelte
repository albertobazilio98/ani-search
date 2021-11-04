<main>
  <h1>Upload an anime screenshot to find out which anime and episode it belongs to</h1>
  {#if file}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={URL.createObjectURL(file)} on:click={removeImage}>
  {:else}
    <Uploader on:fileUploaded={handleUpload} />
  {/if}
  {#if res && !res.error}
    <Results results={res.result} />
  {/if}
</main>

<script lang="ts">
  import Uploader from "./components/Uploader.svelte";
  import Results from "./components/Results.svelte";
  import { search, traceMoeResponse } from './api/traceMoe';

  let file: File;
  let res: traceMoeResponse;

  async function handleUpload(f) {
		console.log(f.detail);
    file = f.detail;
    res = await search({ image: file });
    console.log(res)
  }

  function removeImage() {
    file = null;
    res = null;
  }
</script>

<style lang="scss">
  main {
    margin: 0 auto;
    text-align: center;
		display: grid;
    grid-gap: 16px;
    padding: 8rem;
    // justify-content: center;
    // justify-items: center;
    max-width: 1024px;

    img {
      width: 100%;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      font-weight: 100;
      margin-bottom: 1rem;
    }
  }

</style>