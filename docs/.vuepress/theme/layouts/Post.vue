<template>
  <layout-default>
    <div class="blog-post-cover" :style="{background: $page.frontmatter.color}">
      <img :src="`/covers/${$page.frontmatter.cover}`" :alt="$page.title" />
    </div>
    <Content class="blog-post typography" />
    <div class="forkbox typography">
      <div class>
        Posted by
        <span class="muted">
          <a
            v-if="$page.frontmatter.authorLink"
            class="outbound-negative-space-fix"
            :href="$page.frontmatter.authorLink"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {{ $page.frontmatter.author }}
            <OutboundLink />
          </a>
          <span v-else>{{ $page.frontmatter.author }}</span>
        </span>
      </div>
      <div class="forkbox__secondary">{{$page.filedate}}</div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";

export default {
  components: {
    LayoutDefault
  }
};
</script>