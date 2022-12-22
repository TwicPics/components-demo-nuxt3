<template>
  <div id="twic-basic-grid-container">
    <TwicWrapper filename="pages/basic-grid.vue">
      <TwicAbstract title="A basic example">
        <p>
          TwicPics is a Responsive Image Service Solution (SaaS) that enables
          on-demand responsive image generation.
        </p>
        <p>
          TwicPics Components make it dead easy to unleash the power of
          TwicPics.
        </p>
        Here the properties used in this example:
        <ul>
          <li>
            <TwicCode>ratio</TwicCode>:
            <span>
              &nbsp;determines the value of the width/height ratio of the image
              display area.
            </span>
          </li>
          <li>
            <TwicCode>mode</TwicCode>:<span>
              determines if the image fills or sits inside the area.</span
            >
          </li>
          <li>
            <TwicCode>focus</TwicCode>:<span>
              changes the focus point coordinates of the image.</span
            >
          </li>
          <li>
            <TwicCode>placeholder</TwicCode>:
            <span>
              helps optimize your CLS and implement the LQIP technique.</span
            >
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
          <span> Default values </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="/football.jpg"
            ratio="16/9"
            mode="cover"
            placeholder="meancolor" />
          <span>
            <TwicCode>ratio="16/9"</TwicCode>&<TwicCode>mode="cover"</TwicCode>:
            the image fills the area
          </span>
        </div>
        <div class="twic-item">
          <TwicImg src="/football.jpg" step="100" mode="contain" ratio="16/9" />
          <span>
            <TwicCode>ratio="16/9"</TwicCode
            >&<TwicCode>mode="contain"</TwicCode>: the image sits inside the
            area
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="/football.jpg"
            focus="auto"
            mode="contain"
            ratio="2/3"
            step="100"
            placeholder="maincolor" />
          <span>
            <TwicCode>ratio="2/3"</TwicCode
            >,<TwicCode>mode="contain"</TwicCode>&<TwicCode
              >focus="auto"</TwicCode
            >
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
  export default {
    name: "TwicBasicExample",
  };
</script>

<style lang="scss">
  #twic-basic-grid-container {
    .twic-item .twic-w {
      background-color: #00ffa3;
      display: block;
    }
  }
</style>
