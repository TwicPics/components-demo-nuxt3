<template>
  <div id="twic-color-blindness-container">
    <TwicWrapper filename="pages/refit.vue">
      <TwicAbstract title="refit property">
        <p>
        <strong>
          The <dfn>refit</dfn> property:
        </strong>
      </p>
      <ul>
        <li>
          reframes the image to maximize the area occupied by the main object(s) while respecting <a href="/ratio" target="_blank" rel="noreferrer"> ratio </a> in <TwicCode>cover</TwicCode> <a href="/mode" target="_blank" rel="noreferrer"> mode </a>.
        </li>
        <li>
          crops the image as close as possible to the main object(s) in <TwicCode>contain</TwicCode> <a href="/mode" target="_blank" rel="noreferrer"> mode </a>.
        </li>
      </ul>
      <p>
        To enable <dfn>refit</dfn>, simply add the <TwicCode>refit</TwicCode> property to the <TwicCode
          >TwicImg</TwicCode
        > component like in
        <TwicCode>&lt;TwicImg src="image.jpg" refit/&gt;</TwicCode>
      </p>
      <p>
        By default, the subject will be placed at the center of the resulting image but
        <strong>it is possible to align the subject</strong> with a given border by specifying an
        <a href="/anchor" target="_blank" rel="noreferrer"> anchor </a>
        .
      </p>
      <p>
        Also by default, the subject will touch the borders of the resulting image. This can be
        avoided by <strong>adding padding</strong> like in
        <TwicCode>&lt;TwicImg src="image.jpg" refit="5p"/&gt;</TwicCode>.
      </p>
      <p>
        <a
          href="https://www.twicpics.com/blog/components-feature-refit"
          target="_blank"
          rel="noreferrer"
        >
          Want to see more examples?
        </a>
      </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="updateIndice">
          Click to change props
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg v-if="show" :src="IMG_URL" :mode="actualConfig.mode" />
          <span> Original image + mode="{{ actualConfig.mode }}" </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            :mode="actualConfig.mode"
            ratio="4/3"
            :refit="actualConfig.refit"
          />
          <span>
            {{
              actualConfig.refit === true
                ? "refit"
                : "refit=''" + actualConfig.refit + "''"
            }}
            + mode='{{ actualConfig.mode }}'
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            anchor="left"
            :mode="actualConfig.mode"
            ratio="4/3"
            :refit="actualConfig.refit"
          />
          <span>
            {{
              actualConfig.refit === true
                ? "refit"
                : "refit=''" + actualConfig.refit + "''"
            }}
            + mode='{{ actualConfig.mode }}' + anchor="left"</span
          >
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            anchor="right"
            :mode="actualConfig.mode"
            ratio="4/3"
            :refit="actualConfig.refit"
          />
          <span>
            {{
              actualConfig.refit === true
                ? "refit"
                : "refit=''" + actualConfig.refit + "''"
            }}
            {{ actualConfig.mode }}" + anchor="right"</span
          >
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
export default {
  name: "TwicRefit",
  data() {
    return {
      config: [
        {
          mode: `cover`,
          refit: true,
        },
        {
          mode: `cover`,
          refit: `5p`,
        },
        {
          mode: `contain`,
          refit: true,
        },
        {
          mode: `contain`,
          refit: `5p`,
        },
      ],
      indiceConfig: 0,
      IMG_URL: `components/refit/dog-looking-water.jpg`,
      show: true,
    };
  },
  computed: {
    actualConfig() {
      return this.config[this.indiceConfig];
    },
  },
  methods: {
    updateIndice() {
      setTimeout(() => (this.show = false))
      this.indiceConfig = (this.indiceConfig + 1) % this.config.length;
      setTimeout(() => (this.show = true))
    },
  },
};
</script>
