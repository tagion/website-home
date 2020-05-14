<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col
          cols="12"
          sm="6"
          xl="4"
          class="outbound-negative-space-fix mt-8 mt-sm-0"
        >
          <h6 class="mb-3">Quick Links</h6>
          <b-nav vertical>
            <li>
              <a
                href="https://forum.tagion.org/t/tagion-faq"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'FAQVisit', fields: {placement: 'Footer'}})"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                FAQ
                <OutboundLink />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://forum.tagion.org/"
              >Official Forum
                <OutboundLink /></a>
            </li>
            <li>
              <a
                href="https://github.com/tagion/resources/raw/master/whitepaper/tagion-whitepaper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Footer'}})"
              >Whitepaper
                <DownloadLink /></a>
            </li>
            <li>
              <a
                href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'TechpaperDownload', fields: {placement: 'Footer'}})"
              >
                Technical Paper
                <DownloadLink />
              </a>
            </li>
            
          </b-nav>
        </b-col>

        <b-col class="mt-8 mt-sm-0 mt-xl-0 outbound-negative-space-fix">
          <h6 class="mb-3">Contact</h6>
          <b-nav vertical>
            <li>
              <a href="mailto:info@tagion.org">
                info@tagion.org
                <OutboundLink />
              </a>
            </li>
            <li>
              <a href="mailto:support@tagion.org">
                support@tagion.org
                <OutboundLink />
              </a>
            </li>
          </b-nav>
        </b-col>
        <b-col
          class="col-newsletter mt-8 mt-xl-0 outbound-negative-space-fix"
          cols=12
          xl=4
        >
          <h6 class="mb-3">Communication Channels</h6>
          <social-buttons
            class="mb-3 mt-3"
            dark
          />
          <p class="mb-1"><small>By joining, you agree with our <router-link to="/meta/privacy-policy"><u>Privacy Policy</u></router-link>.</small></p>
          <newsletter-form class="footer-newsletter" />

        </b-col>
      </b-row>

      <b-row class="mt-10 align-items-md-center">
        <b-col cols="12">
          <div class="d-flex align-items-start">
            <img
              class="footer__logo"
              src="/logo.svg"
              alt="Tagion Logo"
            />
            <ul class="list-inline list-group-transparent list-group-flush list-group-borderless mb-0 text-muted">
              <li class="list-inline-item pl-0 pr-4 my-1">© Tagion, 2020. All rights reserved.</li>
              <li class="list-inline-item pl-0 pr-4 my-1">
                <router-link to="/meta/privacy-policy">Privacy Policy</router-link>
              </li>
              <li class="list-inline-item pl-0 pr-4 my-1">
                <router-link to="/meta/cookie-policy">Cookie Policy</router-link>
              </li>
              <li class="list-inline-item pl-0 pr-4 my-1">
                <router-link to="/meta/terms-of-use">Terms of Use</router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import NewsletterForm from "./NewsletterForm";
import SocialButtons from "./SocialButtons";
import DownloadLink from "./DownloadLink";

export default {
  components: {
    NewsletterForm,
    SocialButtons,
    DownloadLink
  }
};
</script>
