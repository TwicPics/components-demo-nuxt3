<template>
  <div id="twic-focus-container">
    <TwicWrapper filename="pages/focus.vue">
      <TwicAbstract title="focus property">
        <p>
          <strong>
            The <dfn>focus</dfn> property will change the focus point
            coordinates of the image
          </strong>
          (only useful with
          <TwicCode>mode="cover"</TwicCode>).
          <br />
          It allows to determine what should be visible when the image is
          cropped.
        </p>
        <p>
          You can set the focus by using coordinates or
          <TwicCode>auto</TwicCode>values:
        </p>
        <ul>
          <li>
            <strong>Coordinates</strong> represent a point in the image,
            specified as a couple of positive lengths, separated by the
            character<TwicCode>x</TwicCode>.
            <br />
            As an example, in
            <TwicCode>focus="1920x1282"</TwicCode
            >:<br />-<TwicCode>1920</TwicCode>is the coordinate along the x-axis
            (following the width of the image) <br />-
            and<TwicCode>1282</TwicCode>is the coordinate along the y-axis
            (following the height of the image)
          </li>
          <li>
            If<TwicCode>auto</TwicCode>is used in place of actual coordinates,
            the focus point will be chosen automatically for you!
          </li>
        </ul>
        <p>
          If you only need border-based positionning
          (<TwicCode>top</TwicCode>,<TwicCode>bottom</TwicCode>, etc), use&nbsp;
          <a href="/anchor" target="_blank" rel="noreferrer">anchor</a>
          &nbsp;instead.
        </p>
      </TwicAbstract>

      <div class="twic-grid">
        <div class="twic-item">
          <button class="twic-button" @click="onChangeFocus">
            Click to change the focus point
          </button>
          <TwicImg
            :src="IMG_URL"
            :focus="focusArray[focusIndex]"
            ratio="4/5"
            placeholder="preview" />
          <span v-if="focusArray[focusIndex]"
            >focus="{{ focusArray[focusIndex] }}"</span
          >
          <span v-else>No focus(default) </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" ratio="4/5" placeholder="preview" />
          <span>
            <span>No focus</span>
            (default)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            ratio="4/5"
            focus="1920x1282"
            placeholder="preview" />
          <span>
            <TwicCode>focus="1920x1282"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            ratio="4/5"
            focus="auto"
            placeholder="preview" />
          <span>
            <TwicCode>focus="auto"</TwicCode>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicFocus",
    data() {
      return {
        IMG_URL: `components/puppy.jpg`,
        focusArray: [``, `1920x1282`, `auto`],
        focusIndex: 0,
      };
    },
    methods: {
      onChangeFocus: function () {
        this.focusIndex = (this.focusIndex + 1) % this.focusArray.length;
      },
    },
  };
</script>

<style lang="scss"></style>
