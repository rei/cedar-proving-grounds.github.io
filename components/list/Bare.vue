<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading-medium">
      Bare list
    </cdr-text>

    <cdr-list class="cdr-stack--lg">
      <li>List item text</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
        <cdr-list>
          <li>List item text</li>
          <li>List item text</li>
        </cdr-list>
      </li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading-medium">
      Compact bare list
    </cdr-text>

    <cdr-list
      modifier="compact"
      class="cdr-stack--lg"
    >
      <li>List item text</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
        <cdr-list>
          <li>List item text</li>
          <li>List item text</li>
        </cdr-list>
      </li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading-medium">
      Inline bare list
    </cdr-text>

    <cdr-list
      modifier="inline"
      class="cdr-stack--lg"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>

    <cdr-text
      tag="h4"
      modifier="heading-medium">
      Inline compact bare list
    </cdr-text>

    <cdr-list
      modifier="inline compact"
    >
      <li>List item text</li>
      <li>List item text</li>
      <li>List item text</li>
    </cdr-list>
  </div>
</template>

<script>
import { CdrText, CdrList } from 'rei-cedar';

export default {
  name: 'BareList',
  components: { CdrText, CdrList },
};
</script>

<style>

</style>
