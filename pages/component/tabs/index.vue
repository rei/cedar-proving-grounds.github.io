<template>
  <!-- eslint-disable max-len -->
  <div id="tabcontainer">
  <div>
    <div class="tab-demo-section">
      <h2>Tabs</h2>
      <cdr-tabs height="100px">
        <cdr-tab-panel name="Tab1">
          <h1>          This is some text. It's not in a <strong>paragraph</strong> element because
          that would include margin and add space to the container. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed dictum fermentum tortor posuere
          fermentum. Sed interdum vel urna at tempor. Nullam vel sapien odio. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce venenatis ex ut ultricies tincidunt. Suspendisse potenti.
          Sed ut euismod mi, sit amet porta augue. Proin dictum laoreet blandit. Nulla
          tempus tellus id ligula sodales ultrices. Proin lacus diam, ornare at libero
          nec, eleifend vulputate mi. Praesent vestibulum accumsan erat id dapibus.
          Suspendisse ut laoreet nunc, et tempor eros. Etiam vel commodo velit. Proin
          egestas fringilla elit et lacinia. Praesent et vehicula massa. Fusce ac purus neque.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Tab2">
          <h1>
            Tab Two Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="REALLY REALLY LARGE TAB NAME">
          <h1>
            Tab Three Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="4">
          <h1>
            Four Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Five">
          <h1>
            Tab Five Content
          </h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Six">
          <h1>
            Tab Six Content
          </h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Compact Modifier -->
    <div class="tab-demo-section">
      <h2>Compact Tabs</h2>
      <cdr-tabs modifier="compact">
        <cdr-tab-panel name="one with image">
          <h1>tab one content</h1>
          <cdr-img
        alt="ratio standard"
        src="http://placehold.it/200x200"
      />
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <h1>tab five content</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- Full Width Modifier -->
    <div class="tab-demo-section">
      <h2>Full Width Tabs</h2>
      <cdr-tabs modifier="full-width">
        <cdr-tab-panel name="one">
          <h1>          This is some text. It's not in a <strong>paragraph</strong> element because
          that would include margin and add space to the container. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed dictum fermentum tortor posuere
          fermentum. Sed interdum vel urna at tempor. Nullam vel sapien odio. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce venenatis ex ut ultricies tincidunt. Suspendisse potenti.
          Sed ut euismod mi, sit amet porta augue. Proin dictum laoreet blandit. Nulla
          tempus tellus id ligula sodales ultrices. Proin lacus diam, ornare at libero
          nec, eleifend vulputate mi. Praesent vestibulum accumsan erat id dapibus.
          Suspendisse ut laoreet nunc, et tempor eros. Etiam vel commodo velit. Proin
          egestas fringilla elit et lacinia. Praesent et vehicula massa. Fusce ac purus neque.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <h1>tab five content</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <!-- No Border Modifier -->
    <div class="tab-demo-section">
      <h2>No Border Tabs</h2>
      <cdr-tabs modifier="no-border">
        <cdr-tab-panel name="one">
          <h1>tab one content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five">
          <h1>tab five content</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
    <div class="tab-demo-section">
      <h2>No Border Tabs</h2>
      <cdr-tabs modifier="no-border">
        <cdr-tab-panel name="one">
          <h1>tab one content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="two">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="four">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="five" height="200px">
          <h1>
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
        </h1>
        <p>
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
        </p>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
  </div>
</div >
</template>

<script>
import { CdrTabs, CdrTabPanel, CdrImage } from '~/cedar';
const deps = require('~/package').dependencies;

export default {
  name: 'Tabs',
  components: { CdrTabs, CdrTabPanel },
    data() {
  return {
    version: deps["@rei/cdr-tabs"],
    };
  },
};
</script>

<style>
  .tabcontainer {
    padding: 2rem;
  }
  .tab-demo-section {
    text-align: center;
    padding-top: 25px;
  }

  .tab-demo-section > h2 {
    text-align: left;
  }
</style>
