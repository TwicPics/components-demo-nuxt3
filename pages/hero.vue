<template>
  <div id="twic-hero-container">
    <TwicWrapper filename="pages/hero.vue">
      <div class="twic-demo-container">
        <TwicAbstract title="Hero image">
          <p>To display a hero image (or video) you need to :</p>
          <ul>
            <li>
              define the dimensions of TwicImg (or TwicVideo) especially it's
              height.
            </li>
            <li>
              use<TwicCode>ratio="none"</TwicCode>to free
              <a href="/ratio" target="_blank" rel="noreferrer">aspect ratio</a>
            </li>
            <li>
              specify the dimensions of the original image in&nbsp;
              <a href="/intrinsic" target="_blank" rel="noreferrer">
                intrinsic
              </a>
              property as in<TwicCode>intrinsic="3840x2160"</TwicCode>
            </li>
          </ul>
          <p>
            Your hero media should resize itself according to the viewport while
            preserving its intrinsic ratio aspect.
          </p>
          <p>
            <strong>Change the dimensions of your browser </strong>
            to see the image adapt it's new viewport.
          </p>
        </TwicAbstract>
        <div class="hero">
          <TwicImg
            src="components/goldenGate.jpg"
            ratio="none"
            intrinsic="3840x2160" />
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicHero",
  };
</script>
<style lang="scss">
  #twic-hero-container {
    & #twic-demo-container {
      @media screen and (min-width: 1600px) {
        max-width: 95% !important;
      }
    }

    & .twic-abstract {
      margin-bottom: unset !important;
    }
  }

  .twic-demo-container {
    background-color: rgba(#ffffff, $alpha: 0.8);
    padding: 30px;

    .hero {
      z-index: -1;
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;

      & .twic-i {
        height: 100vh;
      }
    }
  }
</style>
