<template>
  <div>
    <h1>Pagination version: {{ version }}</h1>

      <div class="pagination-demo">
        <h2>Example with fetched data</h2>
        <cdr-row>
          <cdr-col
            v-for="d in apiData.data"
            :key="d.id"
          >
            <div>
              <p>{{d.id}}</p>
              <p>{{d.first_name}} {{d.last_name}}</p>
            </div>
          </cdr-col>
        </cdr-row>
      </div>

      <div class="pagination-demo">
        <cdr-pagination
          :pages="pageData"
          :total-pages="apiData.total_pages"
          v-model="currPage"
          @change="navigate"
          @select-change="selected"
        />
      </div>

      <div class="pagination-demo">
        <h2>Example with more pages (faked data)</h2>
        <cdr-pagination 
         :pages="makePages(20, 'faked-page')"
         :total-pages="20"
         v-model="fakedPage"
         @change="faked"
         @select-change="selected"
       />
      </div>

      <div class="pagination-demo">
        <h2>Example with only prev/next (faked data)</h2>
        <cdr-pagination
          :pages="makePages(ex2Pages, 'other-page', fakedPage2 - 2)"
          :total-pages="10"
          v-model="fakedPage2"
          @change="faked"
          @select-change="selected"
        />
      </div>

      <div class="pagination-demo">
        <h2>Example with only one page</h2>
        <cdr-pagination
          :pages="makePages(1)"
          :total-pages="1"
          v-model="fakedPage3"
          @change="faked"
          @select-change="selected"
        />
      </div>

      <div class="pagination-demo">
        <h2>Example with only two pages</h2>
        <cdr-pagination
          :pages="makePages(2)"
          :total-pages="2"
          v-model="fakedPage4"
          @change="faked"
          @select-change="selected"
        />
      </div>


      <div class="pagination-demo" style="background-color: beige">
        <div style="width:200px; background-color: white">
          <h2>Example with many pages in too small of div</h2>
          <cdr-pagination
            :pages="makePages(1000, 'other-page')"
            :total-pages="1000"
            v-model="fakedPage5"
            @change="faked"
            @select-change="selected"
          />
        </div>
      </div>
  </div>
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination';
import { CdrRow, CdrCol } from '@rei/cdr-grid';
const deps = require('~/package').dependencies;


export default {
  name: 'pagination-example',
  components: {
    CdrPagination,
    CdrRow,
    CdrCol,
  },
  async asyncData({ app }) {
    const apiData = await app.$axios.$get('https://reqres.in/api/users');
    return { apiData };
  },
  data() {
    return {
      currPage: 1,
      fakedPage: 1,
      fakedPage2: 5,
      fakedPage3: 1,
      fakedPage4: 2,
      fakedPage5: 1,
      version: deps["@rei/cdr-pagination"],
    };
  },
  computed: {
    pageData() {
      const result = [];
      const arr = Array(this.apiData.total_pages).fill().map((_, i) => i + 1);
      arr.forEach((n) => {
        const obj = {};
        obj.page = n;
        obj.url = `?page=${n}`;
        result.push(obj);
      });
      return result;
    },
    ex2Pages() {
      if (this.fakedPage2 === 1 || this.fakedPage2 === 10) {
        return 2;
      }
      return 3;
    },
  },
  methods: {
    navigate(num, e) {
      console.log(num, e);
      e.preventDefault();
      this.$router.replace({ query: Object.assign({}, this.$route.query, { 'page': num }) });
      this.getPageData(num);
    },
    async getPageData(num) {
      const newData = await this.$axios.$get(`https://reqres.in/api/users?page=${num}`)
      this.apiData = newData;
    },
    faked(num, e) {
      e.preventDefault();
      console.log('change', num, e);
    },
    selected(num, e) {
      console.log('select-change', num, e);
    },
    makePages(total, arg = 'page', startingAt = 0) {
      const adjuster = startingAt > 0 ? startingAt : 0;
      const result = [];
      const arr = Array(total).fill().map((_, i) => i + adjuster + 1);
      arr.forEach((n) => {
        const obj = {};
        obj.page = n;
        obj.url = `?${arg}=${n}`;
        result.push(obj);
      });
      return result;
    },
  },
}
</script>

<style>

</style>
