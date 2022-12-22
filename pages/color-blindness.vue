<template>
  <div id="twic-color-blindness-container">
    <TwicWrapper filename="pages/color-blindness.vue">
      <TwicAbstract title="Color blindness filters">
        <p>
          You can apply correction filters for color blind people with our&nbsp;
          <strong>experimental transformations</strong>:
        </p>
        <ul>
          <li>
            <a
              href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalachromatopsiaspan"
              target="_blank"
              rel="noreferrer">
              <TwicCode>preTransform="achromatopsia=number"</TwicCode>
            </a>
          </li>
          <li>
            <a
              href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentaldeuteranopiaspan"
              target="_blank"
              rel="noreferrer">
              <TwicCode>preTransform="deuteranopia=number"</TwicCode>
            </a>
          </li>
          <li>
            <a
              href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalprotanopiaspan"
              target="_blank"
              rel="noreferrer">
              <TwicCode>preTransform="protanopia=number"</TwicCode>
            </a>
          </li>
        </ul>
        <p>
          The number provided must be between 0 and 1 and represents the degree
          of colour blindness to be corrected.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="updateIndice">
          Click to change color blindness correction degree
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" />
          <span> Original image </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" :pre-transform="actualConfig.achromatopsia" />
          <span> preTransform="{{ actualConfig.achromatopsia }}" </span>
        </div>

        <div class="twic-item">
          <TwicImg :src="IMG_URL" :pre-transform="actualConfig.deuteranopia" />
          <span> preTransform="{{ actualConfig.deuteranopia }}" </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" :pre-transform="actualConfig.protanopia" />
          <span> preTransform="{{ actualConfig.protanopia }}" </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicColorBlindness",
    data() {
      return {
        config: [
          {
            achromatopsia: "achromatopsia=0.5",
            deuteranopia: "deuteranopia=0.5",
            protanopia: "protanopia=0.5",
          },
          {
            achromatopsia: "achromatopsia=1",
            deuteranopia: "deuteranopia=1",
            protanopia: "protanopia=1",
          },
          {
            achromatopsia: "achromatopsia=0",
            deuteranopia: "deuteranopia=0",
            protanopia: "protanopia=0",
          },
        ],
        indiceConfig: 0,
        IMG_URL: `components/color-blindless/umbrellas.jpg`,
      };
    },
    computed: {
      actualConfig() {
        return this.config[this.indiceConfig];
      },
    },
    methods: {
      updateIndice() {
        this.indiceConfig = (this.indiceConfig + 1) % this.config.length;
      },
    },
  };
</script>
