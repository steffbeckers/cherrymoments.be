<template>
  <header id="header">
    <div class="wpo-site-header wpo-header-style-2" id="sticky-header">
      <nav class="navigation navbar navbar-expand-lg navbar-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-3 col-3 d-lg-none d-block">
              <div class="mobail-menu">
                <button type="button" class="navbar-toggler open-btn">
                  <span class="sr-only">Toon/sluit navigatie</span>
                  <span class="icon-bar first-angle"></span>
                  <span class="icon-bar middle-angle"></span>
                  <span class="icon-bar last-angle"></span>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-6">
              <div class="navbar-header">
                <a class="navbar-brand" href="/"
                  ><img src="~/assets/images/logo.svg" alt="Logo"
                /></a>
              </div>
            </div>
            <div class="col-lg-9 col-md-3 col-3">
              <div
                id="navbar"
                class="collapse navbar-collapse navigation-holder"
              >
                <button class="menu-close"><i class="ti-close"></i></button>
                <ul class="nav navbar-nav mb-2 mb-lg-0">
                  <li>
                    <NuxtLink to="/" active-class="active">Home</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/over-mij" active-class="active"
                      >Over mij</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/realisaties" active-class="active"
                      >Realisaties</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/contact" active-class="active"
                      >Contact</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@media screen and (min-width: 992px) {
  .wpo-site-header #navbar {
    justify-content: end;
    margin-right: 0px;
  }
}
</style>
