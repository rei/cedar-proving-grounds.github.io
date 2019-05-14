<template>
<div class="cedar-home-page-layout">
<!-- Cedar Home Page for crazy experimenting -->
  <div style="padding: 20px">
    <h2>Cedar version: {{ version }}</h2>
  </div>
</div>
</template>

<script>

const deps = require('~/package').dependencies;

export default {
    name: 'homePage',
    data() {
       return {
          version: deps["@rei/cedar"],
       }
   },
};

</script>
