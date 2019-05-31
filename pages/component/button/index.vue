<template>
  <div>
    <default-buttons/>
    <secondary-buttons/>
    <icon-buttons />
  </div>
</template>

<script>
import defaultButtons from '~/components/button/Default';
import secondaryButtons from '~/components/button/Secondary';
import iconButtons from '~/components/button/Icons';

export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    iconButtons
  },
  data() {
    return {
    };
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

