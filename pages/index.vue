<template>
  <div class="container">
    <div>
      <b-img
        height="300"
        width="300"
        src="/logo.png"
        class="mx-auto img-fluid"
      ></b-img>
      <h1 class="title">opensource-254</h1>
      <h2 class="subtitle">official website for opensource254</h2>
      <div class="links">
        <a
          href="https://github.com/Opensource-254"
          target="_blank"
          class="button--green"
          >Join Us</a
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
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
