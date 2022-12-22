<template>
  <div id="twic-working-without-images-container">
    <TwicWrapper filename="pages/page-templating.vue">
      <TwicAbstract title="Prepare your page template">
        <p>
          When you develop the page template and can't or don't want to
          integrate your images at this first stage, it is possible
          <br />
          not to assign a value to the<TwicCode>src</TwicCode>property.
        </p>
        <p>
          In this case, TwicPics components will generate a default red
          placeholder, which displays the dimensions of the image container.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="() => (srcIsSet = !srcIsSet)">
          Click to {{ srcIsSet ? `unset` : `set` }} the src property
        </button>
      </div>
      <div class="twic-grid">
        <div v-for="(image, i) in images" :key="i" class="twic-item">
          <TwicImg
            :src="srcIsSet ? image : undefined"
            placeholder="preview"
            focus="auto"
            :ratio="i % 2 === 0 ? 1 : '4:3'" />
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicPageTemplating",
    data() {
      return {
        images: [
          `components/src-not-set/woman-1.jpg`,
          `components/src-not-set/boat.jpg`,
          `components/src-not-set/vase.jpg`,
          `components/src-not-set/street.jpg`,
          `components/src-not-set/sea.jpg`,
          `components/src-not-set/flowers.jpg`,
          `components/src-not-set/bird.jpg`,
          `components/src-not-set/feet.jpg`,
          `components/src-not-set/lemons.jpg`,
          `components/src-not-set/swimming-pool.jpg`,
          `components/src-not-set/man.jpg`,
          `components/src-not-set/kodak.jpg`,
        ],
        srcIsSet: false,
        self: this,
      };
    },
  };
</script>
