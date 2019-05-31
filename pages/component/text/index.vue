<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
    </cdr-text>
    <headings />
    <paragraphs />
  </div>
</template>

<script>
import headings from '~/components/text/Headings';
import paragraphs from '~/components/text/Paragraphs';
import { CdrText } from 'rei-cedar';

export default {
  name: 'Texts',
  components: {
    headings,
    paragraphs,
    CdrText,
  },
  data() {
    return {
    };
  },
};
</script>

