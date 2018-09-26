<!-- <template>
  <div class="cedar-home-page-layout">
   Cedar Home Page for crazy experimenting

  </div>
</template>

<script>


</script> -->

<template>
  <div>
    <h1>Dog</h1>
    <img :src="dog">{{dog}}</img>
  </div>
</template>

<script>

export default {

  async asyncData({ app }) {
    const { data: { message: dog } } = await app.$axios.get('https://dog.ceo/api/breeds/image/random')
    return { dog }
  }
}
</script>