<template>
  <div>

    <cdr-text
      tag="h2"
      modifier="heading-large">
      List version: {{ version }}
    </cdr-text>

    <unordered-list class="cdr-stack--xl"/>
    <ordered-list class="cdr-stack--xl"/>
    <bare-list class="cdr-stack--xl"/>
  </div>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
import unorderedList from '~/components/list/Unordered';
import orderedList from '~/components/list/Ordered';
import bareList from '~/components/list/Bare';
const deps = require('~/package').dependencies;

export default {
  name: 'Lists',
  components: {
    unorderedList,
    orderedList,
    bareList,
    CdrText,
  },
  data() {
    return {
      version: deps["@rei/cdr-input"],
    };
  }
};
</script>
