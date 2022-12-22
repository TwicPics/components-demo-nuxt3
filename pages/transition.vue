<template>
  <div id="twic-transition-container">
    <TwicWrapper filename="pages/transition.vue">
      <TwicAbstract title="transition properties">
        <p>
          <strong>
            The <dfn>transition</dfn> properties allow you to customize the
            effect used to reveal the image once it has been loaded
          </strong>
          .
        </p>
        <ul>
          <li>
            <TwicCode>transition</TwicCode>: determines how the image will be
            revealed once loaded (default: <TwicCode>fade</TwicCode>). The
            possible values are: <br />-<TwicCode>fade</TwicCode>, for a
            <em>fade in</em> effect <br />-<TwicCode>zoom</TwicCode>, for a
            <em>zoom</em> effect <br />-<TwicCode>fade+zoom</TwicCode>, for
            both&nbsp; <em>fade</em> and <em>zoom</em> effects <br />-
            or<TwicCode>none</TwicCode>, for no transition
          </li>
          <li>
            <TwicCode>transitionDelay</TwicCode>: transition delay of the
            transition effect (default:&nbsp; <TwicCode>0ms</TwicCode>).
          </li>
          <li>
            <TwicCode>transitionDuration</TwicCode>: duration of the transition
            effect (default:&nbsp; <TwicCode>400ms</TwicCode>).
          </li>
          <li>
            <TwicCode>transitionTimingFunction</TwicCode>: CSS timing function
            applied to the transition effect (default:
            <TwicCode>ease</TwicCode>).
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button
          class="twic-button"
          @click="() => (showTransitions = !showTransitions)">
          {{ showTransitions ? IMG_TEXT : TRANSITIONS_TEXT }}
        </button>
      </div>
      <div :class="`twic-grid ${showTransitions && `show-transitions`}`">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="preview" />
          <span>Default values</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="none" placeholder="preview" />
          <span>
            <TwicCode>transition="none"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="zoom" />
          <span>
            <TwicCode>transition="zoom"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="fade" />
          <span>
            <TwicCode>transition="fade"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="fade+zoom" />
          <span>
            <TwicCode>transition="fade+zoom"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            transition-duration="2000ms"
            placeholder="preview" />
          <span>
            <TwicCode>transitionDuration="2000ms"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            transition-duration="2000ms"
            transition-timing-function="linear"
            placeholder="preview" />
          <span>
            <TwicCode>transitionDuration="2000ms"</TwicCode>
            and<TwicCode>transitionTimingFunction="linear"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            transition-delay="2000ms"
            transition-timing-function="linear"
            placeholder="preview" />
          <span>
            <TwicCode>transitionDelay="2000ms"</TwicCode>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicTransition",
    data() {
      return {
        IMG_TEXT: `Click to show the images`,
        IMG_URL: `components/peacock.jpg`,
        TRANSITIONS_TEXT: `Click to reveal the transitions`,
        showTransitions: false,
        togglePlaceholderBtnText: `Click to reveal the transitions`,
      };
    },
  };
</script>

<style lang="scss">
  #twic-transition-container {
    .show-transitions {
      .twic-tf img:hover {
        opacity: 0 !important;
      }

      .twic-tf img + div {
        opacity: 1 !important;
      }

      .twic-tz img {
        transform: scale(0) !important;
      }
    }
  }
</style>
