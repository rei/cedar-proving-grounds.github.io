<template>
  <div>
    <div class="button-example">
      <h2>CdrButton + CdrIcon Comps</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--large icon"
      ><icon-check-lg
        class="cdr-button__icon"
      />Anchor and Icon</cdr-button
      >
      <cdr-button
        size="medium"
        data-backstop="cdr-button--medium icon"
      ><icon-check-lg
        class="cdr-button__icon"
      />Medium and Icon</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-check-lg
        modifier="sm"
        class="cdr-button__icon"
      />Icon CSS small</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-check-sm
        class="cdr-button__icon"
      />Small (different) icon</cdr-button
      >
    </div>
    <div class="button-example">
      <h2>Using a sprite</h2>
      <cdr-button
        size="large"
        modifier="secondary"
      ><cdr-icon
        class="cdr-button__icon"
        use="#download"
      />Button and Icon</cdr-button
      >
      <cdr-button
        size="medium"
        modifier="secondary"
        data-backstop="cdr-button--medium secondary icon"
      ><cdr-icon
        class="cdr-button__icon"
        use="#twitter"
      />Button and Icon</cdr-button
      >
      <cdr-button
        size="small"
        modifier="secondary"
        data-backstop="cdr-button-small secondary icon"
      ><cdr-icon
        class="cdr-button__icon"
        use="#instagram"
      />Button and Icon</cdr-button
      >
    </div>
    <div class="button-example">
      <cdr-button
        size="small large@xs medium@sm small@lg"
      ><icon-clock
        class="cdr-button__icon"
      />Responsive</cdr-button
      >
    </div>
    <div class="button-example">
      <cdr-button
        size="large"
        full-width
        data-backstop="cdr-button--large full-width icon"
      ><icon-clock
        class="cdr-button__icon"
      />Full Width</cdr-button>
    </div>
  </div>
</template>

<script>
import { CdrButton, CdrIcon, IconCheckLg, IconCheckSm, IconClock } from 'rei-cedar';

export default {
  name: 'ButtonIconComps',
  components: {
    CdrButton,
    IconCheckLg,
    IconCheckSm,
    IconClock,
    CdrIcon,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
