<template>
  <b-modal v-model="show" hide-header hide-footer centered>
    <a
      target="_blank"
      href="https://opensource254.github.io/guidelines/"
      class="btn btn-primary btn-block text-white"
      >On Github</a
    >
    <a
      target="_blank"
      href="https://join.slack.com/t/opensource254/shared_invite/zt-ehsd5mb6-Dm5QVTkErOd6UvbaAYGDiw"
      class="btn btn-primary btn-block text-white"
      >On Slack</a
    >
  </b-modal>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
