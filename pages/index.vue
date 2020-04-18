<template>
  <div class="container">
    <div>
      <b-img
        height="300"
        width="300"
        src="/logo.png"
        class="mx-auto img-fluid"
      ></b-img>
      <h1 class="title">
        open<span class="green-color">source</span><span class="red">254</span>
      </h1>
      <div class="links">
        <a
          href="https://github.com/Opensource254"
          target="_blank"
          class="btn btn-outline-primary btn-lg"
          >Github</a
        >
        <a
          href="https://join.slack.com/t/opensource254/shared_invite/zt-dfkd2h0m-zWzQn8WSeYoUICl3GNOncw"
          target="_blank"
          class="btn btn-outline-secondary btn-lg"
          >Slack</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.red {
  color: #ff0000;
}
.green-color {
  color: #00ff4c;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Ubuntu', 'Quicksand', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 500;
  font-size: 45px;
  color: #080808;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
