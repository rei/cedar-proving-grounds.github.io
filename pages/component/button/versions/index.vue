<template>
  <div>
    <h1>Versioned Buttons</h1>
    <div
      v-for="(v,k) in VersionedButtons"
      :key="k"
    >
      <component :is="v">test</component>
      <p>{{k}}</p>
    </div>
  </div>
</template>

<script>
import VersionedButtons from '~/cedar-packages/cdr-button/';
console.log(VersionedButtons);

export default {
  name: 'ButtonVersions',
  components: {
    ...VersionedButtons,
  },
  data() {
    return {
      VersionedButtons,
    }
  }
}
</script>

<style lang="scss">
@import "~/cedar-packages/cdr-button/index.scss";
</style>
