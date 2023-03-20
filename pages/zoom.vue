<template>
  <div id="twic-zoom-container">
    <TwicWrapper filename="pages/zoom.vue">
      <TwicAbstract title="zoom property">
        <p>
          <strong>
            The <dfn>zoom property</dfn> allows you to display a
            <dfn>lazy-loaded enlarged</dfn> version of your image when you hover
            the mouse </strong
          >.
        </p>
        <TwicCode>zoom</TwicCode> value
        <ul>
          <li>is a number <strong>strictly superior to 1</strong></li>
          <li>
            can be set using the <TwicCode>zoom</TwicCode> prop of
            <TwicCode>TwicImg</TwicCode> component or through
            <TwicCode>--twic-zoom</TwicCode>
            <a href="/style-driven" target="_blank" rel="noreferrer"
              >CSS variable</a
            >.
          </li>
          <li>
            can be combined with the
            <a href="/pre-transform" target="_blank" rel="noreferrer"
              >preTransform</a
            >
            property
          </li>
        </ul>
        <p>
          We recommend using
          <a href="/intrinsic" target="_blank" rel="noreferrer">intrinsic</a>
          property to avoid upscaling.
        </p>
        <p>
          It applies only to <TwicCode>TwicImg</TwicCode> component in cover
          <a href="/mode" target="_blank" rel="noreferrer">mode</a>.
        </p>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg
            :zoom="zoom"
            src="components/zoom/stamps-on-booklet.jpg"
            intrinic="2996x4502" />
          <span>
            <TwicCode>zoom="{{ zoom }}"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :zoom="zoom"
            src="components/zoom/stamp-on-envelopes.jpg"
            intrinsic="2400x3600"
            ratio="4/3" />
          <span>
            <TwicCode>ratio="4/3" + zoom="{{ zoom }}"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :zoom="zoom"
            src="components/zoom/stamp-on-envelopes.jpg"
            preTransform="focus=40px35p/crop=800x800"
            intrinsic="800x800" />
          <span>
            <TwicCode>preTransform + zoom="{{ zoom }}"</TwicCode>
          </span>
        </div>
      </div>
      <div class="twic-testing-container">
        <button
          class="twic-button"
          @click="
            () => {
              zoom += 0.5;
              if (zoom > 4) {
                zoom = 1.5;
              }
            }
          ">
          Change zoom factor
        </button>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicBot",
    data() {
      return {
        zoom: 1.5,
      };
    },
  };
</script>
<style lang="scss">
  #twic-zoom-container {
    .twic-grid {
      --twic-grid-columns-width: calc(400px);
    }
    .twic-item {
      cursor: crosshair;
    }
  }
</style>
