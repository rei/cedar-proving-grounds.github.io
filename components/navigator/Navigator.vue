<template>
  <div>
    <nuxt-link to="/#/">home * </nuxt-link>

     <nuxt-link
        v-for="route in routes"
        :key="route"
        :to="`/component/${route}/`">{{ route }}  *
    </nuxt-link>

    <nuxt-link to="/testcomponents/">test only components</nuxt-link>
  </div>
</template>




<script>
import _ from 'lodash';
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
      const ignorePackages = ['@rei/cdr-assets']
      const reiDeps = _.pickBy(this.deps, (v, k) => {
        return (_.startsWith(k, '@rei') && ignorePackages.indexOf(k) === -1);
      });
      const depArr = _.keys(reiDeps);
      const routeArr = depArr.map((dep) => {
        const rep = dep.replace('@rei/cdr-', '');
        return rep;
      });
      return routeArr;
    },
  }
};

</script>
<style>
</style>