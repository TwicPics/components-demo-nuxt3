<template>
  <div id="twic-pretransform-container">
    <TwicWrapper git-hub-url="pages/pre-transform.vue">
      <TwicAbstract title="preTransform property">
        <p>
          <TwicCode>preTransform</TwicCode>is a slash-separated list of TwicPics
          API transformations that perform before the automatic resizing of the
          image.
        </p>
        <p>
          You can check the&nbsp;
          <a
            href="https://www.twicpics.com/docs/api/transformations"
            target="_blank"
            rel="noreferrer"
            >TwicPics documentation</a
          >
          &nbsp;to see the list of API transformations.
        </p>
        <p>
          If you set the<TwicCode>focus</TwicCode>property, it will apply before
          all transformations of the<TwicCode>preTransform</TwicCode>property.
        </p>
        <p>
          Be aware that using<TwicCode>preTransform</TwicCode>can lead to
          unexpected results, so use with caution!
        </p>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" />
          <span> No<TwicCode>preTransform</TwicCode> </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" pre-transform="crop=600x400" />
          <span>
            <TwicCode>preTransform="crop=600x400"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            focus="100px100p"
            pre-transform="crop=1400x1200" />
          <span>
            <TwicCode>focus="100px100p"</TwicCode>
            and<TwicCode>preTransform="crop=1400x1200"</TwicCode>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" pre-transform="flip=x" />
          <span>
            <TwicCode>preTransform="flip=x"</TwicCode>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
  export default {
    name: "TwicPreTransform",
    data() {
      return {
        IMG_URL: `components/man-hiding-his-hands.jpg`,
      };
    },
  };
</script>
