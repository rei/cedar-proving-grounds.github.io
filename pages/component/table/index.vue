<template>
  <div>
    <h2>Tables version {{ version }}</h2>
    <auto-table />
    <manual-table />
  </div>
</template>

<script>
import AutoTable from '~/components/table/Auto';
import ManualTable from '~/components/table/Manual';
const deps = require('~/package').dependencies;

export default {
  name: 'Tables',
  components: {
    AutoTable,
    ManualTable,
  },
  data() {
  return {
    version: deps["@rei/cdr-table"],
    };
  },
};
</script>
