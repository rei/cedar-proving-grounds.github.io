<template>
  <div>
    <h2>Images {{ version }}</h2>
    
      <h3>Images from Rest service</h3>
      <img
        :src="imageFromApi" 
        v-if="hasData"
        height=100px
        width=100px
      >
      <h3>Aspect Ratios (with landscape images)</h3>
      <ratios/>
      <cropping/>
      <mods/>

      <h3>Standard image</h3>
      <cdr-img
        alt="ratio standard"
        src="http://placehold.it/200x200"
      />
      <cdr-img
        alt="standard landscape"
        src="http://placehold.it/350x150"
      />
      <cdr-img
        alt="standard portrait"
        src="http://placehold.it/150x350"
      />

      <h3>Image without an alt tag</h3>
      <cdr-img
        src="http://placehold.it/150x350"
      />

      <h3>Image without alt tag, but with title should not be supported behavior</h3>
      <cdr-img
        src="http://placehold.it/150x350"
        title="this should not be supported behavior"
      />

  </div>
</template>

<script>
import { CdrImg } from 'rei-cedar';
import ratios from '~/components/img/Ratios';
import cropping from '~/components/img/Cropping';
import mods from '~/components/img/Mods';
import "isomorphic-fetch";
import "es6-promise";
const deps = require('~/package').dependencies;
const testJpg = require('~/static/constants.json').testJpg;

export default {
  name: 'Images',
  components: {
    CdrImg,
    ratios,
    cropping,
    mods,
  },
  data() {
  return {
      version: deps["@rei/cdr-img"],
      testImage: null,
      hasData: false,
    };
  },
  computed: {
    imageFromApi () {
      return this.testImage; 
    } 
  },
  mounted() {
    fetch(testJpg)
      .then(response => response.url)
      .then((imgUrl) => {
        this.testImage = imgUrl;
        this.hasData = true;
      })
    .catch(err => console.log(err)); /* eslint-disable-line */
  },
};
</script>
