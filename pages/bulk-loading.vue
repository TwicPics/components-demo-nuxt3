<template>
  <div id="twic-bulk-loading-container">
    <TwicWrapper git-hub-url="pages/bulk-loading.vue">
      <TwicAbstract title="Bulk loading">
        <p>
          With<TwicCode>TwicImg</TwicCode>and<TwicCode>TwicVideo</TwicCode>your
          medias will only start loading when they come into the viewport.
        </p>
        <p>
          But sometimes you may want to load multiple assets in bulk instead of
          lazy loading them.
        </p>
        <p>This is where<TwicCode>TwicView</TwicCode>comes into play.</p>
        <p>
          The<TwicCode>TwicView</TwicCode>components eager loads all of
          his<TwicCode>TwicImg</TwicCode>and&nbsp;
          <TwicCode>TwicVideo</TwicCode>children as soon
          as<TwicCode>TwicView</TwicCode>comes into the viewport (depending on
          your anticipation settings).
        </p>
        <p>
          See also the&nbsp;
          <a href="/eager" target="_blank" rel="noreferrer"> eager property </a>
          &nbsp; that disables lazy loading for a given media.
        </p>
      </TwicAbstract>
      <TwicView>
        <div class="polaroids" @click="changeImage">
          <div :class="`polaroid bottom ${current % 2 === 0 ? `left` : ``}`">
            <TwicImg :src="images[penultimate].url" />
          </div>
          <div
            :class="`polaroid bottom previous ${
              (current - 1) % 2 === 0 ? `left` : ``
            }`"
          >
            <TwicImg :src="images[last].url" />
          </div>
          <div
            v-for="(image, i) in images"
            :key="i"
            :class="`polaroid ${i === current ? `top` : ``} ${
              i % 2 === 0 ? `left` : ``
            }`"
          >
            <TwicImg :src="image.url" />
          </div>
        </div>
      </TwicView>
    </TwicWrapper>
  </div>
</template>
<script>
export default {
  name: 'TwicBulkLoading',
  data() {
    return {
      current: 2,
      last: 1,
      penultimate: 0,
      images: [
        {
          url: `components/bulk-loading/pool-1.jpg`,
        },
        {
          url: `components/bulk-loading/pool-2.jpg`,
        },
        {
          url: `components/bulk-loading/pool-3.jpg`,
        },
        {
          url: `components/bulk-loading/pool-4.jpg`,
        },
        {
          url: `components/bulk-loading/pool-5.jpg`,
        },
      ],
      indiceConfig: 0,
    }
  },
  methods: {
    changeImage() {
      this.current = (this.current + 1) % this.images.length
      this.last = (this.last + 1) % this.images.length
      this.penultimate = (this.penultimate + 1) % this.images.length
    },
  },
}
</script>
<style lang="scss">
#twic-bulk-loading-container {
  $pola-width: 300px;
  $pola-height: 330px;
  $border: 15px solid #ffffff;

  .polaroids {
    width: 100%;
    height: $pola-height + 50px;
    padding: 20px;
    margin: auto;
    position: relative;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }

  .polaroid {
    border: $border;
    border-bottom: 30px solid white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    width: $pola-width;
    transform: translate(2000px) rotate(90deg);
  }

  .top {
    transition: transform 300ms;
    transform: rotate(-2deg) translate(calc(-1 * $pola-width / 2 + 30px), 30px);
    z-index: 2;

    &.left {
      transform: rotate(+2deg)
        translate(calc(-1 * $pola-width / 2 - 30px), +30px);
    }
  }

  .bottom {
    transition: transform 100ms;
    transform: rotate(-1deg) translateX(calc(-1 * $pola-width / 5));
    z-index: 0;

    &.previous {
      z-index: 1;
    }

    &.left {
      transform: rotate(+1deg) translateX(calc(-4 * $pola-width / 5));
    }
  }
}
</style>
