<template>
  <div>
  	<p>Cedar Proving Grounds App.vue</p>

    <router-link 
        v-for="route in routes" 
        :key="route.name" 
        :to="route.path">{{ route.name }} *
    </router-link>

  	<router-view></router-view>

  </div>
</template>

<script>
import routes from '../routes';

export default {
  name: 'landing',
  data() {
    return {
      routes,
    };
  },
};

</script>

