<template>
  <div>
    <nuxt-link to="/#/">home * </nuxt-link>

     <nuxt-link
        no-prefetch
        v-for="route in routes"
        :key="route"
        :to="`/component/${route}/`">{{ route }}  *
    </nuxt-link>

    <nuxt-link to="/testcomponents/">test only components</nuxt-link>
  </div>
</template>




<script>
import _ from 'lodash';
import * as components from 'rei-cedar';
const deps = require('~/package').dependencies;

export default {
  name: 'Navigator',
  data() {
    return {
      deps
    };
  },
  computed: {
    routes() {
      const depArr = _.keys(components);
      var routeArr = depArr.map((dep) => {
        let rep = dep.replace('Cdr', '')
                       .replace('TabPanel', 'tab')
                       .replace('DataTable', 'data-table')
                       .toLowerCase();
          return rep;
      });

      return routeArr.filter(function(e) { return e != 'col'})
                     .filter(function(e) { return e != 'row'})
                     .filter(function(e) { return e != 'accordionitem'})
                     .filter(function(e) { return e != 'tabs'});
    }
  }
};

</script>
<style>
</style>