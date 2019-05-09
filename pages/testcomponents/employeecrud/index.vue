<template>
  <div class="pageContainer">
    <h2>A page to validate employee creation</h2>
        <div class="tab-demo-section">
      <h2>Tabs</h2>
      <cdr-tabs height="800">
        <cdr-tab-panel name="Hard-Coded String">
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
        <cdr-tab-panel name="From hard-coded JSON document">
          {{message}}
        </cdr-tab-panel>
        <cdr-tab-panel name="A component that uses json resource">
          <employee-card
            :name="message.employee_name"
            :age="message.employee_age"
            :salary="message.employee_salary"
            :image="message.profile_image"
            :id="message.id"
          />
        </cdr-tab-panel>
      </cdr-tabs>
    </div>
  </div>
</template>

<script>
import {CdrTabs, CdrTabPanel} from 'rei-cedar'
import EmployeeCard from './EmployeeCard'
import axios from 'axios';

export default {
  components: {
    CdrTabs, 
    CdrTabPanel,
    EmployeeCard,
  },

  data() {
    const message = require('./employee.json')
    return {
        message
    }
  // async asyncData({ app }) {
  //   const {
  //     data: { 
  //     message: derpyMessage 
  //     } 
  //   } = await app.$axios.get('http://dummy.restapiexample.com/api/v1/employee/719')
  //   return { derpyMessage }

  }
}
</script>

<style>
.pageContainer {
    padding-left: 5rem;
    padding-right: 5rem;
}

.tab-section {
    text-align: center;
    padding-top: 25px;
}

.tab-demo-section > h2 {
    text-align: left;
}
</style>
</style>