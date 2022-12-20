<template>
  <div class="twic-abstract">
    <h1>{{ title }}</h1>
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TwicAbstract',
  props: {
    title: {
      type: String,
      required: false,
      default: undefined,
    },
  },
}
</script>

<style lang="scss">
.twic-abstract {
  /* margin: 0 0 2rem; */
  margin-bottom: 40px;

  & h1 {
    margin-bottom: 1rem;
  }

  & p {
    margin-bottom: 0.5rem;
    text-align: justify;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 10px 0;
    padding-left: 32px;
  }

  & a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: #8e08fd;
    }
  }
}
</style>
