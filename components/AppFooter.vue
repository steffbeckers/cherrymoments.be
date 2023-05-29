<template>
  <footer class="wpo-site-footer text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-image">
            <a class="logo" href="index.html"
              ><img src="~/assets/images/logo.svg" alt=""
            /></a>
          </div>
        </div>
        <div class="col-12">
          <div class="footer-link">
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/over-mij">Over mij</NuxtLink></li>
              <li><NuxtLink to="/realisaties">Realisaties</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="link-widget">
            <ul>
              <li>
                <a href="#"><i class="ti-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="ti-facebook"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="copyright">
            <p>
              © Copyright {{ year }} |
              <NuxtLink to="/">Cherry Moments</NuxtLink> | Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
