<template>
  <TwicWrapper>
    <div class="home-container">
      <div
        v-for="category in categories"
        :key="category.title"
        class="twic-panel">
        <h3>{{ category.title }}</h3>
        <div class="twic-grid">
          <NuxtLink
            v-for="item in category.items"
            :key="item.route"
            :to="item.route">
            <figure class="twic-item">
              <TwicImg
                v-if="item.imgSrc"
                :src="item.imgSrc"
                :focus="item.focus ? item.focus : 'auto'"
                ratio="0.95"></TwicImg>
              <TwicVideo
                v-else
                :src="item.videoSrc"
                ratio="0.95"
                :intrinsic="item.intrinsic" />
              <figcaption>
                <p>{{ item.title }}</p>
              </figcaption>
            </figure>
          </NuxtLink>
        </div>
      </div>
    </div>
  </TwicWrapper>
</template>

<script>
  export default {
    name: "HomeView",
    data() {
      return {
        categories: [
          {
            title: `Use cases`,
            items: [
              {
                route: `/art-directions`,
                imgSrc: `components/greece.jpg`,
                title: `Art directions`,
              },
              {
                route: `/basic-grid`,
                imgSrc: `https://assets.twicpics.com/examples/football.jpg`,
                title: `Basic example`,
              },
              {
                route: `/bulk-loading`,
                imgSrc: `components/bulk-loading/pool-1.jpg`,
                focus: `50px100p`,
                title: `Bulk loading`,
              },
              {
                route: `/color-blindness`,
                imgSrc: `components/color-blindless/umbrellas.jpg`,
                title: `Color blindness`,
              },
              {
                route: `/flip-cards`,
                imgSrc: `components/flip/orange-1.jpg`,
                title: `Flip cards`,
              },
              {
                route: `/grid-and-zoom`,
                imgSrc: `components/portraits/woman-1.jpg`,
                title: `Grid & zoom`,
              },
              {
                route: `/hero`,
                imgSrc: `components/goldenGate.jpg`,
                title: `Hero image`,
              },
              {
                route: `/modal`,
                imgSrc: `components/modal/seagull.jpg`,
                title: `Modal`,
              },
              {
                route: `/page-templating`,
                focus: `bottom`,
                imgSrc: `components/woman.jpg`,
                title: `Page templating`,
              },
              {
                route: `/short-videos`,
                videoSrc: `video/skater.mp4`,
                title: `Short videos`,
                intrinsic: "1280x720",
              },
              {
                route: `/slider`,
                imgSrc: `components/slider/pantone.jpg`,
                title: `Slider`,
              },
              {
                route: `/slideshow`,
                imgSrc: `components/slideshow/space-1.jpg`,
                title: `Slideshow`,
              },
              {
                route: `/style-driven`,
                imgSrc: `components/horse.jpg`,
                title: `Style driven`,
              },
            ],
          },
          {
            title: `Properties`,
            items: [
              {
                route: `/anchor`,
                imgSrc: `components/anchor/anchor.jpg`,
                title: `anchor`,
              },
              {
                route: `/bot`,
                imgSrc: `components/bot/robot.jpg`,
                title: `bot`,
              },
              {
                route: `/eager`,
                imgSrc: `components/eager/subway-1.jpg`,
                preTransform: `flip=x`,
                title: `eager`,
              },
              {
                route: `/focus`,
                imgSrc: `components/puppy.jpg`,
                title: `focus`,
              },
              {
                route: `/intrinsic`,
                imgSrc: `components/intrinsic/moon.jpg`,
                focus: `50px50p`,
                title: `intrinsic`,
              },
              {
                route: `/mode`,
                imgSrc: `components/fox.jpg`,
                title: `mode`,
              },
              {
                route: `/placeholder`,
                imgSrc: `components/cat.jpg`,
                focus: `50px50p`,
                title: `placeholder`,
              },
              {
                route: `/position`,
                imgSrc: `components/position/horse.jpg`,
                focus: `50px50p`,
                title: `position`,
              },
              {
                route: `/pre-transform`,
                imgSrc: `components/man-hiding-his-hands.jpg`,
                title: `preTransform`,
              },
              {
                route: `/ratio`,
                imgSrc: `components/woman-and-winter.jpg`,
                focus: `50px50p`,
                title: `ratio`,
              },
              {
                route: `/state`,
                imgSrc: `components/state/autumn.jpg`,
                title: `state`,
              },
              {
                route: `/transition`,
                imgSrc: `components/peacock.jpg`,
                title: `transition`,
              },
            ],
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .home-container {
    h3 {
      margin-bottom: 1rem;
    }

    .twic-grid {
      --twic-grid-columns-width: calc(200px);
    }

    .twic-item {
      & img {
        transition: 0.3s all ease-in-out;
      }
      &:hover {
        & img.twic-done {
          transform: scale(1.1) !important;
        }
      }
    }

    figure {
      position: relative;
      & figcaption {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px;
        height: 40px;
        text-align: center;
        font-size: 1em;
        font-weight: 600;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.3s;
      }
      &:hover {
        cursor: pointer;
        & figcaption {
          bottom: 40%;
        }
      }
    }
  }
</style>
