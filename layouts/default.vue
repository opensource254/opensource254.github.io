<template>
  <main>
    <div>
      <nav
        class="navbar navbar-light navbar-expand-md fixed-top navigation-clean-button"
      >
        <div class="container">
          <a class="navbar-brand" href="#">opensource254</a
          ><button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span class="sr-only">Toggle navigation</span
            ><span class="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-1" class="collapse navbar-collapse">
            <ul class="nav navbar-nav mr-auto">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" href="#">First Item</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link active" href="#">Second Item</a>
              </li>
              <li class="dropdown nav-item">
                <a
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                  >Dropdown
                </a>
                <div class="dropdown-menu" role="menu">
                  <a class="dropdown-item" role="presentation" href="#"
                    >First Item</a
                  ><a class="dropdown-item" role="presentation" href="#"
                    >Second Item</a
                  ><a class="dropdown-item" role="presentation" href="#"
                    >Third Item</a
                  >
                </div>
              </li>
            </ul>
            <span class="navbar-text actions">
              <a
                class="btn btn-light text-truncate shadow-sm pulse animated infinite action-button"
                role="button"
                href="#"
                style="filter: saturate(116%);"
                >join us</a
              ></span
            >
          </div>
        </div>
      </nav>
    </div>
    <!-- End: Navigation with Button -->
    <nuxt />
    <footer>
      <div class="row">
        <div class="col-sm-6 col-md-4 footer-navigation">
          <h3></h3>
          <p class="links">
            <a href="#">Home</a><strong> · · · </strong><a href="#">About</a
            ><strong> · </strong><a href="#">Faq</a><strong> · </strong
            ><a href="#">Contact</a>
          </p>
          <p class="company-name">opensource kenya © 2020</p>
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
              class="fa fa-phone footer-contacts-icon"
              style="color: rgb(18,149,138);"
            ></i>
            <p class="footer-center-info email text-left">+254</p>
          </div>
          <div>
            <i
              class="fa fa-envelope footer-contacts-icon"
              style="color: rgb(18,149,138);"
            ></i>
            <p><a href="#" target="_blank">support@opensource.com</a></p>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-4 footer-about">
          <h4>About the opensource</h4>
          <p>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
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
