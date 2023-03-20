<template>
  <div id="twic-style-driven-container">
    <TwicWrapper filename="pages/style-driven.vue">
      <TwicAbstract title="CSS style driven">
        <p>
          You can set up the TwicPics components using pure CSS and the power of
          <a
            href="https://www.twicpics.com/docs/components/sveltekit#css-variables"
            target="_blank"
            rel="noreferrer"
            >CSS variable</a
          >.
        </p>
      </TwicAbstract>
      <p>
        <b>1.</b> Set up aspect ratio with<TwicCode>--twic-ratio</TwicCode>css
        variable.
      </p>
      <div class="twic-grid">
        <div class="twic-item square">
          <TwicImg :src="IMG_URL" />
          <span>
            class
            <TwicCode>square</TwicCode>
          </span>
        </div>
        <div class="twic-item portrait">
          <TwicImg :src="IMG_URL" />
          <span>
            class
            <TwicCode>portrait</TwicCode>
          </span>
        </div>
        <div class="twic-item landscape">
          <TwicImg :src="IMG_URL" />
          <span>
            class
            <TwicCode>landscape</TwicCode>
          </span>
        </div>
      </div>
      <p>
        <b>2.</b> Set up
        <a href="/zoom" target="_blank" rel="noreferrer">zoom</a> value with
        <TwicCode>--twic-zoom</TwicCode> css variable.
      </p>
      <br />
      <div class="twic-grid">
        <div class="twic-item zoom-sm">
          <TwicImg :src="IMG_URL" zoom="CSS" />
          <span>
            class
            <TwicCode>zoom-sm</TwicCode>
          </span>
        </div>
        <div class="twic-item zoom-md">
          <TwicImg :src="IMG_URL" zoom="CSS" />
          <span>
            class
            <TwicCode>zoom-md</TwicCode>
          </span>
        </div>
        <div class="twic-item zoom-lg">
          <TwicImg :src="IMG_URL" zoom="CSS" />
          <span>
            class
            <TwicCode>zoom-lg</TwicCode>
          </span>
        </div>
      </div>
      <p>
        <b>3.</b> Class combination: you can set up multiples props
        as<TwicCode>object-fit</TwicCode>and <TwicCode>position</TwicCode>with
        <TwicCode>--twic-mode</TwicCode>and
        <TwicCode>twic-position</TwicCode>
      </p>
      <br />
      <div class="twic-grid">
        <div class="twic-item contain left">
          <TwicImg :src="IMG_URL" ratio="16/9" />
          <span>
            class
            <TwicCode>contain</TwicCode>& class
            <TwicCode>left</TwicCode>
          </span>
        </div>
        <div class="twic-item contain right">
          <TwicImg :src="IMG_URL" ratio="16/9" />
          <span>
            class
            <TwicCode>contain</TwicCode>& class
            <TwicCode>right</TwicCode>
          </span>
        </div>
        <div class="twic-item cover">
          <TwicImg :src="IMG_URL" focus="50px100p" ratio="16/9" />
          <span>
            class
            <TwicCode>cover</TwicCode>
          </span>
        </div>
      </div>
      <p>
        <b>4.</b> Other classical settings (here with
        <TwicCode>width</TwicCode>)
      </p>
      <br />
      <div class="twic-grid">
        <div class="twic-item lg">
          <TwicImg :src="IMG_URL" />
          <span>
            class
            <TwicCode>lg</TwicCode>
          </span>
        </div>
        <div class="twic-item md">
          <TwicImg :src="IMG_URL" />
          <span>
            class
            <TwicCode>md</TwicCode>
          </span>
        </div>
        <div class="twic-item sm">
          <TwicImg :src="IMG_URL" />
          <span>
            class
            <TwicCode>sm</TwicCode>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicStyleDriven",
    data() {
      return {
        IMG_URL: `components/horse.jpg`,
      };
    },
  };
</script>

<style lang="scss">
  #twic-style-driven-container {
    .twic-grid {
      margin-bottom: 60px;
    }
    .twic-item .twic-w {
      background-color: #00ffa3;
      display: block;
    }
    .landscape {
      --twic-ratio: calc(4 / 3);
    }
    .portrait {
      --twic-ratio: calc(3 / 4);
    }
    .square {
      --twic-ratio: calc(1);
    }
    .contain {
      --twic-mode: contain;
    }
    .cover {
      --twic-mode: cover;
    }
    .left {
      --twic-position: left;
    }
    .right {
      --twic-position: right;
    }
    .lg {
      width: 300px;
    }
    .md {
      width: 150px;
    }
    .sm {
      width: 100px;
    }
    .zoom-sm {
      --twic-zoom: 1.5;
    }
    .zoom-md {
      --twic-zoom: 2;
    }
    .zoom-lg {
      --twic-zoom: 3;
    }
  }
</style>
