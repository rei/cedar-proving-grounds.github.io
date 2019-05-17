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
      const depArr = _.keys(components)
     
      var routeArr = depArr.map((dep) => {
        let rep = dep.replace('Cdr', '')
                     .replace('TabPanel', 'tab')
                     .replace('DataTable', 'data-table')
                     .replace('Row', 'grid')
                     .toLowerCase();

        return rep;
      });

      // remove icons and replace with 'icon'
      // Object.keys(routeArr)
      //       .filter(key => routeArr[key].match(/^icon/))
      //       .reduce((o,k) => (routeArr[k] = 'icon'))

      // let withoutIcons = [... new Set(routeArr)];

      return  routeArr.filter(e => e !== 'col')
                          .filter(e => e !== 'accordionitem')
                          .filter(e => e !== 'tabs')
    }
  }
};

</script>
<style>
</style>