<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="hero" scroll-reveal>
          <b-container class="lcontainer lcontainer--hero">
            <div class="hero__background"></div>
            <b-row class="hero_content">
              <b-col cols=12 xl=5>
                <div class="hero__quote">
                  <h2
                    scroll-reveal-child
                    scroll-reveal-up
                    scroll-reveal-opacity
                    data-reveal-delay="200"
                  >
                    <span class="hero__quote-accent">Open</span>
                    <br />
                    <span class="hero__quote-muted">Banking</span>
                    <br />
                    <span class="hero__quote-muted">Protocol</span>
                  </h2>
                </div>
                <div class="hero__details">
                  <p>
                    <b>Peer-to-peer cryptocurrency</b>, governed by its users. Designed for adoption on a massive scale.
                  </p>

                  <div class="hero__buttons mt-5">
                    <div class="hero__button-wrapper">
                      <p>
                        <small>Subscribe to our newsletter to get updates on the latest developments. We don't spam and you can unsubscribe at any time.</small>
                      </p>
                      <newsletter-form dark class="hero__newsletter" />
                      <social-buttons light class="mt-3" />
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col  cols=12 xl=7 class="hero__video-wrapper">
                <iframe
                  class="hero__video"
                  src="https://www.youtube.com/embed/2xPvrTZDAp8?autoplay=1&modestbranding=1&rel=0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--grey" id="starter-section">
          <b-container class="lcontainer lcontainer--bulletpoints">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">1.</span> Creating a Sustainable Economic World
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >Tagion is a decentralized monetary system with basic banking services built-in, unifying cryptocurrencies instead of fighting them. Designed for adoption on a massive scale.</p>
            </div>
            <div class="feature-cards" scroll-reveal data-reveal-delay="200">
              <router-link
                to="/whitepaper/synopsis/dex.html"
                class="feature-card feature-card--c1"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                <div class="feature-card__internal">
                  <img data-src="/figures/circle/dex.svg" loading="lazy" class="lazy" />
                  <h4>Decentralized Exchange Protocol</h4>
                  <p>
                    DEX protocol enables
                    <b>trustless</b> exchange of any cryptocurrency that supports Lightning Protocol. Tagion aims to unify cryptocurrencies instead of fighting them.
                  </p>
                  <p class="feature-card__read-more">Read more</p>
                </div>
              </router-link>
              <router-link
                to="/whitepaper/synopsis/governance.html"
                class="feature-card feature-card--c1"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="200"
              >
                <div class="feature-card__internal">
                  <img data-src="/figures/circle/governance.svg" loading="lazy" class="lazy" />
                  <h4>Democratic Governance</h4>
                  <p>
                    Tagion’s governance model is based on the
                    <b>"Governing the Commons"</b> by the Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom.
                  </p>
                  <p class="feature-card__read-more">Read more</p>
                </div>
              </router-link>
              <router-link
                to="/whitepaper/synopsis/consensus.html"
                class="feature-card feature-card--c2"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="300"
              >
                <div class="feature-card__internal">
                  <img data-src="/figures/circle/hashgraph.svg" loading="lazy" class="lazy" />
                  <h4>Hashgraph Consensus</h4>
                  <p>
                    Insteal of Blockchain, Tagion uses
                    <b>Hashgraph</b> - a leaderless aBFT consensus mechanism.
                    <b>Fast payments</b>, low energy consumption, effecient data usage.
                  </p>
                  <p class="feature-card__read-more">Read more</p>
                </div>
              </router-link>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container class="lcontainer lcontainer--bluebg lcontainer--roadmap">
            <b-row>
              <b-col cols="12" xl="5" class="d-flex align-items-center">
                <div class="lcontainer__headline" scroll-reveal>
                  <h2
                    scroll-reveal-child
                    scroll-reveal-up
                    scroll-reveal-opacity
                    data-reveal-delay="0"
                  >
                    <span class="lcontainer__headline__number">2.</span>Roadmap
                  </h2>
                  <p
                    scroll-reveal-child
                    scroll-reveal-down
                    scroll-reveal-opacity
                    data-reveal-delay="100"
                  >The team behind Tagion has spent significant time and money on building a system that addresses many of the issues that both the fiat-based monetary system and DLT based systems are suffering from. Tagion is both an alternative -and a supplement -to both the current system and the DLT based systems.</p>
                  <brand-button
                    to="/community/roadmap.html"
                    class="mt-5"
                    reveal
                    scroll-reveal-child
                    scroll-reveal-right
                    scroll-reveal-opacity
                    data-reveal-delay="400"
                  >Detailed Roadmap</brand-button>
                </div>
              </b-col>
              <b-col cols="12" xl="7" class="d-none d-md-block">
                <div scroll-reveal scroll-reveal-up scroll-reveal-opacity data-reveal-delay="700">
                  <roadmap class="lcontainer--roadmap__roadmap" />
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--grey pt-0">
          <b-container class="lcontainer lcontainer--news">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="50">
                <span class="lcontainer__headline__number">3.</span>Latest from Tagion
              </h2>
            </div>
            <div class="mt-4">
              <div scroll-reveal scroll-reveal-up scroll-reveal-opacity data-reveal-delay="300">
                <news />
              </div>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container
            class="lcontainer lcontainer--bluebg lcontainer--illustrated lcontainer--whitepaper"
          >
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                The Tagion
                <br />White Paper
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
                class="mb-4"
              >Currency. Consensus. Data Storage. Governance.</p>
              <brand-button
                href="/tagionwhitepaper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                reveal
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="brand-button--down"
                scroll-reveal-child
                scroll-reveal-right
                scroll-reveal-opacity
                data-reveal-delay="500"
              >Download White Paper</brand-button>
            </div>
            <div class="lcontainer__illustrations">
              <div class="lcontainer__illustration" scroll-reveal data-reveal-delay="200">
                <white-paper />
              </div>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white">
          <b-container class="lcontainer lcontainer--team">
            <reveal class="lcontainer__headline">
              <reveal child direction="up" opacity>
                <h2>
                  <span class="lcontainer__headline__number">4.</span>Team
                </h2>
              </reveal>
              <reveal direction="down" opacity child>
                <p>Learn more about truly dedicated team behind Tagion.</p>
              </reveal>
            </reveal>
            <div class="team-table" scroll-reveal scroll-reveal-opacity>
              <b-row>
                <b-col cols="12" md="6" xl="4" v-for="teamMember in teamMembers">
                  <reveal child opacity direction="left" :delay="300">
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-row>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container class="lcontainer lcontainer--bluebg lcontainer--community">
            <reveal class="lcontainer__headline" :delay="100">
              <reveal class="mb-2" direction="up" opacity child>
                <h2>Join the Conversation!</h2>
              </reveal>
              <reveal direction="down" opacity child>
                <p>Tagion is a community-centric project and is still in its early days. Join to participate in discussions, suggest ideas, contribute. You are an essential part of Tagion!</p>
              </reveal>

              <reveal child direction="down" opacity :delay="350" class="mt-4">
                <social-buttons light />
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
import VideoModal from "@theme/components/VideoModal";
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
      layoutElement: undefined,
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
    VideoModal,
    TeamCard,
    Reveal,
    News
  },
  mounted() {
    this.layoutElement = document.getElementById("landing-page");
    this.parallaxElements = Array.from(
      document.getElementsByClassName("parallax-element")
    );
    this.revealElements = Array.from(
      document.querySelectorAll("[scroll-reveal]")
    );

    if (!isMobile()) {
      window.addEventListener("scroll", this.throttleParallax);
      window.addEventListener("scroll", this.throttleReveal);
      this.handleReveal();
    } else {
      this.handleRevealAll();
    }

    this.handleParallax();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleParallax);
    window.removeEventListener("scroll", this.throttleReveal);
  },
  methods: {
    openVideo() {
      this.videoOpened = true;
    },
    closeVideo() {
      this.videoOpened = false;
    },
    throttleParallax: throttle(function() {
      this.handleParallax();
    }, 50),
    throttleReveal: throttle(function() {
      this.handleReveal();
    }, 200),
    handleParallax() {
      let scrollY = window.scrollY + window.innerHeight;

      for (let i = 0; i < this.parallaxElements.length; i++) {
        let element = this.parallaxElements[i];
        let elOffset = this.offset(element.parentElement);
        let multiplier =
          this.parallaxElements[i].dataset.parallaxFactor || 0.05;

        if (elOffset < scrollY) {
          let parallaxTranslate = (scrollY - elOffset) * multiplier;
          if (
            element.dataset.parallaxCache != parallaxTranslate &&
            Math.abs(parallaxTranslate) < 300
          ) {
            element.style.transform = `translateY(${parallaxTranslate}px)`;
            element.dataset.parallaxCache = parallaxTranslate;
          }
        }
      }
    },
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
