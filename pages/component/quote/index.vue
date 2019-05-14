<template>
  <div>
    <div class="quotes-examples">
      <blockquotes />

      <pullquotes />
    </div>
  </div>
</template>

<script>
import Blockquotes from '~/components/quote/Blockquotes';
import Pullquotes from '~/components/quote/Pullquotes';

export default {
  name: 'Quotes',
  components: {
    Blockquotes,
    Pullquotes,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
  .quotes {
    padding: 50px
  }
</style>
