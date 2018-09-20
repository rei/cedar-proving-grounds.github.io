<template>
  <div>
  	<p>Cedar Proving Grounds</p>

     <nuxt-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path">{{ route.name }}  *
    </nuxt-link>

  	<!-- <router-view></router-view> -->
    <!-- <component v-for="section of data" :key="section.id" :is="section.name" /> -->

  </div>
</template>

<script>
import routes from '~/routes';
export default {

  data() {
    return {
      routes
    };
  },
};

</script>