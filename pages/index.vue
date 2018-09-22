<template>
  <div>
  	<p>Cedar Proving Grounds</p>

     <nuxt-link
        v-for="route in routes"
        :key="route"
        :to="`/KitchenSink/component/${route}/`">{{ route }}  *
    </nuxt-link>

  	<!-- <router-view></router-view> -->
    <!-- <component v-for="section of data" :key="section.id" :is="section.name" /> -->

  </div>
</template>

<script>
import _ from 'lodash';
const deps = require('~/package').dependencies;

export default {

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