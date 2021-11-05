<div class="search-bar">
  <input bind:value={url} type="url" class="input" placeholder="Or paste the screenshot url here">
  <div class="magnifier" on:click={submitURL}>
    <Magnify size="1.75rem" />
  </div>
</div>
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  let url: string;
  const dispatch = createEventDispatcher();

  function submitURL() {
    if (url) dispatch('submitedURL', url)
  }
  import Magnify from "svelte-material-icons/Magnify.svelte";
</script>
<style lang="scss">
  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2rem 0;

    .input {
      width: 100%;
      height: 2.5rem;
      border: unset;
      background-color: #FEFEFE;
      border-radius: 2.5rem 0 0 2.5rem;
      padding: 0 1rem;

      &:focus-visible {
        outline: none
      }
    }

    .magnifier {
      background-color: #DEDEDE;
      border-radius: 0 2.5rem 2.5rem 0;
      height: 2.5rem;
      display: flex;
      align-items: center;
      padding: 0 1rem 0 0.5rem;
      cursor: pointer;
    }
  }
</style>