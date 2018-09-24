<template>
  <section>
    <h2>Media Object</h2>
    <div data-backstop="figure-placement">
      <h3>Media Object Figure Placement</h3>
      <figurePlacement/>
    </div>
    <div data-backstop="media-object-flux">
      <h3>Media Object Flux</h3>
      <mediaObjectFlux/>
    </div>
    <div data-backstop="media-shape-align">
      <h3>Media Figure shapes and body alignment</h3>
      <mediaShapeAlign/>
    </div>
    <div data-backstop="media-object-overlay">
      <h3>Media Object Overlay</h3>
      <mediaOverlay/>
    </div>
  </section>
</template>

<script>
import figurePlacement from './figurePlacement';
import mediaObjectFlux from './mediaObjectFlux';
import mediaOverlay from './mediaOverlay';
import mediaShapeAlign from './mediaShapeAlign';


export default {
  name: 'MediaObject',
  components: {
    figurePlacement,
    mediaObjectFlux,
    mediaOverlay,
    mediaShapeAlign,
  },
};
</script>
