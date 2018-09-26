<template>
  <div>
    <h2>Images</h2>
    
      <h3>Images from Rest service</h3>
      <cdr-img
        :src=dogData
        />
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

  </div>
</template>

<script>
import { CdrImg } from '@rei/cdr-img';
import ratios from '~/components/img/Ratios';
import cropping from '~/components/img/Cropping';
import mods from '~/components/img/Mods';

export default {
  name: 'Images',
  components: {
    CdrImg,
    ratios,
    cropping,
    mods,
  },
    async asyncData({ app }) {
    const {
      data: { 
      message: dogData 
      } 
    } = await app.$axios.get('https://dog.ceo/api/breeds/image/random')
    return { dogData }
  },
};
</script>
