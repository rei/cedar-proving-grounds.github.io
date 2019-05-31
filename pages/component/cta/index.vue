<template>
  <div>
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
    <h2>full-width = true</h2>
    <div class="button-example"
      style="max-width: 300px">
      <cdr-cta
        href="https://rei.com"
        :full-width="true"
      >REI
      </cdr-cta>
    </div>
    <h2>full-width = false</h2>
    <div class="button-example"
      style="max-width: 300px">
      <cdr-cta
        href="https://rei.com"
        :full-width="false"
      >REI
      </cdr-cta>
    </div>
    <h2>full-width = false with lots of text</h2>
    <div class="button-example"
      style="max-width: 300px">
      <cdr-cta
        href="https://rei.com"
        :full-width="false"
      >This button has long text. It wraps!
      </cdr-cta>
    </div>
    <h2>full-width = false with lots of text</h2>
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
import { CdrCta } from 'rei-cedar';

export default {
  name: 'Cta',
  components: {
    CdrCta
  },
  data() {
    return {
    };
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
