<template>
  <div class="button-example">
    <cdr-button>Button 1</cdr-button>
    <cdr-button modifier="secondary">Button 2</cdr-button>
  </div>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';

export default {
  name: 'Group',
  components: CdrButton,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
