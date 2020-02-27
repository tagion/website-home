<template>
  <a :href="link" target="_blank" rel="nofollow noopener noreferrer" class="team-table__card">
    <div class="team-table__card-bio">
      <div class="team-table__card-header-row">
        <img
          loading="lazy"
          class="lazy"
          width="100"
          :data-src="image"
        />
        <div class="team-table__card-header">
          <h5>
            {{name}}
            <br />
            <span class="team-table__card-position">{{title}}</span>
          </h5>
          <p class="team-table__card-read-more">LinkedIn</p>
        </div>
      </div>
    </div>
  </a>

</template>

<script>
export default {
  props: ["name", "title", "link", "image"]
};
</script>