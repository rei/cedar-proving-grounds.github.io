<template>
  <div>
    <h2>Activity Card version: {{ version }}</h2>
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
const deps = require('~/package').dependencies;
const url = 'https://images.dog.ceo/breeds/entlebucher/n02108000_2457.jpg';
// const url = 'https://images.dog.ceo/breeds/entlebucher/n02108000_2457.jpg';
export default {
  name: 'Activity',
  components: { CdrActivityCard },

  async asyncData({ app }) {
    const {
      data: { 
      message: dogData 
      } 
    } = await app.$axios/*.get('https://dog.ceo/api/breeds/image/random')*/
    .get(url, {
      mode: 'cors',
      crossdomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })

    return { dogData }
  },
  data() {
  return {
    version: deps["@rei/cdr-activity-card"],
    };
  },
};
</script>

<style>
  .activity-card {
    padding: 5rem;
  }
</style>