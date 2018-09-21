<template>
  <div>
    <simple-card/>
  </div>
</template>

<script>
import simpleCard from './Cards/simpleCard';
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

