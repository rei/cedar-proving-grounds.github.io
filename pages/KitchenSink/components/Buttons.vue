<template>
  <div>
    <h2>Buttons version: {{ version }}</h2>
    <default-buttons/>
    <secondary-buttons/>
    <icon-buttons />
  </div>
</template>

<script>
import defaultButtons from './Buttons/Default';
import secondaryButtons from './Buttons/Secondary';
import iconButtons from './Buttons/Icons';

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

