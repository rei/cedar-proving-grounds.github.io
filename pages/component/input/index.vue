<template>
  <div>
    <h2>Text Inputs version: {{ version }}</h2>

    <cdr-input
      label="Max length is 5 characters"
      maxlength="5"
    />
    <!-- empty thing -->
    <!-- <p>Completely empty input</p> -->
    <!-- <cdr-input /> -->

  <!--   <cdr-input
      placeholder="no label used"
    /> -->

    <cdr-input 
      hide-label 
      label="Now go away or I will taunt you a second time."
    />

    <cdr-input
      placeholder="a shorter box"
      style="width: 300px"
      label="Now go away or I will taunt you a second time."
    />

    <cdr-input
      placeholder="high contrast version"
      style="background-color: #292929"
      label="Now go"

    />

    <cdr-input
      placeholder="high contrast with short length"
      style="background-color: #292929; width: 300px"
      label="Now go away or I will taunt you a second time."
    />

    <cdr-input
      v-model="nothing"
      placeholder="high contrast with short length"
      style="shortText"
      label="Now go away or I will taunt you a second time."
    />

    <cdr-input
      v-model="requiredValidated"
      label="Required"
      required
    />

    <cdr-input
      v-model="required"
      label="Default required validation"
      required
    />

    <cdr-input
      v-model="nothing"
      label="Nothing"
    />

    <cdr-input
      v-model="nothing"
      label="This has no label"
      hide-label
      placeholder="hidden-label"
    />

    <cdr-input
      v-model="pattern"
      label="Pattern validation"
      required
     
    />

    <cdr-input
      v-model="empty"
      label="Disabled Input"
      placeholder="I am disabled"
      disabled
    />

    <cdr-input
      v-model="multi"
      label="Multiline"
      :rows="5"
    />

    <cdr-input
      v-model="multi2"
      label="Multiline 10 rows"
      :rows="10"
    />

     <cdr-input
      class="demo-input"
      v-model="requiredWithIcons"
      id="required-with-icon"
      placeholder="Required with Icon"
      label="#5 Input Label"
      required
      type="email">
      <template slot="info">
        <a href="/inputs">
          Info Link/Icon
        </a>
      </template>
      <template slot="pre-icon">
        <icon-twitter inherit-color />
      </template>
      <template slot="post-icon">
        <icon-check-lg inherit-color=true />
      </template>
      <template slot="helper-text">
        This is helper text.
      </template>
    </cdr-input>
    <cdr-input
      class="demo-input"
      v-model="multiRowModel"
      :rows="10"
      placeholder="#6 Multi Line Input/TextArea"
      label="#6 Multi Line Input/TextArea"
    />
  </div>
</template>

<script>
import { CdrInput } from '@rei/cdr-input';
import { IconTwitter, IconCheckLg } from '@rei/cdr-icon';
const deps = require('~/package').dependencies;

export default {
  name: 'Forms',
  components: { CdrInput, IconTwitter, IconCheckLg },
  data() {
    return {
      requiredValidated: '',
      requiredWithIcons: '',
      required: '',
      nothing: '',
      pattern: '',
      empty: '',
      valid: 'hi',
      warning: '',
      error: 1,
      multi: '',
      multi2: '',
      multiRowModel: '',
      version: deps["@rei/cdr-input"],
    };
  },
};
</script>

<style>
.shortText {
  background-color: #292929; 
  width: 300px;
}
</style>