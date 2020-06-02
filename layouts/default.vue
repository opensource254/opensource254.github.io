<template>
  <main>
    <div>
      <nav
        class="navbar navbar-light navbar-expand-sm sticky-top navigation-clean-button"
      >
        <div class="container">
          <nuxt-link to="/" class="navbar-brand font-lobster"
            >Opensource254</nuxt-link
          >
          <div id="navcol-1">
            <span class="navbar-text actions ml-auto">
              <a
                class="btn btn-light text-truncate shadow-sm pulse animated infinite action-button"
                role="button"
                href="#"
                style="filter: saturate(116%);"
                @click="showJoin = !showJoin"
                >join us</a
              ></span
            >
          </div>
        </div>
      </nav>
    </div>
    <!-- End: Navigation with Button -->
    <nuxt />
    <JoinModal :show="showJoin" />
    <footer>
      <div class="row">
        <div class="col-sm-6 col-md-4 footer-navigation">
          <h3></h3>
          <p class="company-name">
            opensource254 kenya © {{ new Date().getFullYear() }}
          </p>
        </div>
        <div class="col-sm-6 col-md-4 footer-contacts">
          <div>
            <span
              class="fa fa-map-marker footer-contacts-icon"
              style="color: rgb(18,149,138);"
            >
            </span>
            <p><span class="new-line-span">kenya</span></p>
          </div>
          <div>
            <i
              class="fa fa-envelope footer-contacts-icon"
              style="color: rgb(18,149,138);"
            ></i>
            <p>
              <a href="mailto:friends@opensource254.co.ke" target="_blank"
                >friends@opensource254.co.ke</a
              >
            </p>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-4 footer-about">
          <h4>About opensource254</h4>
          <p>
            Made in Kenya
          </p>
          <div class="social-links social-icons">
            <a href="#"
              ><i class="fa fa-facebook" style="color: rgb(18,149,138);"></i></a
            ><a href="#"
              ><i class="fa fa-twitter" style="color: rgb(18,149,138);"></i></a
            ><a href="#"
              ><i class="fa fa-linkedin" style="color: rgb(18,149,138);"></i
            ></a>
            <a href="#"
              ><i class="fa fa-github" style="color: rgb(18,149,138);"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
<script>
import JoinModal from '@/components/Modal'
export default {
  components: {
    JoinModal
  },
  data() {
    return {
      showJoin: false
    }
  }
}
</script>
