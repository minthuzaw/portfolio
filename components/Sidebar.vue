<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/profile.png" alt="Min Thu Zaw" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Min Thu Zaw">
          Min Thu Zaw
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span>Web developer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:info@afsakar.com" class="contact-link">minthuzaw775@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/minthuzaw" class="contact-link" target="_blank">minthuzaw</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/min-thu-zaw-5aa0632b4/" class="contact-link" target="_blank">Min Thu Zaw</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Yangon, Myanmar</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

<!--      <ul class="social-list">-->
<!--        <li class="social-item">-->
<!--          <NuxtLink to="" class="social-link" target="_blank">-->
<!--            <ion-icon name="logo-twitter" />-->
<!--          </NuxtLink>-->
<!--        </li>-->

<!--        <li class="social-item">-->
<!--          <NuxtLink to="" class="social-link" target="_blank">-->
<!--            <ion-icon name="logo-instagram" />-->
<!--          </NuxtLink>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </aside>
</template>
