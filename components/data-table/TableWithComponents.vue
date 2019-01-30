<template>
    <div class="table-examples-wrapper">
         <cdr-data-table
          :col-headers="true"
          :row-headers="true"
          caption="Slots can use components"
          id="manual-3-col-slot"
        >
          <template slot="thead">
            <tr>
              <th
                class="empty"
                scope="col"
              />
              <th>
                Checkbox Col
            </th>
              <th
                v-for="(header, index) in tableData.books.headers"
                :key="index"
              >
                {{ header }}
              </th>
            </tr>
          </template>
          <template slot="tbody">
            <tr
              v-for="(record, index) in tableData.books.records"
              :key="'tr_' + index"
            >

              <th>{{ record.rowheader }}</th>
                <td>
                    <cdr-checkbox>CheckBox</cdr-checkbox>
                </td>
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
import { CdrCheckbox } from '@rei/cdr-checkbox';

import tableData from './data'

export default {
  name: 'TableWithComponents',
  components: {CdrDataTable, CdrCheckbox},
  data() {
    return tableData;
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