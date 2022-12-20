<template>
  <span class="twic-code"><slot></slot></span>
</template>

<script>
export default {
  name: 'TwicCode',
}
</script>

<style lang="scss">
.twic-code {
  display: inline-block;
  margin: 1px 0;
  padding: 2px 6px;
  font-family: sans-serif;
  font-weight: 500;
  border-radius: 4px;
  background-color: #e4e4e4;
  margin-left: 0.5ch;
  margin-right: 0.5ch;
}
</style>
