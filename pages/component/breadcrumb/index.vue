<template>
  <div class="breadcrumb-demo-container">
    <h2>Breadcrumb version: {{ version }}</h2>
    <h6>Basic Breadcrumb</h6>
    <cdr-breadcrumb
      :items="$store.state.breadcrumbs.breadcrumbData.averageBreadcrumbItems"
    />
    <h6>Short Breadcrumb</h6>
    <cdr-breadcrumb
      :items="$store.state.breadcrumbs.breadcrumbData.shortBreadcrumbItems"
    />
    <h6>Super Long Breadcrumb</h6>
    <cdr-breadcrumb
      :items="$store.state.breadcrumbs.breadcrumbData.superLongBreadcrumbItems"
    />
    <h6>REI.com's Longest Breadcrumb</h6>
    <cdr-breadcrumb
      :items="$store.state.breadcrumbs.breadcrumbData.reiExampleBreadcrumbItems"
    />
  </div>
</template>

<script>
import { CdrBreadcrumb } from '@rei/cdr-breadcrumb'

const deps = require('~/package').dependencies;

export default {
  name: 'Breadcrumb',
  components: { CdrBreadcrumb },
  created () {
    this.$store.dispatch( 'breadcrumbs/loadBreadcrumbData');
    console.log('breadcrumbItems = ', this.$store.state);
  },
  computed: {
    breadcrumbItemData () {
      return this.$store.state.breadcrumbs.breadcrumbItems;
      // return this.firebaseBreadcrumbitems;
    }
  },
  mounted () {
    console.log('Mounted StoreState = ', this.$store.state);
    setTimeout(() => {
      console.log('Timeout StoreState = ', this.$store.state);
    }, 1000);
  },
  updated () {
    console.log('Updated StoreState = ', this.$store.state);
  },
  data() {
    return {
      version: deps["@rei/cdr-breadcrumb"],

    };
  },
};
</script>

<style>
  h2 {
    padding-bottom: 10px;
  }

  h6 {
    margin: 10px 0 10px 10px;
  }
</style>

