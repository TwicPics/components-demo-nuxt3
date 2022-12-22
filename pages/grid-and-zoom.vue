<template>
  <div id="twic-grid-and-zoom">
    <TwicWrapper filename="pages/grid-and-zoom.vue">
      <TwicAbstract title="TwicPics grid & zoom">
        <p>A responsive grid of images enhanced by zoom transition.</p>
        <p>
          <strong>Scroll down to experience lazy loading in action</strong>.
        </p>
      </TwicAbstract>
      <ul>
        <li v-for="(image, index) in images" :key="index" class="twic-item">
          <TwicImg
            :src="image.url"
            :focus="image.focus"
            transition="fade+zoom"
            transition-duration="500ms"
            ratio="4/3"
            mode="cover">
          </TwicImg>
        </li>
      </ul>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicGridAndZoom",
    data() {
      return {
        seed: [
          {
            url: `components/portraits/woman-1.jpg`,
            focus: `50px45p`,
          },
          {
            url: `components/portraits/man-1.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/woman-2.jpg`,
            focus: `50px30p`,
          },
          {
            url: `components/portraits/man-2.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-3.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-3.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-4.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-4.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-5.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-5.jpg`,
            focus: `50px0p`,
          },
          {
            url: `components/portraits/woman-6.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-6.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-7.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-7.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-8.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-8.jpg`,
            focus: `50px100p`,
          },
          {
            url: `components/portraits/woman-9.jpg`,
            focus: `50px30p`,
          },
          {
            url: `components/portraits/man-9.jpg`,
            focus: `50px30p`,
          },
          {
            url: `components/portraits/woman-10.jpg`,
            focus: `50px55p`,
          },
          {
            url: `components/portraits/man-10.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-11.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/man-11.jpg`,
            focus: `50px35p`,
          },
          {
            url: `components/portraits/woman-12.jpg`,
            focus: `50px30p`,
          },
          {
            url: `components/portraits/man-12.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-13.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-13.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-14.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/man-14.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-15.jpg`,
            focus: `50px30p`,
          },
          {
            url: `components/portraits/man-15.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-16.jpg`,
            focus: `50px55p`,
          },
          {
            url: `components/portraits/man-16.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/woman-17.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-17.jpg`,
            focus: `50px60p`,
          },
          {
            url: `components/portraits/woman-18.jpg`,
            focus: ``,
          },
          {
            url: `components/portraits/man-18.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/woman-19.jpg`,
            focus: `50px60p`,
          },
          {
            url: `components/portraits/man-19.jpg`,
            focus: `50px20p`,
          },
          {
            url: `components/portraits/woman-20.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/woman-21.jpg`,
            focus: `50px45p`,
          },
          {
            url: `components/portraits/woman-22.jpg`,
            focus: `50px55p`,
          },
          {
            url: `components/portraits/man-22.jpg`,
            focus: `50px35p`,
          },
          {
            url: `components/portraits/woman-23.jpg`,
            focus: `50px45p`,
          },
          {
            url: `components/portraits/man-26.jpg`,
            focus: `50px45p`,
          },
          {
            url: `components/portraits/woman-25.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/man-24.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/woman-26.jpg`,
            focus: `50px40p`,
          },
          {
            url: `components/portraits/man-25.jpg`,
            focus: `50px40p`,
          },
        ],
        /**
         * list of images to display
         */
        images: [],
      };
    },
    created() {
      this.images = [...this.seed, ...this.seed, ...this.seed];
    },
  };
</script>

<style lang="scss">
  #twic-grid-and-zoom {
    ul {
      display: grid;
      gap: 1rem;
      list-style: none;
      position: relative;
      width: 100%;
    }

    li {
      &:hover {
        & img.twic-done {
          transform: scale(1.2) !important;
        }
      }
    }
  }

  #twic-grid-and-zoom ul {
    @media screen and (min-width: 425px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>
