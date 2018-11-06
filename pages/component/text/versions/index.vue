<template>
  <div>
    <h1>Versioned Components</h1>
    <div
      v-for="(v,k) in VersionedComponents"
      :key="k"
    >
      <component :is="v">test</component>
      <p>{{k}}</p>
    </div>
  </div>
</template>

<script>
import VersionedComponents from '~/cedar-packages/cdr-text/';

export default {
  name: 'ButtonVersions',
  components: {
    ...VersionedComponents,
  },
  data() {
    return {
      VersionedComponents,
    }
  }
}
</script>

<style lang="scss">
</style>
