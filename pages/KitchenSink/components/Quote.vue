<template>
  <div>
    <h2>Quote version: {{ version }}</h2>
    <blockquotes />

    <pullquotes />
  </div>
</template>

<script>
import Blockquotes from './Quotes/Blockquotes';
import Pullquotes from './Quotes/Pullquotes';
const deps = require('~/package').dependencies;

export default {
  name: 'Quotes',
  components: {
    Blockquotes,
    Pullquotes,
  },
  data() {
    return {
      version: deps["@rei/cdr-quote"],
    };
  },
};
</script>

<style>
</style>
