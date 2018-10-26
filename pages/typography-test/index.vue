<template>
  <div>
    <nav class="type-header">
      <div class="cdr-container type-header__container">
        <form class="type-header__section">
          <fieldset>
            <legend>Typeface:</legend>
            <cdr-radio
              v-for="(v,k) in fontsData"
              :key="v.name"
              name="family"
              v-model="currentFont"
              :value="k"
              class="type-header__radio"
            >{{ v.name }}</cdr-radio>
          </fieldset>
        </form>
        <form class="type-header__section">
          <fieldset>
            <legend>Theme:</legend>
            <cdr-radio
              name="theme"
              v-model="bgTheme"
              value="light"
              class="type-header__radio"
            >Light</cdr-radio>
            <cdr-radio
              name="theme"
              v-model="bgTheme"
              value="dark"
              class="type-header__radio"
            >Dark</cdr-radio>
          </fieldset>
        </form>
      </div>
    </nav>

    <div
      :style="{fontFamily: currentFontData.family }"
      :class="{
        'theme--light': bgTheme === 'light',
        'theme--dark': bgTheme === 'dark',
        'type-test-wrapper': true,
      }"
    >
      <div class="cdr-container">
        <section class="type-section">
          <h1 class="example-heading">Recreational Equipment, Inc.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum incidunt saepe cupiditate id? Commodi molestias laudantium similique possimus libero atque ipsa quo natus, at, iste eveniet asperiores blanditiis deleniti.</p>
        </section>
        <section class="type-section">
          <h2 class="section-title">Characters</h2>
          <p
            v-for="c in currentFontData.characters"
            :key="`${c.value}-${guid()}`"
            :style="c.styles"
            v-html="c.value"
          />
        </section>
        <section class="type-section">
          <h2 class="section-title">Font Weights</h2>
          <cdr-row cols="2 3@sm 5@md">
            <cdr-col
              v-for="c in currentFontData.weights"
              :key="`${c.value}-${guid()}`"
            >
              <p
                class="example-card"
                :style="c.styles"
                v-html="c.value"
              />
            </cdr-col>
          </cdr-row>
        </section>
        <section class="type-section">
          <h2 class="section-title">Paragraph book vs light</h2>
          <cdr-row cols="1 2@sm">
            <cdr-col
              v-for="c in currentFontData.long"
              :key="`${c.value}-${guid()}`"
            >
              <div>
                <h3 :style="c.headingStyles">{{ c.heading }}</h3>
                <p :style="c.styles" v-html="c.p1"/>
                <p :style="c.styles" v-html="c.p2"/>
              </div>
            </cdr-col>
          </cdr-row>
        </section>
        <section class="type-section">
          <h2 class="section-title">Character Ambiguity</h2>
          <cdr-row cols="2 3@sm 5@md">
            <template v-for="c in currentFontData.ambiguous">
              <cdr-col
                v-for="v in c.value"
                :key="`${v}-${guid()}`"
              >
                <p
                  :style="c.styles"
                  class="example-card"
                  v-html="v"
                />
              </cdr-col>
            </template>
          </cdr-row>
        </section>
        <section class="type-section">
          <h2 class="section-title">Typographic Scale</h2>
          <div
            v-for="c in currentFontData.scale"
            :key="`${c.value}-${guid()}`"
          >
            <p
              :style="c.styles"
              v-html="c.value"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { CdrRadio } from '@rei/cdr-radio';
import { CdrRow, CdrCol } from '@rei/cdr-grid';
import fontsData from '~/typographyconfig';

export default {
  name: 'TypographyTest',
  layout: 'blank',
  components: {
    CdrRadio,
    CdrRow,
    CdrCol,
  },
  data() {
    return {
      fontsData,
      currentFont: Object.keys(fontsData)[0],
      bgTheme: 'light',
    };
  },
  computed: {
    currentFontData() {
      return this.fontsData[this.currentFont];
    }
  },
  head () {
    const links = [];
    Object.keys(this.fontsData).forEach(font => {
      const obj = { rel: 'stylesheet' };
      obj.href = this.fontsData[font].href;
      links.push(obj);
    });

    return {
      link: links,
    }
  },
  methods: {
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    },
  }
}
</script>

<style lang="scss">
@import '@rei/cdr-tokens/dist/cdr-tokens.scss';

.type-test-wrapper {
  word-wrap: break-word;

  * {
    color: inherit;
  }
}

.type-header {
  padding-top: $space-1-x;
  padding-bottom: $space-1-x;
  box-shadow: $prominence-raised;
  margin-bottom: 3px;

  &__container {
    display: flex;
  }

  &__section {
    & + & {
      margin-left: $space-2-x;
    }
  }

  &__radio {
    & + & {
      margin-top: $space-1-x;
    }
  }
}

.example-heading {
  font-size: 96px;
  margin-bottom: 2rem;
}

.type-section {
  padding: $space-4-x 0;

  &+& {
    border-top: 1px solid gray;
  }
}

.section-title {
  @include redwood-display-50();

  color: gray;
  margin-bottom: $space-2-x;
}

.character-example {
  &--bold {
    font-weight: bold;
  }
}

.example-card {
  text-align: center;
  padding: $inset-1-x;
  box-shadow: $prominence-raised;
}

.theme {
  &--light {
    background-color: $background-color-lightest;
    color: $text-color-primary-on-light;
  }

  &--dark {
    background-color: $background-color-dark;
    color: $text-color-primary-on-dark;

    .example-card {
      box-shadow: 2px 2px 2px 0 $background-color-darker;
    }
  }
}

</style>
