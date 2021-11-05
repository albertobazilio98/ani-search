<div class="search">
  {#if file}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="preview" src={URL.createObjectURL(file)} on:click={removeImage}>
  {:else}
    <Uploader on:fileUploaded={handleUpload} />
  {/if}
</div>

<script lang="ts">
  import Uploader from "./Uploader.svelte";
  import { search, traceMoeResponse } from '../api/traceMoe';

  let file: File;
  export let response: traceMoeResponse;

  async function handleUpload(f) {
		console.log(f.detail);
    file = f.detail;
    response = await search({ image: file });
    console.log(response)
  }

  function removeImage() {
    file = null;
    response = null;
  }
</script>

<style lang="scss">
  .search {
    max-width: 1024px;

    .preview {
      width: 100%;
      border-radius: 2em;
    }
  }

</style>