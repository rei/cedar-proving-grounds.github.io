<template>
  <div>
    <h2>Quote version: {{ version }}</h2>
    <div class="quotes-examples">
      <blockquotes />

      <pullquotes />
    </div>
  </div>
</template>

<script>
import Blockquotes from '~/components/quote/Blockquotes';
import Pullquotes from '~/components/quote/Pullquotes';
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
  .quotes {
    padding: 50px
  }
</style>
