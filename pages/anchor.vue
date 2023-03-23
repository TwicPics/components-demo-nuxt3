<template>
  <div id="twic-anchor-container">
    <TwicWrapper filename="pages/anchor.vue">
      <TwicAbstract title="anchor property">
        <p>
          <strong>
            The <dfn>anchor</dfn> property positions the image in both
            <TwicCode>contain</TwicCode>
            and<TwicCode>cover</TwicCode>mode.
          </strong>
        </p>
        It allows to:
        <ul>
          <li>
            position the letterboxed image in its container
            in<TwicCode>contain</TwicCode>mode.
          </li>
          <li>
            determine what should be visible when the image is cropped in&nbsp;
            <span class="twic-code">cover</span> mode.
          </li>
        </ul>
        <p>
          Accepted values
          are<TwicCode>top</TwicCode>,<TwicCode>bottom</TwicCode>,<TwicCode
            >left</TwicCode
          >
          ,&nbsp;
          <TwicCode>right</TwicCode
          >,<TwicCode>top-left</TwicCode>,<TwicCode>top-right</TwicCode>,<TwicCode
            >bottom-left</TwicCode
          ><TwicCode>bottom-right</TwicCode>and<TwicCode>center</TwicCode>.
        </p>
        <p>
          Please note that anchor is applied after an eventual transformation
          defined with&nbsp;
          <a href="/pre-transform" target="_blank" rel="noreferrer"
            >preTransform</a
          >
          &nbsp;property.
        </p>
        <p>
          For a more specific positionning see&nbsp;
          <a href="/position" target="_blank" rel="noreferrer">position</a>
          &nbsp;or&nbsp;
          <a href="/focus" target="_blank" rel="noreferrer">focus</a>
          &nbsp;properties in for
          <TwicCode>contain</TwicCode>or <TwicCode>cover</TwicCode>mode
          respectively.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="updateIndice">
          Click to see anchor effect
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg
            src="components/anchor/anchor.jpg"
            pre-transform="focus=bottom-right/cover=1:1"
            :anchor="actualHorizontal.anchor"
            mode="contain"
            ratio="4/3" />
          <span>
            <span>
              <TwicCode>anchor="{{ actualHorizontal.anchor }}"</TwicCode>
              <TwicCode>mode="contain"</TwicCode>
            </span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="components/anchor/anchor.jpg"
            pre-transform="focus=bottom-right/cover=1:1"
            :anchor="actualVertical.anchor"
            mode="contain"
            ratio="3/4" />
          <span>
            <span>
              <span>
                <TwicCode>anchor="{{ actualHorizontal.anchor }}"</TwicCode>
                <TwicCode>mode="contain"</TwicCode>
              </span>
            </span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="components/anchor/anchor.jpg"
            pre-transform="focus=bottom/cover=1:1"
            :anchor="actualHorizontal.anchor"
            mode="cover"
            ratio="3/4" />
          <span>
            <span>
              <TwicCode>anchor={{ actualHorizontal.anchor }}</TwicCode>
              <TwicCode>mode="cover"</TwicCode>
            </span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="components/anchor/anchor.jpg"
            pre-transform="cover=1:1"
            :anchor="actualVertical.anchor"
            mode="cover"
            ratio="4/3" />
          <span>
            <span>
              <span>
                <TwicCode>anchor="{{ actualVertical.anchor }}"</TwicCode>
                <TwicCode>mode="cover"</TwicCode>
              </span>
            </span>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicAnchor",
    data() {
      return {
        horizontalConfig: [
          {
            anchor: `center`,
          },
          {
            anchor: `left`,
          },
          {
            anchor: `right`,
          },
        ],
        indiceConfig: 0,
        verticalConfig: [
          {
            anchor: `center`,
          },
          {
            anchor: `top`,
          },
          {
            anchor: `bottom`,
          },
        ],
      };
    },
    computed: {
      actualVertical() {
        return this.verticalConfig[this.indiceConfig];
      },
      actualHorizontal() {
        return this.horizontalConfig[this.indiceConfig];
      },
    },
    methods: {
      updateIndice() {
        this.indiceConfig =
          (this.indiceConfig + 1) % this.horizontalConfig.length;
      },
    },
  };
</script>
