<template>
  <div>
    <h2>DataTables version {{ version }}</h2>
    <auto-table />
    <manual-table />
  </div>
</template>

<script>
import AutoTable from '~/components/data-table/Auto';
import ManualTable from '~/components/data-table/Manual';
const deps = require('~/package').dependencies;

export default {
  name: 'Tables',
  components: {
    AutoTable,
    ManualTable,
  },
  data() {
  return {
    version: deps["@rei/cdr-data-table"],
    };
  },
};
</script>
