<template>
  <div class="icon-examples">
    <h2>Icons version: {{ version }}</h2>
    <cdr-icon-sprite/>
    <icon-account-profile />

    <h3>Default icon size</h3>
    <cdr-icon use="#account-profile" aria-label="I'm a barbie girl"/>
    <hr>

    <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div>
          <div class="cdr-text-center">
            <svg :is="key" />
            <p>{{ key }}</p>
          </div>
          <div class="cdr-text-center">
            <cdr-icon :use="`#${getSpriteId(key)}`" />
            <p>using sprite</p>
          </div>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Small icon size</h3>
    <hr>

    <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            modifier="sm"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Large icon size</h3>
    <hr>

    <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            modifier="lg"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>

  </div>
</template>

<script>
import { CdrCol, CdrRow } from '~/cedar';

import * as Icons from '@rei/cdr-icon';
const deps = require('~/package').dependencies;

export default {
  name: 'Icons',
  components: {
    ...Icons,
    CdrCol,
    CdrRow
  },
  data() {
    return {
      Icons,
      version: deps["@rei/cdr-icon"],
    };
  },
  methods: {
    getSpriteId(name) {
      return name.replace('Icon', '').replace(/([a-zA-Z])([A-Z0-9])/g, '$1-$2').toLowerCase();
    },
  },
};
</script>

<style>
.icon-examples {
  .cdr-icon {
    &:hover {
      fill: red;
    }
  }
}
</style>
