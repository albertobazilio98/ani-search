<div class="result-list">
  {#each results.slice(0, 3) as result}
    <div class="result-item">
      <AniVideo videoURL={result.video}/>
      <div class="info">
        <a href="https://anilist.co/anime/{result.anilist}" class="name" target="blank">
          {result.filename} 
        </a>
        <div class="episode-number">
          episode {result.episode}
        </div>
        <div class="assurance">
          assurance: {Math.round(result.similarity * 10000) / 100}%
        </div>
      </div>
    </div>
  {/each}
</div>
<script lang="ts">
  import type { traceMoeResponse } from '../api/traceMoe';
  import AniVideo from './AniVideo.svelte';

  export let results: traceMoeResponse['result'];
</script>
<style lang="scss">
.result-list {
  display: grid;
  grid-gap: 1rem;
  text-align: left;
  padding: 1rem;
  max-width: 100%;
  .result-item {
    display: grid;
    grid-gap: 1rem;
    grid-template: "video info" / 1fr 2fr;
    background-color: rgba(173, 216, 230, 0.6);
    border-radius: 1rem;
    padding: 1rem;

    .info {
      grid-area: info;
      display: grid;
      grid-gap: 12px;
      grid-template-areas: "name" "episode" "assurance";
      grid-template-rows: repeat(3, min-content);

      .name {
        font-size: 1.25rem;
        grid-area: name;
      }
      
      .episode-number {
        grid-area: episode;
      }

      .assurance {
        grid-area: assurance;
      }
    }
  }
}


@media (max-width: 600px) {
  .result-list .result-item {
    grid-template: "video" "info";
  }
}
</style>