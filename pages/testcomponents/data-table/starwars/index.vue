<template>
  <div>
    <h2>Star Wars API using DataTables version: {{version}}</h2>


    <cdr-data-table
      :col-headers="true"
      :row-headers="true"
      caption="Table with data fed from REST API using slots"
      id="slots-example"
    >
      <template slot="thead">
        <tr>
          <th
            class="empty"
            scope="col"
          />
          <th
            v-for="columnName in getColHeaders">
              {{columnName}}
          </th>
          
        </tr>
      </template>
      <template slot="tbody">
        <tr
          v-for="(record, index) in characters"
          :key="'tr_' + index"
        >
          <th>{{ record.name }}</th>
          <td
            v-for="(colData, key, index) in record"
            :key="index"
          >
            {{ colData }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <cdr-data-table
      :col-headers="getColHeaders"
      :row-headers="getRowHeaders"
      :row-data="characters"
      :key-order="getColHeaders"
      caption="REST data fed using cdr api only"
      id="cdr-data-table-api"
    />
  </div>
</template>

<script>
import { CdrDataTable } from '@rei/cdr-data-table'
const axios = require('axios');

var _ = require('underscore');
const deps = require('~/package').dependencies;


export default {
  name: 'swapi',
  components: { CdrDataTable },
  data() {
    return {
      version: deps["@rei/cdr-data-table"],
      characters: [{}],
      hasData: false,
    };
  },
  computed: {
    getColHeaders() {
        return this.hasData ? _.allKeys(this.characters[0]) : [];
    },
    getRowHeaders() {
      return this.hasData ? this.characters.map(char=>char.name) : [];
    }
  },

  mounted() {
    axios.get('https://swapi.co/api/people')
         .then(res => (this.characters = res.data.results))
         .then(this.hasData = true);
  },
}
</script>

<style>
.table-examples-wrapper {
  padding: 10px;
}

.table-examples-wrapper > div {
  margin-bottom: 40px;
}
</style>