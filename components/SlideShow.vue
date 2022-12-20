<template>
  <div
    class="slideshow"
    @mouseenter="() => setPaused(true)"
    @mouseleave="() => setPaused(false)"
  >
    <button
      class="slick-prev slick-arrow"
      :disabled="!imageReady"
      @click="() => updateIndex(activeIndex - 1)"
    >
      &#8249;
    </button>
    <div class="twic-item">
      <div class="inner-container">
        <div>
          <div
            class="inner"
            :style="{
              transform: `translateX(-${activeIndex * 100}%)`,
            }"
          >
            <div v-for="image in images" :key="image.url" class="item">
              <TwicImg
                class="responsive"
                :src="image.url"
                :focus="image.focus"
                @stateChange="handleStateChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="slick-dots">
      <li
        v-for="(image, imgIndex) in images"
        :key="image.url"
        :class="{ 'slick-active': imgIndex === activeIndex }"
      >
        <button
          :disabled="!imageReady"
          @click="() => updateIndex(imgIndex)"
        ></button>
      </li>
    </ul>
    <button
      class="slick-next slick-arrow"
      :disabled="!imageReady"
      @click="() => updateIndex(activeIndex + 1)"
    >
      &#8250;
    </button>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
      imageReady: false,
      interval: undefined,
      isPaused: false,
      timerDuration: 3000,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.updateIndex(this.activeIndex + 1)
      }
    }, this.timerDuration)
  },
  unmounted() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleStateChange(event) {
      const { state } = event
      this.imageReady = state === `error` || state === `done`
    },
    setPaused: function (value) {
      this.isPaused = value
    },
    updateIndex: function (newIndex) {
      let _newIndex = newIndex
      if (newIndex < 0) {
        this.activeIndex = this.images.length - 1
      } else if (newIndex >= this.images.length) {
        _newIndex = 0
      }
      this.activeIndex = _newIndex
    },
  },
}
</script>

<style lang="scss">
button:disabled {
  cursor: not-allowed;
  opacity: 0.2;
}

.slideshow {
  position: relative;
  .twic-item {
    padding-bottom: 8px !important;
    margin-bottom: 8px;
  }
  .inner-container {
    overflow: hidden;

    & .inner {
      transition: transform 0.9s;
      white-space: nowrap;

      & .item {
        align-items: center;
        background-color: transparent;
        display: inline-block;
        justify-content: center;
        width: 100%;
      }
    }
  }

  .slick-dots {
    text-align: center;
    padding: 0;

    & li {
      display: inline-block;
      height: 20px;
      width: 20px;
      margin: 0 5px;
      padding: 0;
      position: relative;

      & button {
        background: 0 0;
        border: 0;
        color: transparent;
        cursor: pointer;
        display: block;
        line-height: 0;
        padding: 5px;
        outline: 0;
        height: 20px;
        width: 20px;

        &:before {
          color: #000;
          content: '•';
          font-family: slick;
          font-size: 30px;
          line-height: 20px;
          position: absolute;
          text-align: center;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          opacity: 0.25;
          -webkit-font-smoothing: antialiased;
        }
      }

      &.slick-active,
      &:hover {
        & button {
          &:before {
            opacity: 0.75;
          }
        }
      }
    }
  }

  .slick-arrow {
    border: 0;
    border-radius: 50%;
    color: #000;
    cursor: pointer;
    display: block;
    font-size: 2rem;
    position: absolute;
    height: 3rem;
    width: 3rem;
    top: calc(50% - 1.5rem);
    outline: 0;
    opacity: 0.5;
    padding-bottom: 5px;

    &:hover {
      opacity: 0.75;
    }

    &.slick-prev {
      left: -4rem;
    }

    &.slick-next {
      right: -4rem;
    }
  }

  .responsive {
    --twic-ratio: calc(1);

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
}
</style>
