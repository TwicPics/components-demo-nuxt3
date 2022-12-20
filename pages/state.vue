<template>
  <div id="twic-state-container">
    <TwicWrapper git-hub-url="pages/state.vue">
      <TwicAbstract title="state property and / or statechange event ">
        <p>
          You can access to the loading state of your image or video by passing
          a callback to
          <TwicCode>onStateChange</TwicCode> property.
        </p>
        <p>Here are the values the Component will emit :</p>
        <ul>
          <li>
            <TwicCode>new</TwicCode>: when the img or video source has not
            started loading
          </li>
          <li>
            <TwicCode>loading</TwicCode>: when the img or video source is
            loading
          </li>
          <li>
            <TwicCode>done</TwicCode>: when the img or video source has
            successfully loaded
          </li>
          <li>
            <TwicCode>error</TwicCode>: when an error occurred while loading the
            img or video source
          </li>
        </ul>
        <p>
          <strong>Change the width of your browser</strong> to see the image
          aspect-ratio adapt according to the CSS rules. The loading status
          should then also be updated.
        </p>
        <p>
          Current state is: <b>{{ state }}</b
          >.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button
          class="twic-button"
          :disabled="!imageReady"
          @click="() => (indice = (indice + 1) % config.length)"
        >
          Click to load next image
        </button>
      </div>

      <div class="twic-item style-driven-responsive">
        <TwicImg
          :src="config[indice].src"
          focus="48px100p"
          @stateChange="handleStateChange"
        />
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
export default {
  name: 'TwicBot',
  data() {
    return {
      config: [
        {
          src: 'components/state/autumn.jpg',
        },
        {
          src: 'components/state/winter.jpg',
        },
        {
          src: 'components/state/spring.jpg',
        },
        {
          src: 'components/state/summer.jpg',
        },
      ],
      indice: 0,
      imageReady: false,
      state: undefined,
    }
  },
  methods: {
    handleStateChange(event) {
      const { state } = event
      this.state = state
      this.imageReady = state === `error` || state === `done`
    },
  },
}
</script>
<style lang="scss">
#twic-state-container {
  .style-driven-responsive {
    --twic-ratio: calc(2 / 3);
    --twic-mode: cover;
    margin: auto;
  }

  button {
    &:disabled {
      opacity: 0.2;
      cursor: wait;
    }
  }
}

#twic-state-container .style-driven-responsive {
  max-width: 1024px;

  @media (min-width: 640px) {
    --twic-ratio: calc(1);
  }

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
    --twic-ratio: calc(29 / 9);
  }
}
</style>
