<template>
  <div>
    <h2>Images</h2>
    <div data-backstop="image-aspect-ratio">
      <h3>Aspect Ratios (with landscape images)</h3>
      <ratios/>
    </div>

    <div data-backstop="image-cropping">
      <cropping/>
    </div>

    <div data-backstop="image-mods">
      <mods/>
    </div>

    <div data-backstop="image-standard">
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
};
</script>
