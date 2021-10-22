<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col cols="12" sm="4" xl="4" class="outbound-negative-space-fix mt-8 mt-sm-0">
          <h6 class="mb-3">Quick Links</h6>
          <b-nav vertical>
            <li>
              <router-link to="/community/roadmap.html">Roadmap</router-link>
            </li>
            <li>
              <router-link to="/whitepaper/">Concepts</router-link>
            </li>
            <li>
              <a href="/tagiontechpaper.pdf" @click="$analytics.triggerEvent({category: 'Exploration', action: 'TechpaperDownload', fields: {placement: 'Footer'}})" target="_blank" rel="noopener noreferrer nofollow">
                GitHub
                <OutboundLink />
              </a>
            </li>
          </b-nav>
        </b-col>

        <b-col cols="12" sm="4" xl="4" class="mt-8 mt-sm-0 mt-xl-0 outbound-negative-space-fix">
          <h6 class="mb-3">Community</h6>
          <b-nav vertical>
            <li>
              <a href="mailto:info@tagion.org">
                Discord
                <OutboundLink />
              </a>
            </li>
            <li>
              <a href="mailto:support@tagion.org">
                Reddit
                <OutboundLink />
              </a>
            </li>
            <li>
              <a href="mailto:support@tagion.org">
                Tagion Force
                <OutboundLink />
              </a>
            </li>
            <li>
              <a href="mailto:support@tagion.org">
                Telegram
              </a>  (invite-only)
            </li>
          </b-nav>
        </b-col>

        <b-col cols="12" sm="4" xl="4" class="mt-8 mt-sm-0 mt-xl-0 outbound-negative-space-fix">
          <h6 class="mb-3">Social Media</h6>
          <b-nav vertical>
            <li>
              <a href="mailto:info@tagion.org">
                Twitter
                <OutboundLink />
              </a>
            </li>
            <li>
              <a href="mailto:support@tagion.org">
                LinkedIn
                <OutboundLink />
              </a>
            </li>
          </b-nav>
        </b-col>
      </b-row>

      
    </b-container>
  </footer>
</template>

<script>
export default {
  components: {
  }
};
</script>
