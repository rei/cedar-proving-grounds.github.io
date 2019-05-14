<template>
  <!-- eslint-disable max-len -->
  <div id="tabcontainer" style="padding:50px">
  <div class="basic-tab-examples">
    <div class="tab-demo-section">
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
            src="http://placehold.it/1200x1200"
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
      <h2>tab panel overflow side-scrolling scenario</h2>
      <cdr-tabs>
        <cdr-tab-panel name="Stop. ">
          <h1>tab one content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Who">
          <h1>tab two content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="would">
          <h1>tab three content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="cross">
          <h1>tab four content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="the">
          <h1>tab five content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Bridge">
          <h1>tab six content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="of">
          <h1>tab seven content</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Death">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="must">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="answer">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="me">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="these">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="questions">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="three,">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="ere">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="the">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="other">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="side">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="he">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="see.">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Ask">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="me ">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="the">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="questions,">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="bridgekeeper.">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="I">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="am">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="not">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="afraid.">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="What...">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="is">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="your">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="name?">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="My">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="name">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="is">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Sir">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Camelot.">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Camelot.">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
        <cdr-tab-panel name="Camelot.">
          <h1>auuuuuuuugh.</h1>
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
  </div>
</div >
</template>

<script>
import { CdrTabs, CdrTabPanel, CdrImg } from 'rei-cedar';

export default {
  name: 'Tabs',
  components: {
    CdrTabs, 
    CdrTabPanel, 
    CdrImg 
  },
  data() {
  return {
    };
  },
};
</script>

<style>
  .tabcontainer {
    padding: 50px;
  }
  .tab-demo-section {
    text-align: center;
    padding-top: 25px;
  }

  .tab-demo-section > h2 {
    text-align: left;
  }
</style>
