<template>
  <section>
    <h2>Media Object version: {{ version }}</h2>
    <div class="media-object-demo">
      <h3>Media Object Figure Placement</h3>
      <figurePlacement/>
    </div>
    <div class="media-object-demo">
      <h3>Media Object Flux</h3>
      <mediaObjectFlux/>
    </div>
    <div class="media-object-demo">
      <h3>Media Figure shapes and body alignment</h3>
      <mediaShapeAlign/>
    </div>
    <div class="media-object-demo">
      <h3>Media Object Overlay</h3>
      <mediaOverlay/>
    </div>
  </section>
</template>

<script>
import figurePlacement from '~/components/media-object/figurePlacement';
import mediaObjectFlux from '~/components/media-object/mediaObjectFlux';
import mediaOverlay from '~/components/media-object/mediaOverlay';
import mediaShapeAlign from '~/components/media-object/mediaShapeAlign';
const deps = require('~/package').dependencies;


export default {
  name: 'MediaObject',
  components: {
    figurePlacement,
    mediaObjectFlux,
    mediaOverlay,
    mediaShapeAlign,
    version: deps["@rei/cdr-media-object"],
  },
};
</script>
