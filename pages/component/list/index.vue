<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-large">
    </cdr-text>

    <unordered-list class="cdr-stack--xl"/>
    <ordered-list class="cdr-stack--xl"/>
    <bare-list class="cdr-stack--xl"/>
  </div>
</template>

<script>
import { CdrText } from 'rei-cedar';
import unorderedList from '~/components/list/Unordered';
import orderedList from '~/components/list/Ordered';
import bareList from '~/components/list/Bare';

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
    };
  }
};
</script>
