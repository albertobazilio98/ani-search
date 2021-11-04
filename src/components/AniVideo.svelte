<div class="video">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    src={videoURL}
    on:mouseover={handleHover}
    on:mouseleave={handleLeave}
    on:focus={handleHover}
    on:focusout={handleLeave}
  ></video>
</div>
<script lang="ts">
  export let videoURL: string

  function handleHover(e: MouseEvent | FocusEvent) {
    const video = e.target as HTMLMediaElement;
    video.play();
  }

  function handleLeave(e: MouseEvent | FocusEvent) {
    const video = e.target as HTMLMediaElement;
    video.pause();
  }
</script>
<style lang="scss">
  .video {
    grid-area: video;
  }
</style>