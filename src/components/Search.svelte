<div class="search">
  {#if !imageSource()}
    <SearchBar on:submitedURL={search} />
    <Uploader on:fileUploaded={handleUpload} />
  {:else}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="preview" src={imageSource()} on:click={removeImage}>
  {/if}
  {#if (imageSource() && !response)}
    <Spinner />
  {/if}
</div>

<script lang="ts">
  import Uploader from "./Uploader.svelte";
  import Spinner from './Spinner.svelte'
  import SearchBar from './SearchBar.svelte'
  import { searchByURL, searchByUpload, traceMoeResponse } from '../api/traceMoe';

  $: imageSource = () => {
    if (file) return URL.createObjectURL(file);
    if (url) return url
  }

  let file: File;
  let url: string;
  export let response: traceMoeResponse;

  async function handleUpload(f) {
    file = f.detail;
    response = await searchByUpload({ image: file });
  }

  async function search(e) {
    url = e.detail
    response = await searchByURL({ url });
  }

  function removeImage() {
    file = null;
    url = null;
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