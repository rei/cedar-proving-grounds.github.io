<template>
  <div>
    <h2>Links version: {{ version }}</h2>

    <h3>Default Link, No props</h3>
    <div class="anchor-example">
      <cdr-link class="regression-link"/>
    </div>

    <h3>Link, href set</h3>
    <div class="anchor-example">
      <cdr-link class="regression-link" href="https://www.rei.com/">REI.com</cdr-link>
    </div>

    <h3>Standalone Link (No underline)</h3>
    <div class="anchor-example">
      <cdr-link
        modifier="standalone"
      />
    </div>

    <h3>Links, with icon</h3>
    <div class="anchor-example">
      <cdr-link>
        <cdr-icon
          use="#mail"
          modifier="inherit-color"
          class="cdr-inline-left--sm"/>
        Icon on the left
      </cdr-link>
      <br>
      <br>
      <cdr-link>
        Icon on the right
        <cdr-icon
          use="#download"
          modifier="inherit-color"
          class="cdr-inline-right--sm"/>
      </cdr-link>
      <br>
      <br>
      <cdr-link>
        <cdr-icon
          use="#twitter"
          modifier="inherit-color"
          class="cdr-inline-left--sm"/>
        Icons on both sides
        <cdr-icon
          use="#external-link"
          modifier="inherit-color"
          class="cdr-inline-right--sm"/>
      </cdr-link>
    </div>

    <h3>Content Resilience, too much content</h3>
    <div class="anchor-example">
      <cdr-link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
      </cdr-link>
    </div>

    <h3>Content Resilience, too little content</h3>
    <div class="anchor-example">
      <cdr-link>K</cdr-link>
    </div>

    <h3>Link using a button element {{ counter }}</h3>
    <div class="anchor-example">
      <cdr-link
        tag="button"
        @click.native.prevent="count"
        >I'm a button doing a button thing!</cdr-link>
        
    </div>
  </div>
</template>

<script>
import { CdrLink } from 'rei-cedar';
import * as Icons from '@rei/cdr-icon';
const deps = require('~/package').dependencies;

export default {
  name: 'Links',
  components: {
    CdrLink,
    ...Icons,
  },
  data() {
  return {
    counter: 0,
    version: deps["@rei/cdr-link"],
    };
  },
  methods: {
    logme: function(value) {
      return value;
    },
    count() {
      this.counter++;
    }
  }
};
</script>

<style>
.anchor-example {
  padding: 20px;
}
</style>
