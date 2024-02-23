<script setup>
useHead({
  title: 'Contact',
})
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
        Contact
      </h2>
    </header>

    <section class="contact-form">
      <h3 class="h3 form-title">
        Contact Me
      </h3>

      <div class="flex space-x-2">
          <button class="form-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <ion-icon name="call-outline" />
            <span>09 252 759 590</span>
          </button>

          <button class="form-btn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <ion-icon name="mail-outline" />
            <span>minthuzaw775@gmail.com</span>
          </button>
        </div>

    </section>
  </article>
</template>
