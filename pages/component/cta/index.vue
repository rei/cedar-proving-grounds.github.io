<template>
  <div>
    <h2>CTA version: {{ version }}</h2>
    <div class="button-example">
      <cdr-cta>
        Dark
      </cdr-cta>
      <cdr-cta
        href="https://rei.com"
        cta-style="brand"
      >Brand</cdr-cta
      >
      <cdr-cta
        href="https://rei.com"
        cta-style="light"
      >Light</cdr-cta
      >
      <cdr-cta
        href="https://rei.com"
        cta-style="sale"
      >Sale
      </cdr-cta>
    </div>
    <div class="button-example">
      <cdr-cta
        cta-style="dark"
        href="https://rei.com"
        :full-width="true"
      >Full width
      </cdr-cta>
    </div>
    <div
      class="button-example"
      style="max-width: 300px">
      <cdr-cta
        href="https://rei.com"
        cta-style="light"
        modifier="elevated">
        This button has long text. It wraps!
      </cdr-cta>
    </div>
  </div>
</template>

<script> 
import { CdrCta } from '@rei/cdr-cta';
const deps = require('~/package').dependencies;

export default {
  name: 'Cta',
  components: {
    CdrCta
  },
  data() {
    return {
      version: deps["@rei/cdr-cta"],
    };
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
