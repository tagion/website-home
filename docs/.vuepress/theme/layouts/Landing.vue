<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <reveal class="hero">
          <b-container class="lcontainer lcontainer--hero">
            <div class="hero__background"></div>
            <b-row class="hero_content">
              <b-col cols="12" xl="5">
                <reveal class="hero__quote" child opacity direction="up">
                  <h2>
                    <span class="hero__quote-muted">Creating a</span>
                    <br />
                    <span class="hero__quote-accent">Sustainable</span>
                    <br />
                    <span class="hero__quote-muted">Economic</span>
                    <br />
                    <span class="hero__quote-muted">World</span>
                  </h2>
                </reveal>
                <div class="hero__details">
                  <reveal child opacity direction="down" :delay="250">
                    <p>
                      <b>Tagion</b> is a peer-to-peer cryptocurrency designed for adoption on a massive scale.
                    </p>
                  </reveal>

                  <div class="hero__buttons mt-5">
                    <div class="hero__button-wrapper">
                      <reveal child opacity direction="down" :delay="350">
                        <social-buttons light class="mb-3" />
                      </reveal>
                      <reveal child opacity direction="down" :delay="450">
                        <p>
                          <small>
                            Subscribe to our newsletter to stay in the loop.
                            <br />You can unsubscribe at any time.
                          </small>
                        </p>
                      </reveal>
                      <reveal
                        child
                        opacity
                        direction="down"
                        :delay="550"
                        style="position: relative; z-index: 5;"
                      >
                        <newsletter-form dark class="hero__newsletter" />
                      </reveal>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" xl="7">
                <reveal
                  class="hero__video-wrapper"
                  child
                  opacity
                  direction="up"
                  :delay="750"
                  style="position: relative; z-index: 5; width: 100%; height; 100%;"
                >
                  <iframe
                    class="hero__video"
                    src="https://www.youtube.com/embed/2xPvrTZDAp8?modestbranding=1&rel=0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </reveal>
              </b-col>
            </b-row>
          </b-container>
        </reveal>

        <div class="lcontainer-wrapper lcontainer-wrapper--grey" id="starter-section">
          <b-container class="lcontainer lcontainer--bulletpoints">
            <reveal class="lcontainer__headline">
              <reveal child opacity direction="up">
                <h2>
                  <span class="lcontainer__headline__number">1.</span> Creating a Sustainable Economic World
                </h2>
              </reveal>
              <reveal child opacity direction="down">
                <p>Tagion is a decentralized monetary system with basic banking services built-in. We aim to create an infrastructure to unify cryptocurrencies into one interconnected system.</p>
              </reveal>
            </reveal>
            <reveal class="feature-cards" :delay="300">
              <router-link to="/whitepaper/synopsis/dex.html" class="feature-card">
                <reveal child opacity direction="left" :delay="100">
                  <div class="feature-card__internal">
                    <img data-src="/figures/circle/dex.svg" loading="lazy" class="lazy" />
                    <h4>Decentralized Exchange Protocol</h4>
                    <p>
                      DEX protocol enables a
                      <b>trustless</b> exchange of any cryptocurrency that supports Lightning Protocol. Tagion aims to unify cryptocurrencies instead of fighting them.
                    </p>
                    <p class="feature-card__read-more">Read more</p>
                  </div>
                </reveal>
              </router-link>
              <router-link to="/whitepaper/synopsis/governance.html" class="feature-card">
                <reveal child opacity direction="left" :delay="200">
                  <div class="feature-card__internal">
                    <img data-src="/figures/circle/governance.svg" loading="lazy" class="lazy" />
                    <h4>Democratic Governance</h4>
                    <p>
                      We based Tagion’s governance model on the
                      <b>"Governing the Commons"</b> work by the Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom.
                    </p>
                    <p class="feature-card__read-more">Read more</p>
                  </div>
                </reveal>
              </router-link>
              <router-link to="/whitepaper/synopsis/consensus.html" class="feature-card">
                <reveal child opacity direction="left" :delay="300">
                  <div class="feature-card__internal">
                    <img data-src="/figures/circle/hashgraph.svg" loading="lazy" class="lazy" />
                    <h4>Hashgraph Consensus</h4>
                    <p>
                      Instead of Blockchain, Tagion uses
                      <b>Hashgraph</b> - a leaderless aBFT consensus mechanism.
                      <b>Fast payments</b>, low energy consumption, efficient data usage.
                    </p>
                    <p class="feature-card__read-more">Read more</p>
                  </div>
                </reveal>
              </router-link>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container class="lcontainer lcontainer--bluebg lcontainer--roadmap">
            <b-row>
              <b-col cols="12" xl="5" class="d-flex align-items-center">
                <reveal class="lcontainer__headline">
                  <reveal child direction="up" opacity>
                    <h2>
                      <span class="lcontainer__headline__number">2.</span>Roadmap
                    </h2>
                  </reveal>
                  <reveal child direction="down" opacity>
                    <p>
                      The team behind Tagion has spent a significant amount of time, funding itself, while building core components: Hashgraph, Gossip protocol,
                      DART database, HiBON data format, the underlying API and more. We keep implementing new functionality and getting closer to the major milestone, where we can open-source the Tagion project.
                    </p>
                  </reveal>
                  <reveal child direction="right" opacity :delay="200">
                    <brand-button reveal to="/community/roadmap.html" class="mt-5">Detailed Roadmap</brand-button>
                  </reveal>
                </reveal>
              </b-col>
              <b-col cols="12" xl="7" class="d-none d-md-block">
                <reveal opacity direction="up" :delay="700">
                  <roadmap class="lcontainer--roadmap__roadmap" />
                </reveal>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--grey pt-0">
          <b-container class="lcontainer lcontainer--news">
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>
                  <span class="lcontainer__headline__number">3.</span>Latest from Tagion
                </h2>
              </reveal>
            </reveal>
            <reveal class="mt-4" opacity direction="up" :delay="500">
              <div>
                <news />
              </div>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container
            class="lcontainer lcontainer--bluebg lcontainer--illustrated lcontainer--whitepaper"
          >
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>
                  The Tagion
                  <br />Whitepaper
                </h2>
              </reveal>
              <reveal child direction="down" opacity>
                <p class="mb-4">Currency, DEX, Hashgraph and Governance.</p>
              </reveal>
              <reveal child direction="right" opacity :delay="500">
                <brand-button
                  href="/tagionwhitepaper.pdf"
                  @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                  reveal
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="brand-button--down"
                >Download Whitepaper</brand-button>
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
                <h2>
                  <span class="lcontainer__headline__number">4.</span>Tagion Team
                </h2>
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

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container class="lcontainer lcontainer--bluebg lcontainer--narrow">
            <reveal class="lcontainer__headline" :delay="100">
              <reveal direction="up" opacity child>
                <h2>Trust & Transparency</h2>
              </reveal>
              <reveal direction="down" opacity child>
                <p>
                  <b>We are fully committed to transparency.</b> Tagion partners up with TrustedIn Trading, the platform to ensure responsibility and transparency in the wild world of cryptocurrency startups.
                </p>
              </reveal>

              <reveal child direction="right" opacity :delay="450" class="mt-4">
                <brand-button
                  href="https://www.trustedintrading.com/profile/tagion/"
                  @click="$analytics.triggerEvent({category: 'Exploration', action: 'TrustedInTrading', fields: {placement: 'Landing'}})"
                  reveal
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >See Tagion on TrustedIn Trading</brand-button>
              </reveal>
            </reveal>
          </b-container>
        </div>
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
