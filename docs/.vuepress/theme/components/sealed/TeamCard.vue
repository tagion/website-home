<template>
  <a
    :href="link"
    target="_blank"
    rel="nofollow noopener noreferrer"
    class="team-table__card"
  >
    <div class="team-table__card-bio">
      <div class="team-table__card-avatar">
        <img
          loading="lazy"
          class="lazy"
          width="100"
          :data-src="image"
        />
      </div>
      <div class="team-table__card-header">
          <h5>
            {{name}}
            <br />
            <span class="team-table__card-position">{{title}}</span>
          </h5>
        </div>
      <div class="team-table__card-about">
        <p v-html="aboutFormatted"></p>
      </div>
      <p class="team-table__card-read-more">LinkedIn</p>
    </div>
  </a>

</template>

<script>
export default {
  props: ["name", "title", "link", "image", "about"],
  computed: {
    aboutFormatted: function() {
      return this.about.replace(/(?:\r\n|\r|\n)/g, "<br>");
    }
  }
};
</script>