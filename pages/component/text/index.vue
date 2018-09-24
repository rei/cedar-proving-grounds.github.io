<template>
  <div>
    <h2>Text  version: {{ version }}</h2>
    <headings />
    <paragraphs />
  </div>
</template>

<script>
import headings from './Headings';
import paragraphs from './Paragraphs';
const deps = require('~/package').dependencies;

export default {
  name: 'Texts',
  components: {
    headings,
    paragraphs,
  },
  data() {
    return {
      version: deps["@rei/cdr-text"],
    };
  },
};
</script>

