<template>
  <div>
    <TwicWrapper filename="pages/critical-image.vue">
      <div class="twic-item mb">
        <TwicPicture
          src="components/coffee.jpg"
          eager
          focus="
            @md 52px50p
          "
          ratio="
            @md 4/3
            @lg 3
          "
          sizes="
            (min-width: 1600px) calc(100vw - 4rem),
            calc(100vw - 80px)
          "
        ></TwicPicture>
      </div>
      <TwicAbstract title="Critical Image with Art Direction" class="mt">
        <p>
          <TwicCode>TwicPicture</TwicCode> streamlines the use of <TwicCode>picture</TwicCode>
          elements and <TwicCode>srcset</TwicCode> attributes.
        </p>
        <p>
          It enables the optimization of critical image rendering (resolution
          switching) while incorporating layout adjustments (art direction),
          all aimed at optimizing the <b>Cumulative Layout Shift</b> (CLS).
        </p>
        <p>
          It operates independently of the
          <a target="_blank" href="https://www.twicpics.com/docs/essentials/script">
            TwicPics Script
          </a>
          and dynamically generates <TwicCode>source</TwicCode> elements and
          <TwicCode>srcset</TwicCode> attributes from a <b>single master file</b>
          using variants transformed through the
          <a target="_blank" href="https://www.twicpics.com/docs/guides/writing-api-requests">
            TwicPics API
          </a>
          .
        </p>
      </TwicAbstract>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: 'TwicCriticalImage',
}
</script>

<style lang="scss">
.mb {
  margin-bottom:15px;
}
</style>
