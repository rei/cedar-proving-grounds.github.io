<template>
  <div class="page"  :style="bgc">
     <p>Cedar Proving Grounds</p>
    <!-- make sprite available on every page -->
    <cdr-icon-sprite />
    <!-- add navigation pane to every page -->
    <navigator />
    <section>
      <label>
        <input
          type="radio" 
          aria-label="light background"
          v-model="bgc.backgroundColor"
          :value='light'
        />
        light ({{light}})
      </label>
      <label>
        <input
          type="radio"
          aria-label="dark background"
          v-model="bgc.backgroundColor"
          :value='dark'
        />
        dark ({{dark}})
      </label>
    </section>
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
  data() {
        return {
            description: 'Type any colour name, rgb, hex or hsl in the input below and see what happens!',
            bgc: {
                backgroundColor: ''
            },
            light:'#FFFFFF',
            dark:'#292929',
        }
    },
};
</script>

<style lang="scss">
  @import "@rei/cdr-icon/dist/cdr-icon.css";
.page {
    background-color: #FFFFFF;
}

</style>
