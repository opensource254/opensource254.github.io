<template>
  <BModal
    :model-value="show"
    hide-header
    hide-footer
    centered
    @update:model-value="$emit('update:show', $event)"
  >
    <a
      target="_blank"
      href="https://opensource254.github.io/guidelines/"
      class="btn btn-primary btn-block text-white"
      >On Github</a
    >
    <a
      target="_blank"
      href="https://join.slack.com/t/opensource254/shared_invite/zt-pj6zdek2-eJdkJbBdFaAOvGZEePk8Xw"
      class="btn btn-primary btn-block text-white"
      >On Slack</a
    >
  </BModal>
</template>
<script>
export default {
  emits: ['update:show'],
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
