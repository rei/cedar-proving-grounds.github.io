<template>
  <div>
  	<p>Cedar Proving Grounds index.vue</p>

     <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path">{{ route.name }} *
    </router-link>

  	<!-- <router-view></router-view> -->
    <!-- <component v-for="section of data" :key="section.id" :is="section.name" /> -->

  </div>
</template>

<script>
import routes from '~/routes';
for (var i = 0; i< routes.length; i++) {
  console.log(routes[i].name);
}
export default {

  data() {
    return {
      routes
    };
  },
};

</script>

<!--
<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle">
        My horrifying client-rendered Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
-->