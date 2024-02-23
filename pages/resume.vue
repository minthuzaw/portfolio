<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        Resume
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Dagon University | Computer Science
          </h4>

          <span>2017 — 2020</span>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            UOPeople | Computer Science
          </h4>

          <span>2024 — present</span>

        </li>

      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Junior Web Developer At Onenex
          </h4>

          <span>Oct, 2022 — Present</span>

          <p class="timeline-text">
            <ul>
              <li>Responsible for creating and maintaining high-quality code for backend services.</li>
              <li>Create and build domain-driven architectures and backend services.</li>
              <li>Maintain and resolve on-demand issues and bugs ni existing projects.</li>
              <li>Create both frontend and backend solutions for various online apps.</li>
            </ul>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Intern at Onenex
          </h4>

          <span>Jul, 2022 — Sep, 2022</span>

          <p class="timeline-text">
            <ul>
              <li>Learning web development with HTML, CSS, JavaScript, and Laravel.</li>
              <li>Participate in numerous projects to discover how things work.</li>
            </ul>
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        My skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Software Development
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Front End Development
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              PHP - Laravel
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vue 3 with Primevue and Primeflex
            </h5>
            <data value="85">85%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Nuxtjs
            </h5>
            <data value="65">65%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 65%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              K6 (Concurrency Api Testing)
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
