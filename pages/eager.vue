<template>
  <div id="twic-eager-container">
    <TwicWrapper filename="pages/eager.vue">
      <div class="demo-container">
        <TwicAbstract title="eager property">
          <p>
            <strong>
              The <dfn>eager</dfn> property allows to disable lazy loading for a
              given media
            </strong>
            : associated specific media will start loading regardless of whether
            it is visible in the view port.
          </p>
          <p>
            Useful to ensure that media is loaded before entering the viewport
            but not recommended as a general practice.
          </p>
          <p>
            See also the&nbsp;
            <a href="/bulk-loading" target="_blank" rel="noreferrer"
              >TwicView Component</a
            >
            &nbsp; which allows to load all the TwicImg and TwicVideo elements
            it contains in one block, but once TwicView arrives near the
            Viewport.
          </p>
        </TwicAbstract>
        <div v-if="indice === 0" class="twic-testing-container">
          <button class="twic-button" @click="startAnimation">
            Click to start animation
          </button>
        </div>

        <div class="banner-container">
          <div
            class="banner"
            :style="{
              transform: `translateX(-${indice * 100}%)`,
            }">
            <div v-for="(image, i) in images" :key="i" class="item">
              <TwicImg
                :src="image.src"
                :focus="image.focus"
                eager
                ratio="none"
                :pre-transform="image.preTransform" />
            </div>
          </div>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicEager",
    data() {
      return {
        images: [
          {
            src: `components/eager/subway-1.jpg`,
            preTransform: "flip=x",
          },
          {
            src: `components/eager/subway-2.jpg`,
            focus: `50px30p`,
          },
          {
            src: `components/eager/subway-3.jpg`,
          },
          {
            src: `components/eager/subway-4.jpg`,
          },
          {
            src: `components/eager/subway-5.jpg`,
          },
          {
            src: `components/eager/subway-6.jpg`,
          },
        ],
        indice: 0,
        interval: undefined,
        paused: true,
      };
    },
    mounted() {
      this.interval = setInterval(() => {
        if (this.paused) {
          this.indice = 0;
        } else {
          this.indice = (this.indice + 1) % this.images.length;
          this.paused = this.indice === 0;
        }
      }, 1000);
    },
    unmounted() {
      clearInterval(this.interval);
    },
    methods: {
      startAnimation() {
        this.indice = 1;
        this.paused = false;
      },
    },
  };
</script>
<style lang="scss">
  #twic-eager-container {
    .demo-container {
      background-color: rgba(#ffffff, $alpha: 0.8);
      padding: 50px;
      margin-top: calc(100px + 40vh);
    }

    .banner-container {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      white-space: nowrap;
      overflow: hidden;
      z-index: -1;
    }

    .banner {
      transition: transform 200ms;
      transition-timing-function: ease-out;
    }

    .item {
      display: inline-block;
      width: 100%;
    }

    & .twic-i {
      height: 40vh;
    }
  }
</style>
