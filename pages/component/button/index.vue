<template>
  <div>
    <h2>Buttons version: {{ version }}</h2>
    <default-buttons/>
    <secondary-buttons/>
    <icon-buttons />
  </div>
</template>

<script>
import defaultButtons from '~/components/button/Default';
import secondaryButtons from '~/components/button/Secondary';
import iconButtons from '~/components/button/Icons';

const deps = require('~/package').dependencies;

export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    iconButtons,
  },
  data() {
    return {
      version: deps["@rei/cdr-button"],
    };
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

