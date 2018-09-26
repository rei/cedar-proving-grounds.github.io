<template>
  <div>
    <h2>Activity Card</h2>
    <div class="activity-card">
        <cdr-activity-card
          :media='dogData'
          label="rest api call"
          title-url="http://rei.com"
          title="Snow Lake Trail"
          :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
          location="Seattle, WA"
          rating="5"
          count="138"
        />
        <br />
        <cdr-activity-card
          media="http://placehold.it/350x150"
          label="hiking"
          title-url="http://rei.com"
          title="Snow Lake Trail"
          :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
          location="Seattle, WA"
          rating="5"
          count="138"
        />


    </div>
  </div>
</template>

<script>
import {CdrActivityCard} from '@rei/cdr-activity-card';

export default {
  name: 'Activity',
  components: { CdrActivityCard },

  async asyncData({ app }) {
    const {
      data: { 
      message: dogData 
      } 
    } = await app.$axios.get('https://dog.ceo/api/breeds/image/random')
    return { dogData }
  },
};
</script>

<style>
  .activity-card {
    padding: 5rem;
  }
</style>