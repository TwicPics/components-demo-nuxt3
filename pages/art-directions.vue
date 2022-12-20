<template>
  <div id="twic-art-direction-container">
    <TwicWrapper git-hub-url="pages/art-directions.vue">
      <TwicAbstract title="Art directions with CSS media queries">
        <p>
          Setting up components using CSS enables hassle-free responsive
          designs.
        </p>
        <p>
          You do not need to create a set of images derived from the original.
        </p>
        <p>
          You only need to manage a master image in your template: TwicPics
          understands your CSS and does the rest.
        </p>
        <p>
          <strong>Change the width of your browser </strong>
          to see the image ratio adapt according to the CSS rules.
        </p>
      </TwicAbstract>
      <div class="twic-item style-driven-responsive">
        <TwicImg :src="IMG_URL" focus="48px100p" />
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: 'TwicArtDirections',
  data() {
    return {
      IMG_URL: `components/greece.jpg`,
    }
  },
}
</script>

<style lang="scss">
#twic-art-direction-container {
  .style-driven-responsive {
    --twic-ratio: calc(2 / 3);
    --twic-mode: cover;
    margin: auto;
  }
}

#twic-art-direction-container .style-driven-responsive {
  max-width: 1024px;

  @media (min-width: 640px) {
    --twic-ratio: calc(1);
  }

  @media (min-width: 768px) {
    --twic-ratio: calc(4 / 3);
  }

  @media (min-width: 1024px) {
    --twic-ratio: calc(16 / 9);
  }

  @media (min-width: 1280px) {
    --twic-ratio: calc(1.85);
  }

  @media (min-width: 1536px) {
    --twic-ratio: calc(21 / 9);
  }
}
</style>
