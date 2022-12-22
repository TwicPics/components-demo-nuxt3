<template>
  <div id="twic-placeholder-container">
    <TwicWrapper filename="pages/placeholder.vue">
      <TwicAbstract title="placeholder property">
        <p>
          <strong>
            The <dfn>placeholder</dfn> property helps you optimize user
            experience, CLS, and implement the LQIP technique.
          </strong>
        </p>
        <p>
          TwicPics Components automatically adds a background placeholder to
          your images: their size are reserved in the page before the images are
          actually loaded.
        </p>
        <p>
          The<TwicCode>placeholder</TwicCode>values can be:
          <TwicCode>preview</TwicCode
          >,<TwicCode>meancolor</TwicCode>,<TwicCode>maincolor</TwicCode>or
          <TwicCode>none</TwicCode>.
        </p>
        <p>
          The browser is told to load a SVG version as a background image first,
          then to replace it with the full version later on.
        </p>
        <p>
          When set to<TwicCode>preview</TwicCode>(the default value), a blurry
          version of your image is used as a background image.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button
          class="twic-button"
          @click="() => (showPlaceholders = !showPlaceholders)">
          {{
            showPlaceholders
              ? `Click to reveal images`
              : `Click to reveal placeholders`
          }}
        </button>
      </div>
      <div :class="`twic-grid ${showPlaceholders ? `show-placeholders` : ``}`">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="preview" />
          <span>
            <TwicCode>placeholder="preview"</TwicCode>
            (default value)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="meancolor" />
          <span>
            <TwicCode>placeholder="meancolor"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="maincolor" />
          <span>
            <TwicCode>placeholder="maincolor"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="none" />
          <span>
            <TwicCode>placeholder="none"</TwicCode>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicPlaceholder",
    data() {
      return {
        IMG_URL: `components/cat.jpg`,
        showPlaceholders: false,
        togglePlaceholderBtnText: `Click to reveal the placeholders`,
      };
    },
  };
</script>

<style lang="scss">
  #twic-placeholder-container {
    .show-placeholders {
      img {
        visibility: hidden !important;
      }
      img + div {
        opacity: 1 !important;
      }
    }
  }
</style>
