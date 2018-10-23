<template>
  <div class="table-examples-wrapperxxx">

    <cdr-data-table
      :col-headers="tableData.colHeaders"
      :row-headers="tableData.rowHeaders"
      :row-data="tableData.rowData"
      :caption="tableData.dataCaption"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-col-lock-scroll"
    />

    <cdr-data-table
      :col-headers="false"
      :row-headers="tableData.rowHeaders"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-headers"
    />

    <cdr-data-table
      :col-headers="false"
      :row-headers="false"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-no-row-headers"
    />

    <cdr-data-table
      caption="“Is it a boy or a girl?” \n
      “I think it’s a bit early to start imposing roles on it, don’t you?”"
      :col-headers="false"
      :row-headers="false"
      :row-data="tableData.rowData"
      :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
      id="auto-table-no-col-no-row-headersx"
    />

    <div id="scrollable-table" style="max-width: 500px">
      <cdr-data-table

        caption="Data Table that should be scrollable"
        :col-headers="false"
        :row-headers="false"
        :row-data="tableData.rowData"
        :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
        id="auto-table-no-col-no-row-headersx"
      />
    </div>
  </div>
</template>

<script>
import { CdrDataTable } from '@rei/cdr-data-table';
import tableData from './data'

export default {
  name: 'Auto',
  components: { CdrDataTable },
  data() {
    return tableData;
  },
};
</script>

<style>
.table-examples-wrapperxxx {
  padding: 10px;
}

.table-examples-wrapperxxx > div {
  margin-bottom: 40px;
}

</style>
