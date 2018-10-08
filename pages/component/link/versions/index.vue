<template>
  <div>
    <h1>Versioned Links</h1>
    <div
      v-for="(v,k) in VersionedLinks"
      :key="k"
    >
      <component :is="v">test</component>
      <p>{{k}}</p>
    </div>
  </div>
</template>

<script>
import VersionedLinks from '~/cedar-packages/cdr-link/';

export default {
  name: 'LinkVersions',
  components: {
    ...VersionedLinks,
  },
  data() {
    return {
      VersionedLinks,
    }
  }
}
</script>

<style lang="scss">
@import "~/cedar-packages/cdr-link/index.scss";
</style>
