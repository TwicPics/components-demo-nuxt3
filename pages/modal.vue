<template>
  <div id="twic-modal-container">
    <TwicWrapper filename="pages/modal.vue">
      <TwicAbstract title="A modal revealer">
        <p>Click on the image of your choice to reveal a modal.</p>
      </TwicAbstract>
      <div class="twic-grid">
        <div v-for="(image, imageIndex) in images" :key="image.url">
          <figure
            class="poster-wrapper twic-item"
            @click="() => (idModalToOpen = imageIndex)">
            <TwicImg :src="image.url" focus="auto" ratio="0.95"></TwicImg>
            <figcaption>
              <p>Click</p>
            </figcaption>
          </figure>
          <Modal
            :image="image"
            :show="imageIndex === idModalToOpen"
            :on-close="() => (idModalToOpen = null)"></Modal>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicModal",
    data() {
      return {
        images: [
          {
            url: `components/modal/seagull.jpg`,
            caption: `seagulls`,
          },
          {
            url: `components/modal/shell.jpg`,
            caption: `shell`,
          },
          {
            url: `components/modal/jelly-fish.jpg`,
            caption: `jelly fish`,
          },
          {
            url: `components/modal/turtle.jpg`,
            caption: `turtle`,
          },
        ],
        idModalToOpen: null,
      };
    },
  };
</script>

<style lang="scss">
  #twic-modal-container {
    figure.poster-wrapper {
      position: relative;

      figcaption {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px;
        font-size: 1.3em;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }

      figcaption:hover {
        opacity: 1;
      }
    }
  }
</style>
