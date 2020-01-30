<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="hero">
          <div class="hero__background"></div>
          <b-container class="lcontainer">
            <div class="hero__quote" child opacity direction="up">
              <h2>
                <span>Universal Token Protocol</span>
              </h2>
            </div>
            <div class="hero__summary" child opacity direction="up" :delay="300">
              <p>Inclusive. Elastic. Decentralized. Distributed.</p>
            </div>
            <div class="hero__details">
              <div child opacity direction="down" :delay="250">
                <p></p>
              </div>
              <div class="mb-3">
                <div child opacity direction="down" :delay="350">
                  <social-buttons dark />
                </div>
              </div>
              <div>
                <div child opacity direction="down" :delay="450">
                  <small class="hero__join-note">Get all the important updates first:</small>
                  <newsletter-form />
                </div>
              </div>
            </div>

            <div class="hero__cards feature-cards">
              <div to="/whitepaper/synopsis/dex.html" class="feature-card">
                <div child opacity direction="left" :delay="1000">
                  <div class="feature-card__internal">
                    <img data-src="/figures/circle/hashgraph.svg" loading="lazy" class="lazy" />
                    <h4>Decentralized Exchange</h4>
                    <p>
                      Pay with anything anywhere.
                      DEX is an
                      <b>open</b> protocol that enables a
                      trustless exchange of any digital Currency that supports Hash Time Locked Contract.
                    </p>
                    <p class="feature-card__read-more">Read more</p>
                  </div>
                </div>
              </div>
              
              <div to="/whitepaper/synopsis/consensus.html" class="feature-card">
                <div child opacity direction="left" :delay="600">
                  <div class="feature-card__internal">
                    <img data-src="/figures/circle/money-supply.svg" loading="lazy" class="lazy" />
                    <h4>Elastic Money Supply</h4>
                    <p>
                      To scale properly, the money supply must match the demand.
                      Tagion does not have a hard cap, but elastic supply, which aims to create a stable price level.
                    </p>
                    <p class="feature-card__read-more">Read more</p>
                  </div>
                </div>
              </div>
              <div to="/whitepaper/synopsis/governance.html" class="feature-card">
                <div child opacity direction="left" :delay="800">
                  <div class="feature-card__internal">
                    <img data-src="/figures/circle/governance.svg" loading="lazy" class="lazy" />
                    <h4>Inclusive Governance</h4>
                    <p>
                      Tagion is open-source and governed as a common resource.
                      Everyone has the same rights in the system, but those who contribute more, have more voting power.
                    </p>
                    <p class="feature-card__read-more">Read more</p>
                  </div>
                </div>
              </div>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper">
          <b-container class="lcontainer">
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>Start Playing With Developer Tools</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>[A paragraph about dev tools]</p>
              </reveal>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper">
          <b-container class="lcontainer">
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>Contribute With Your Ideas</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>[A paragraph on how to contribute ideas on reddit]</p>
              </reveal>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--whitepaper">
          <b-container class="lcontainer lcontainer--illustrated lcontainer--whitepaper">
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>Technical Paper</h2>
              </reveal>
              <reveal child direction="down" opacity>
                <p>Currency, DEX, Hashgraph and Governance.</p>
              </reveal>
              <reveal child direction="right" opacity :delay="500" class="mt-4">
                <brand-button
                  href="/tagionwhitepaper.pdf"
                  @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                  reveal
                  variant="down"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="brand-button--down"
                >Download PDF</brand-button>
              </reveal>
            </reveal>
            <div class="lcontainer__illustrations">
              <reveal class="lcontainer__illustration" :delay="200">
                <white-paper />
              </reveal>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white">
          <b-container class="lcontainer lcontainer--team">
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>Meet People Behind Tagion</h2>
              </reveal>
            </reveal>
            <reveal class="team-table">
              <b-row>
                <b-col cols="12" md="6" xl="4" v-for="(teamMember, index) in teamMembers">
                  <reveal child opacity direction="left" :delay="50 * index">
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-row>
            </reveal>
          </b-container>
        </div>
      </div>

      <div class="lcontainer-wrapper">
        <b-container class="lcontainer">
          <reveal class="lcontainer__headline">
            <reveal child direction="up" opacity>
              <h2>Tagion is Committed to Transparency</h2>
            </reveal>
            <reveal child direction="up" opacity :delay="200">
              <p>We are fully committed to transparency. Tagion partners up with TrustedIn Trading, the platform to ensure responsibility and transparency in the wild world of cryptocurrency startups.</p>
            </reveal>
          </reveal>
        </b-container>
      </div>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import WhitePaper from "@theme/components/WhitePaper";
import Roadmap from "@theme/components/Roadmap";
import BrandButton from "@theme/components/BrandButton";
import SocialButtons from "@theme/components/SocialButtons";
import DownloadBrandButton from "@theme/components/DownloadBrandButton";
import NewsletterForm from "@theme/components/NewsletterForm";
import TeamCard from "@theme/components/landing/TeamCard";
import Reveal from "@theme/components/landing/Reveal";
import News from "@theme/components/landing/News";
import * as throttle from "lodash.throttle";
import { isMobile } from "../util";
import { teamMembers } from "../data";

export default {
  data() {
    return {
      parallaxElements: [],
      revealElements: [],
      videoOpened: false,
      teamMembers
    };
  },
  components: {
    LayoutDefault,
    WhitePaper,
    Roadmap,
    BrandButton,
    DownloadBrandButton,
    SocialButtons,
    NewsletterForm,
    TeamCard,
    Reveal,
    News
  },
  mounted() {
    this.revealElements = Array.from(
      document.querySelectorAll("[scroll-reveal]")
    );

    if (!isMobile()) {
      window.addEventListener("scroll", this.throttleReveal);
      this.handleReveal();
    } else {
      this.handleRevealAll();
    }

    setTimeout(() => {
      this.$refs.heroBackground.classList.add("hero__background--loaded");
    }, 1000);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleReveal);
  },
  methods: {
    throttleReveal: throttle(function() {
      this.handleReveal();
    }, 200),
    handleRevealAll() {
      for (let i = 0; i < this.revealElements.length; i++) {
        let element = this.revealElements[i];
        let childReveals = element.querySelectorAll("[scroll-reveal-child]");

        element.classList.add("fast-reveal");
        element.classList.add("scroll-reveal--revealed");

        for (let i = 0; i < childReveals.length; i++) {
          childReveals[i].classList.add("fast-reveal");
          childReveals[i].classList.add("scroll-reveal--revealed");
        }
      }
    },
    handleReveal() {
      let scrollY = window.scrollY;
      scrollY += window.innerHeight - 150;
      let revealedSome = false;

      for (let i = 0; i < this.revealElements.length; i++) {
        let element = this.revealElements[i];
        let elOffset = this.offset(element.parentElement);

        if (elOffset < scrollY) {
          if (!element.dataset.scrollRevealed) {
            let childReveals = element.querySelectorAll(
              "[scroll-reveal-child]"
            );

            if (element.dataset.revealDelay) {
              setTimeout(() => {
                element.classList.add("scroll-reveal--revealed");

                for (let i = 0; i < childReveals.length; i++) {
                  if (childReveals[i].dataset.revealDelay) {
                    setTimeout(() => {
                      childReveals[i].classList.add("scroll-reveal--revealed");
                    }, parseInt(childReveals[i].dataset.revealDelay));
                  } else {
                    childReveals[i].classList.add("scroll-reveal--revealed");
                  }
                }
              }, parseInt(element.dataset.revealDelay));
            } else {
              element.classList.add("scroll-reveal--revealed");

              for (let i = 0; i < childReveals.length; i++) {
                if (childReveals[i].dataset.revealDelay) {
                  setTimeout(() => {
                    childReveals[i].classList.add("scroll-reveal--revealed");
                  }, parseInt(childReveals[i].dataset.revealDelay));
                } else {
                  childReveals[i].classList.add("scroll-reveal--revealed");
                }
              }
            }
            element.dataset.scrollRevealed = true;
            revealedSome = true;
          }
        }
      }

      if (revealedSome) {
        this.revealElements = this.revealElements.filter(
          element => !element.dataset.scrollRevealed
        );
      }
    },
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    }
  }
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
