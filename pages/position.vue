<template>
  <div id="twic-position-container">
    <TwicWrapper git-hub-url="pages/position.vue">
      <TwicAbstract title="position property">
        <p>
          In<TwicCode>contain</TwicCode>mode,
          <strong>
            the <dfn>position</dfn> property changes the location of the image
            inside the area of the component.
          </strong>
        </p>
        <p>
          The syntax is the same as for CSS position properties (e.g.
          <TwicCode>background-position</TwicCode>or
          <TwicCode>object-position</TwicCode>).
        </p>
        <p>
          Useful values
          are<TwicCode>top</TwicCode>,<TwicCode>bottom</TwicCode>,<TwicCode>left</TwicCode>,
          and
          <TwicCode>right</TwicCode>, but all valid CSS position values are
          valid.
        </p>
        <p>
          If you only need border-based positionning, you can also use&nbsp;
          <a href="/anchor" target="_blank" rel="noreferrer">anchor</a>
          property.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="onChangePosition">
          Click to change the position
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg
            :src="landscapeImgUrl"
            mode="contain"
            placeholder="none"
            :position="verticalPositionArray[verticalPositionIndex]">
          </TwicImg>
          <span>
            <TwicCode
              >position="{{
                verticalPositionArray[verticalPositionIndex]
              }}"</TwicCode
            >
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="portraitImgUrl"
            mode="contain"
            placeholder="none"
            :position="horizontalPositionArray[horizontalPositionIndex]">
          </TwicImg>
          <span>
            <TwicCode
              >position="{{
                horizontalPositionArray[horizontalPositionIndex]
              }}"</TwicCode
            ></span
          >
        </div>
        <div class="twic-item">
          <TwicImg :src="landscapeImgUrl" mode="contain" placeholder="none">
          </TwicImg>
          <span> No position set (<TwicCode>center</TwicCode>by default) </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="portraitImgUrl" mode="contain" placeholder="none">
          </TwicImg>
          <span> No position set (<TwicCode>center</TwicCode>by default) </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicPosition",
    data() {
      return {
        landscapeImgUrl: `components/position/horse.jpg`,
        portraitImgUrl: `components/position/forest.jpg`,
        horizontalPositionArray: [`left`, `right`, `center`],
        horizontalPositionIndex: 0,
        verticalPositionArray: [`top`, `bottom`, `center`],
        verticalPositionIndex: 0,
      };
    },
    methods: {
      onChangePosition() {
        this.horizontalPositionIndex =
          (this.horizontalPositionIndex + 1) %
          this.horizontalPositionArray.length;
        this.verticalPositionIndex =
          (this.verticalPositionIndex + 1) % this.verticalPositionArray.length;
      },
    },
  };
</script>

<style lang="scss">
  #twic-position-container {
    .twic-item .twic-w {
      background-color: #00ffa3;
      display: block;
    }
  }
</style>
