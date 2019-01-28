<template>
    <div>
        <h2>Star Wars API using DataTables version {{ version }}</h2>

    <cdr-data-table
      :col-headers="true"
      :row-headers="true"
      caption="Table with data fed from REST API using slots"
      id="manual-3-col"
    >
      <template slot="thead">
        <tr>
          <th
            class="empty"
            scope="col"
          />
          <th
            v-for="(header, index) in swData.results"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </template>
      <template slot="tbody">
        <tr
          v-for="(record, index) in data.message.results"
          :key="'tr_' + index"
        >
          <th>{{ record }}</th>
          <td
            v-for="(colData, key, index) in record"
            v-if="key !== 'rowheader'"
            :key="index"
          >
            {{ colData }}
          </td>
        </tr>
      </template>
    </cdr-data-table>
    </div>
</template>

<script>
import {CdrDataTable} from '@rei/cdr-data-table';

const deps = require('~/package').dependencies;

export default {
  name: 'swapi',
  data() {
  return {
    version: deps["@rei/cdr-data-table"],
    };
  },
  async asyncData({ app }) {
    const {
      data: { 
        message: swData 
      } 
    } = await app.$axios.get('https://swapi.co/api/people')
    return { swData }
  },
};
</script>

<style>
.table-examples-wrapper {
  padding: 10px;
}

.table-examples-wrapper > div {
  margin-bottom: 40px;
}

</style>