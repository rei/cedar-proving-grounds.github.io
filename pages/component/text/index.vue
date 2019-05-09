<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Text  version: {{ version }}
    </cdr-text>
    <headings />
    <paragraphs />
  </div>
</template>

<script>
import headings from '~/components/text/Headings';
import paragraphs from '~/components/text/Paragraphs';
import { CdrText } from '@rei/cedar';
const deps = require('~/package').dependencies;

export default {
  name: 'Texts',
  components: {
    headings,
    paragraphs,
    CdrText,
  },
  data() {
    return {
      version: deps["@rei/cdr-text"],
    };
  },
};
</script>

