<template>
    <div class="background-wrapper" :style="bgc">
        <h1>{{description}}</h1>
        <section>
            <input type="radio" key="a" v-model="bgc.backgroundColor" value='#511'>light</input>
            <input type="radio" key="b" v-model="bgc.backgroundColor" value='#6544'>dark</input>
        </section>
           <!--  <input type="radio" v-bind:value="light" v-model="color">light</input>
            <input type="radio" v-bind:value="dark" v-model="color">dark</input>
              <br />
              <span>Color: {{color}}</span>
      </section> -->
<!-- <section>
  <h3>radio buttons</h3>
  <input type="radio" v-model="color" value="0">red
  <input type="radio" v-model="color" value="1">blue
  <input type="radio" v-model="color" value="2">yellow
  <br />
  <span>value: {{color}}</span>
</section> -->
<!--              v-on:input="bgc.backgroundColor = $event.target.value"
 -->             
    </div>
</template>

<script>

export default {

    name: "BackgroundToggle",
    data() {
        return {
            description: 'Type any colour name, rgb, hex or hsl in the input below and see what happens!',
            bgc: {
                backgroundColor: ''
            },
            // light: '#00000',
            // dark:'#FFFFFF'
        }
    },
//     color: {
//     light: 0,
//     dark: 1
//   }
}
</script>

<stlye>
.background-wrapper {
    background-color: #673AB7;
}
</stlye>