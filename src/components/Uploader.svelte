<div
  class="{dragClass}"
  on:drop={handleDrop}
  on:dragover={handleDragOver}
  on:dragover={() => changeDragStatus(true)}
  on:dragleave={() => changeDragStatus(false)}
>
  <input type="file" class="invisible-input" id="imageInput" on:change={handleInput}>
  <label for="imageInput" class="container">
    <div class="">
      <Upload size="8rem" color="#404040"/>
      <div class="text">
        drag 'n drop zone
      </div>
    </div>
  </label>
  
</div>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Upload from "svelte-material-icons/Upload.svelte";

  let file: File;

  let dragClass: string = 'drop-zone';
  const dispatch = createEventDispatcher();

  function dispatchFile() {
    if (file) dispatch('fileUploaded', file);
  }

  async function handleDrop(event: DragEvent) {
    event.preventDefault();
    changeDragStatus(false);
    handleDropFile(event);
    dispatchFile();
    const formData = new FormData();
    formData.append("image", file);
  }

  function handleDropFile(event: DragEvent) {
    if (event.dataTransfer.items) {
      if (event.dataTransfer.items[0]?.kind === 'file') {
        file = event.dataTransfer.items[0].getAsFile();
      }
    } else {
      file = event.dataTransfer.files[0];
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function changeDragStatus(status) {
    dragClass = status ? 'drop-zone active' : 'drop-zone';
  }

  function handleInput(input) {
    file = input.target.files[0];
    dispatchFile();
  }
</script>

<style lang="scss">
  .drop-zone {
    height: 384px;
    padding: 32px;
    border-radius: 1em;
    background-color: #add8e6;

    &.active {
      background-color: #bae6f5;
    }

    .invisible-input {
      display: none;
    }

    .container {
      border: #404040 0.25rem dashed;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .text {
        font-size: 1.625rem;
      }
    }
  }
</style>