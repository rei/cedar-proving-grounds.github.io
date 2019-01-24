<template>
  <div class="table-examples-wrapper">

    <cdr-data-table
      :col-headers="true"
      :row-headers="true"
      caption="Table with data fed in using slots"
      id="manual-3-col"
    >
      <template slot="thead">
        <tr>
          <th
            class="empty"
            scope="col"
          />
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

    <cdr-data-table
      caption="Scroll example"
      :row-headers="true"
      id="manual-scroll"
    >
      <template slot="tbody">
        <tr
          v-for="(record, key, index) in tableData.scroll.records"
          :key="index + '_' + key"
        >
          <th>{{ record.rowheader }}</th>
          <td
            v-for="(colData, key, index) in record"
            v-if="key !== 'rowheader'"
            :key="key + '_' + index"
          >
            {{ colData }}
          </td>
        </tr>
      </template>
    </cdr-data-table>

    <!-- <cdr-data-table
      caption="Scroll example - No column headers"
      :row-headers="false"
      id="manual-full-scroll"
    >
      <tr
        v-for="(record, key, index) in tableData.scroll.records"
        :key="'row_' + key + index"
      >
        <td
          v-for="(colData, key, index) in record"
          v-if="key !== 'rowheader'"
          :key="index + '_' + key"
        >
          {{ colData }}
        </td>
      </tr>
    </cdr-data-table> -->

    <cdr-data-table
      modifier="compact borderless"
      caption="Full Manual - Compact & Borderless with a cell with large data"
      summary="Summary"
      id="full-manual"
    >
      <template slot="tbody">
        <tr>
          <th>Best Use</th>
          <td>Casual</td>
        </tr>
        <tr>
          <th>Fabric</th>
          <td>Cotton canvas</td>
        </tr>
        <tr>
          <th>Lining Fabric</th>
          <td>Polyester microfleece/nylon</td>
        </tr>
        <tr>
          <th>“We are three wise men.” </th>
          <td>No</td>
        </tr>
        <tr>
          <th>Black Length</th>
          <td>“Well, what are you doing creeping around a cow shed at two o’clock in the morning? That doesn’t sound very wise to me.”</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>Unavailable</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>Men's</td>
        </tr>
        <tr>
          <th>Number</th>
          <td class="content-align-right">25</td>
        </tr>
      </template>
    </cdr-data-table>

  </div>
</template>

<script>
import {CdrDataTable} from '@rei/cdr-data-table';
import tableData from './data'

export default {
  name: 'ManualTable',
  components: {CdrDataTable},
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
