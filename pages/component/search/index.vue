<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-small">
      Searchbox: {{ version }}
    </cdr-text>

    <cdr-search
      v-model="search1"
      :click="search"/>
    <cdr-text>Searching: {{ search1 }}</cdr-text>

    <cdr-search
      v-model="search1"
      :click="search"
      large/>
    <cdr-text>Searching: {{ search1 }}</cdr-text>

    <cdr-search
      v-model="search2"
      :click="search"
      bare/>
    <cdr-text>Searching: {{ search2 }}</cdr-text>

    <cdr-search
      v-model="search2"
      :click="search"
      bare
      large/>
    <cdr-text>Searching: {{ search2 }}</cdr-text>
  </div>
</template>

<script>
import {CdrText} from '@rei/cdr-text';
import {CdrSearch} from '@rei/cdr-search';
const deps = require('~/package').dependencies;

export default {
  name: 'Searchbox',
  components: { CdrText, CdrSearch },
  data() {
    return {
      search1: '',
      search2: 'bare',
      version: deps["@rei/cdr-search"],
    };
  },
  methods: {
    search() {
      console.log(`Searching ${this.search1}`); // eslint-disable-line
    },
  },
};
</script>

<style>

</style>
