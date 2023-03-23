<template>
  <div id="twic-mode-container">
    <TwicWrapper filename="pages/mode.vue">
      <TwicAbstract title="mode property">
        <p>
          <strong>
            The
            <dfn>mode</dfn>&nbsp; property determines if the image fills or sits
            inside the area.
          </strong>
        </p>
        <p>Here are the two accepted values:</p>
        <ul>
          <li>
            <TwicCode>cover</TwicCode>:<span>
              the image fills the area and is cropped accordingly.</span
            >
          </li>
          <li>
            <TwicCode>contain</TwicCode>:<span>
              the image sits inside the area with no cropping.</span
            >
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <button class="twic-button" @click="changeMode">
            Click to change the mode value
          </button>
          <TwicImg
            v-if="show"
            :src="IMG_URL"
            :mode="modeValues[modeIndex]"></TwicImg>
          <span>
            <TwicCode>mode="{{ modeValues[modeIndex] }}"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" />
          <span> No mode set (<TwicCode>cover</TwicCode>by default) </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" mode="cover" />
          <span>
            <TwicCode>mode="cover"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" mode="contain" />
          <span>
            <TwicCode>mode="contain"</TwicCode>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicMode",
    data() {
      return {
        IMG_URL: `components/fox.jpg`,
        modeValues: [`cover`, `contain`],
        modeIndex: 0,
        // trick to force reload TwicImg
        show: true,
      };
    },
    methods: {
      changeMode() {
        setTimeout(() => (this.show = false));
        this.modeIndex = (this.modeIndex + 1) % this.modeValues.length;
        setTimeout(() => (this.show = true));
      },
    },
  };
</script>

