<template>
  <div class="accordion-container">
    <div class="accordion-group">
      <h3>Default</h3>
      <cdr-accordion
      >
        <cdr-accordion-item
          id="default"
          label="A short label"
          :show="true"
        >
          This is some text. It's not in a <strong>paragraph</strong> element because
          that would include margin and add space to the container. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed dictum fermentum tortor posuere
          fermentum. Sed interdum vel urna at tempor. Nullam vel sapien odio. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce venenatis ex ut ultricies tincidunt. Suspendisse potenti.
          Sed ut euismod mi, sit amet porta augue. Proin dictum laoreet blandit. Nulla
          tempus tellus id ligula sodales ultrices. Proin lacus diam, ornare at libero
          nec, eleifend vulputate mi. Praesent vestibulum accumsan erat id dapibus.
          Suspendisse ut laoreet nunc, et tempor eros. Etiam vel commodo velit. Proin
          egestas fringilla elit et lacinia. Praesent et vehicula massa. Fusce ac purus neque.
        </cdr-accordion-item>
        <cdr-accordion-item
          id="default-long-label"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
        >
          <ul>
            <li>This is a list item inside an accordion.</li>
            <li>It includes no extra styling</li>
            <li>I'm adding a bunch of items</li>
            <li>to this list because</li>
            <li>I want to see what it's like</li>
            <li>when animated!</li>
          </ul>
        </cdr-accordion-item>
      </cdr-accordion>
    </div>
    <div class="accordion-group">
      <h3>Compact and Border-aligned</h3>
      <cdr-accordion
        :compact="true"
        :border-aligned="true"
      >
        <cdr-accordion-item
          id="border-aligned-compact"
          label="Border-aligned and compact"
        >
          It helps to see at least two accordions together.
        </cdr-accordion-item>
        <cdr-accordion-item
          id="border-aligned-compact-2"
          label="Label with multiple words, so many words in fact that
          this content may wrap to several lines"
        >
          Some text inside, should align to the label above.
        </cdr-accordion-item>
      </cdr-accordion>
    </div>
  </div>
</template>

<script>
import { CdrAccordion, CdrAccordionItem } from 'rei-cedar';
import "isomorphic-fetch";
import "es6-promise";

const testJpg = require('~/static/constants.json').testJpg;

export default {
  name: 'Accordion',
  components: { CdrAccordion, CdrAccordionItem },

  data() {
    return {
      testImage: require('~/static/constants.json').testJpg,
      hasData: true,
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

<style>
.accordion-container h2,
.accordion-group h3 {
  margin-bottom: 10px;
}

.accordion-group {
  margin-bottom: 30px;
}
</style>
