<template>
  <div>
    <p>Card version: {{ version }}</p>
    <div>
    <simple-card/>
  </div>
  </div>
</template>

<script>
import simpleCard from '~/components/card/simpleCard';
const deps = require('~/package').dependencies;

export default {
  name: 'Cards',
  components: {
    simpleCard,
  },
    data() {
  return {
    version: deps["@rei/cdr-card"],
    };
  },
};
</script>

