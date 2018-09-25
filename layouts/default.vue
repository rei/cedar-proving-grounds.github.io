<template>
  <div>
     <p>Cedar Proving Grounds</p>
    <!-- make sprite available on every page -->
    <cdr-icon-sprite />
    <!-- add navigation pane to every page -->
    <navigator />
    <br />
    <br />
    <nuxt/>
  </div>
</template>

<script>
import { CdrIconSprite } from '@rei/cdr-icon';
import Navigator from '~/components/navigator/Navigator';

export default {
  name: 'Home',
  components: {
    CdrIconSprite,
    Navigator,
  },
};
</script>

<style lang="scss">
  @import "@rei/cdr-icon/dist/cdr-icon.css";
</style>