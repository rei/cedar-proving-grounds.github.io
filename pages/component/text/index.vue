<template>
  <div>
    <h2>Text  version: {{ version }}</h2>
    <headings />
    <paragraphs />
  </div>
</template>

<script>
import headings from '~/components/text/Headings';
import paragraphs from '~/components/text/Paragraphs';
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

