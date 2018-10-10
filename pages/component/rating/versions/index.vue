<template>
  <div>
    <h1>Versioned Ratings</h1>
    <div
      v-for="(v,k) in VersionedRatings"
      :key="k"
    >
      <component 
        :is="v"
        :rating="3.4"
        :count="100"
      >test</component>
      <p>{{k}}</p>
    </div>
  </div>
</template>

<script>
import VersionedRatings from '~/cedar-packages/cdr-rating/';

export default {
  name: 'RatingVersions',
  components: {
    ...VersionedRatings,
  },
  data() {
    return {
      VersionedRatings,
    }
  }
}
</script>

<style lang="scss">
@import "~/cedar-packages/cdr-rating/index.scss";
</style>
