<template>
  <cdr-row
    cols="1"
    justify="center"
    align="stretch"
  >
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        img-modifier="responsive"
        modifier="top">
        <cdr-text
          tag="h2"
          modifier="heading-medium">
          <a href="https://rei.com">Responsive</a>
        </cdr-text>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="top stretch">
        <cdr-text
          tag="h2"
          modifier="heading-medium">
          <a href="https://rei.com">Stretch</a>
        </cdr-text>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
    <cdr-col span="4">
      <cdr-media-object
        img-src="http://placehold.it/350x150"
        modifier="top block">
        <cdr-text
          tag="h2"
          modifier="heading-medium">
          <a href="https://rei.com">block</a>
        </cdr-text>
        <p>Cras volutpat, nibh quis fringilla efficitur, dolor sapien posuere ipsum, sit amet
        pharetra est dolor ac est. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent nec ex semper ex congue tristique ac at massa. Duis
        posuere ornare ante, id placerat purus pretium non. Nulla rhoncus libero sed faucibus
        finibus.</p>
      </cdr-media-object>
    </cdr-col>
  </cdr-row>
</template>

<script>
import { CdrMediaObject, CdrCol, CdrRow, CdrText } from 'rei-cedar';

export default {
  name: 'MediaObjectFlux',
  components: { CdrMediaObject, CdrCol, CdrRow, CdrText } ,
};
</script>

<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
