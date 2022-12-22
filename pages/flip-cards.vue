<template>
  <div id="twic-flip-card-container">
    <TwicWrapper filename="pages/flip-cards.vue">
      <TwicAbstract title="Flip cards">
        <p>Move your mouse over the images below.</p>
      </TwicAbstract>
      <div class="twic-grid">
        <div v-for="card in cards" :key="card.front.url" class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <figure class="twic-item">
                <TwicImg :src="card.front.url" focus="auto"></TwicImg>
              </figure>
            </div>
            <div class="flip-card-back">
              <figure class="twic-item">
                <TwicImg :src="card.back.url"></TwicImg>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicFlipCards",
    data() {
      return {
        cards: [
          {
            front: {
              url: `components/flip/orange-1.jpg`,
            },
            back: {
              url: `components/flip/orange-2.jpg`,
            },
          },
          {
            front: {
              url: `components/flip/fig-1.jpg`,
            },
            back: {
              url: `components/flip/fig-2.jpg`,
            },
          },
          {
            front: {
              url: `components/flip/cherry-3.jpg`,
            },
            back: {
              url: `components/flip/cherry-2.jpg`,
            },
          },
          {
            front: {
              url: `components/flip/melon-1.jpg`,
            },
            back: {
              url: `components/flip/melon-2.jpg`,
            },
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  #twic-flip-card-container {
    .flip-card {
      position: relative;
      background-color: transparent;
      perspective: 1000px;
      /* Remove this if you don't want the 3D effect */
      padding-top: 100%;

      & figure {
        margin: unset;
      }
    }

    .flip-card-inner {
      position: absolute;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      display: block;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-back {
      transform: rotateY(180deg);
    }
  }
</style>
