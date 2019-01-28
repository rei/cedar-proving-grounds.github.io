<template>
  <div>
    <h2>DataTables version {{ version }}</h2>
    <nuxt-link to="/testcomponents/data-table/starwars">Star Wars Dataset</nuxt-link>
    <div class="table-container">
      <auto-table />
      <manual-table />
      <table-with-components />
    </div>
  </div>
</template>

<script>
import AutoTable from '~/components/data-table/Auto';
import ManualTable from '~/components/data-table/Manual';
import TableWithComponents from '~/components/data-table/TableWithComponents';

const deps = require('~/package').dependencies;

export default {
  name: 'Tables',
  components: {
    AutoTable,
    ManualTable,
    TableWithComponents
  },
  data() {
  return {
    version: deps["@rei/cdr-data-table"],
    };
  },
};
</script>
