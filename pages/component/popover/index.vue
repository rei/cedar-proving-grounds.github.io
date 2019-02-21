<template>
  <div>
  <div style="padding:20px; position:relative;">
    <h2>Popover: {{ version }} </h2>
    <cdr-button
      js-data="popover-toggle-button"
    >
      Popover
    </cdr-button>
    <cdr-popover
      toggle-button-selector="[js-data='popover-toggle-button']"
    >
      <h4>Welcome to my amazing popover</h4>
      <p>Thanks for stopping by.</p>
    </cdr-popover>

  </div>
  </div>
</template>

<script>
import {CdrButton} from '@rei/cdr-button';
import {CdrPopover} from '@rei/cdr-popover';
import {CdrText} from '@rei/cdr-text';
const deps = require('~/package').dependencies;

export default {
  name: 'Popover',
  components: {
    CdrText,
    CdrPopover,
    CdrButton,
  },
  data() {
    return {
      version: deps["@rei/cdr-popover"],
    }
  }
};
</script>

<style>
</style>