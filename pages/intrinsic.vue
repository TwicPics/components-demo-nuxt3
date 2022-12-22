<template>
  <div id="twic-intrinsic-container">
    <TwicWrapper filename="pages/intrinsic.vue">
      <div class="demo-container">
        <TwicAbstract title="intrinsic property">
          <p>
            <strong>
              The <dfn>intrinsic</dfn> property allows to specify the intrinsic
              dimensions of the image or video in pixel as in<TwicCode
                >intrinsic="1920x1179"</TwicCode
              >
            </strong>
          </p>
          <p>
            It prevents image or video upscaling and limits the number of
            generated variants
          </p>
          <p>
            Especially recommended when your image or video master has
            potentially smaller dimensions than those that may be displayed.
          </p>
          <p>
            This is often the case when using&nbsp;
            <a href="/hero" target="_blank" rel="noreferrer"
              >hero images and videos</a
            >
            .
          </p>
        </TwicAbstract>
        <div class="hero">
          <TwicImg
            src="components/intrinsic/moon.jpg"
            ratio="none"
            intrinsic="1920x1179" />
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicIntrinsic",
  };
</script>
<style lang="scss">
  #twic-intrinsic-container {
    & .twic-abstract {
      margin-bottom: unset !important;
    }
  }

  .demo-container {
    background-color: rgba(#ffffff, $alpha: 0.8);
    padding: 30px;
    margin-top: 20%;

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
