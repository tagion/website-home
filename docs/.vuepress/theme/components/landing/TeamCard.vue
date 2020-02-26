<template>
  <router-link :to="link" class="team-table__card">
    <div class="team-table__card-bio">
      <div class="team-table__card-header-row">
        <img loading="lazy" class="lazy" :data-src="image" />
        <div class="team-table__card-header">
          <h5>
            {{name}}
            <br />
            <span class="team-table__card-position">{{title}}</span>
          </h5>
          <p class="team-table__card-read-more">Read more</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["name", "title", "link", "image"]
};
</script>