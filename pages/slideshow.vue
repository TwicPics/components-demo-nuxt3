<template>
  <div id="twic-slideshow-container">
    <TwicWrapper git-hub-url="pages/slideshow.vue">
      <TwicAbstract title="A Picture Carousel">
        <p>
          Use TwicPics for automatic lazy-loading, CLS optimization and art
          directions adaptation.
        </p>
        <p>
          Monitor the&nbsp;
          <a href="/state" target="_blank" rel="noreferrer">loading status</a>
          &nbsp; of your media with<TwicCode>onStateChange</TwicCode>callback
          property.
        </p>
        <p>
          <strong>Change the width of your browser</strong> to see the image
          aspect-ratio adapt according to the CSS rules.
        </p>
      </TwicAbstract>
      <div class="slideshow-container">
        <SlideShow :images="images" />
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicSlideshow",
    data() {
      return {
        images: [
          {
            url: `components/slideshow/space-1.jpg`,
            focus: ``,
          },
          {
            url: `components/slideshow/space-2.jpg`,
            focus: `50px100p`,
          },
          {
            url: `components/slideshow/space-3.jpg`,
            focus: `50px100p`,
          },
          {
            url: `components/slideshow/space-4.jpg`,
            focus: `50px100p`,
          },
          {
            url: `components/slideshow/space-5.jpg`,
            focus: `50px100p`,
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  #twic-slideshow-container {
    .slideshow-container {
      margin: auto;
      width: 80%;
    }
  }
</style>
