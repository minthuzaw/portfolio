<script setup>
/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        About
      </h2>
    </header>

    <section class="about-text">
      <p>
        Passionate web developer with over 2+ years of experience. I bring
        a self-motivated drive to achieve excellence. Proficient in an
        assortment of technologies, including PHP, Laravel, Javascript, Vue3,
        Nuxtjs, and AWS services.
      </p>

      <p>
        My job is to build REST API and create a customer-friendly front end.
        Communicate with teammates and support them.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        What am I doing?
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>
    <!-- clients -->
<!--    <section class="clients">-->
<!--      <h3 class="h3 clients-title">-->
<!--        Clients-->
<!--      </h3>-->

<!--      <ul class="clients-list has-scrollbar">-->
<!--        <li class="clients-item">-->
<!--          <a href="#">-->
<!--            <img src="images/logo-1-color.png" alt="client logo">-->
<!--          </a>-->
<!--        </li>-->

<!--        <li class="clients-item">-->
<!--          <a href="#">-->
<!--            <img src="images/logo-2-color.png" alt="client logo">-->
<!--          </a>-->
<!--        </li>-->

<!--        <li class="clients-item">-->
<!--          <a href="#">-->
<!--            <img src="images/logo-3-color.png" alt="client logo">-->
<!--          </a>-->
<!--        </li>-->

<!--        <li class="clients-item">-->
<!--          <a href="#">-->
<!--            <img src="images/logo-4-color.png" alt="client logo">-->
<!--          </a>-->
<!--        </li>-->

<!--        <li class="clients-item">-->
<!--          <a href="#">-->
<!--            <img src="images/logo-5-color.png" alt="client logo">-->
<!--          </a>-->
<!--        </li>-->

<!--        <li class="clients-item">-->
<!--          <a href="#">-->
<!--            <img src="images/logo-6-color.png" alt="client logo">-->
<!--          </a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </section>-->
  </article>
</template>
