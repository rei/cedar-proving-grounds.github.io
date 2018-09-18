<template>
  <div>
    <!-- <component v-for="section of data" :key="section.id" :is="section.name" /> -->
    <nuxt-child />
  </div>
</template>

<script>
import Buttons from '~/pages/KitchenSink/components/Buttons'
// import Cta from 'componentsdir/cta/examples/Cta'
import Links from '~/pages/KitchenSink/components/Links'
import Breadcrumb from '~/pages/KitchenSink/components/Breadcrumb'
// import Cards from 'componentsdir/card/examples/Cards'
// import Checkbox from 'componentsdir/checkbox/examples/checkboxes'
// import Grid from 'componentsdir/grid/examples/Grid'
// import Checkboxes from 'componentsdir/checkbox/examples/checkboxes'
// import Texts from '~/pages/KitchenSink/components/Text'
// import Icons from 'componentsdir/icon/examples/Icons'
import Images from '~/pages/KitchenSink/components/Images'
// import Quotes from '~/pages/KitchenSink/components/Quote'
import Accordion from '~/pages/KitchenSink/components/Accordion'
// import Forms from 'componentsdir/input/examples/Inputs'
// import Lists from 'componentsdir/list/examples/Lists'
// import MediaObject from 'componentsdir/mediaObject/examples/mediaObject'
// import Rating from 'componentsdir/rating/examples/Ratings';
// import Radios from 'componentsdir/radio/examples/Radios'
// import Selects from 'componentsdir/select/examples/Selects'
// import CaptionExample from 'compositionsdir/caption/examples/Caption'
// import Activity from 'compositionsdir/activityCard/examples/activity'
// import Searchbox from 'compositionsdir/search/examples/searchbox'
import Tabs from '~/pages/KitchenSink/components/Tabs'

export default {
  name: 'KitchenSink',
  components: {
    Links,
    Breadcrumb,
    Accordion,
    Buttons,
    // Cta,
    // Texts,
    // Icons,
    // Lists,
    // Selects,
    // MediaObject,
    // Forms,
    // Radios,
    // Rating,
    // Grid,
    // Checkboxes,
    // Cards,
    Images,
    // Searchbox,
    // Quotes,
    // CaptionExample,
    // Activity,
    Tabs
  },
  data() {
    return {
      data: [
        Links,
        Breadcrumb,
        Accordion,
        Buttons,
        // Cta,
        // Cards,
        // Activity,
        // Checkboxes,
        // Grid,
        // Texts,
        // Icons,
        Images,
        // Searchbox,
        // Forms,
        // Lists,
        // MediaObject,
        // Radios,
        // Quotes,
        // Rating,
        // Selects,
        // CaptionExample,
        Tabs
      ]
    }
  }
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

