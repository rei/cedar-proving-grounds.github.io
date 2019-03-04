<template>
  <div>
    <div style="padding:20px; position:relative;">
      <h2>Popover: {{ version }} </h2>
      <cdr-button
        mykey="myvalue"
      >
        Bare-Bones Popover
      </cdr-button>
      <cdr-popover
        toggle-button-selector="[mykey='myvalue']"
      >
        <h4>Welcome to my amazing popover</h4>
        <p>Thanks for stopping by.</p>
      </cdr-popover>
  
        <!-- position: relative is a requirement of the containing div -->
        <div style="display: inline-block; position: relative">
          <cdr-button derp="popover-toggle-button">
            Popover in a 500px div
          </cdr-button>
          <cdr-popover toggle-button-selector="[derp='popover-toggle-button']">
            <h4>Welcome to my amazing popover</h4>
            <p>Thanks for stopping by. blah.</p>
          </cdr-popover>
        </div>
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
.popover-style {

}
</style>