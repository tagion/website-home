<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="hero mb-4">
          <div class="hero__background"></div>
          <b-container class="lcontainer">
            <div class="hero__quote" child opacity direction="up">
              <h2>
                <span>Universal Token Protocol</span>
              </h2>
            </div>
            <div class="hero__summary" child opacity direction="up">
              <p>Inclusive. Elastic. Decentralized. Distributed.</p>
            </div>
            <div class="hero__details">
              <div child opacity direction="down">
                <p></p>
              </div>
              <div class="mb-3">
                <div child opacity direction="down">
                  <social-buttons dark />
                </div>
              </div>
              <div>
                <div child opacity direction="down">
                  <small class="hero__join-note">Get all the important updates first:</small>
                  <newsletter-form />
                </div>
              </div>
            </div>

            <div class="hero__cards feature-cards">
              <div class="feature-card">
                <div child opacity direction="left">
                  <div class="feature-card__internal">
                    <img src="/icons/dex.svg" />
                    <h4>Decentralized Exchange</h4>
                    <p>
                      Pay with anything anywhere.
                      DEX is an
                      <b>open</b> protocol that enables a
                      trustless exchange of any digital Currency that supports Hash Time Locked Contract.
                    </p>
                  </div>
                </div>
              </div>

              <div class="feature-card">
                <div child opacity direction="left">
                  <div class="feature-card__internal">
                    <img src="/icons/money-supply.svg" />
                    <h4>Elastic Money Supply</h4>
                    <p>
                      To scale properly, the money supply must match the demand.
                      Tagion does not have a hard cap, but elastic supply, which aims to create a stable price level.
                    </p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div child opacity direction="left">
                  <div class="feature-card__internal">
                    <img src="/icons/governance.svg" />
                    <h4>Inclusive Governance</h4>
                    <p>
                      Tagion is open-source and governed as a common resource.
                      Everyone has the same rights in the system, but those who contribute more, have more voting power.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--story">
          <b-container class="lcontainer lcontainer--story">
            <reveal class="lcontainer__story-content">
              <reveal child direction="up" opacity>
                <h2>What is Tagion?</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>Tagion is a monetary system and banking system that can handle and settle 100.000s of transactions simultaneously at speeds comparable to the EMVCO (Master/VISA) network. It will be released as open-source and as a common, supported by a democratic governance model.</p>
              </reveal>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--story">
          <b-container class="lcontainer lcontainer--story">
            <reveal class="lcontainer__story-content">
              <reveal child direction="up" opacity>
                <h2>Why is Tagion relevant to the world?</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.</p>
                <p>Tagion addresses problems such as the speed of transactions, high energy use, inability to efficiently perform decentralized exchanges of cryptocurrencies and failure to adhere to regulations.</p>
                <p>The incumbent fiat-based systems suffer from several issues too, and here Tagion addresses unequal access to banking, high transaction cost, complicated and costly cross-border transactions among others.</p>
              </reveal>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--story">
          <b-container class="lcontainer lcontainer--story">
            <reveal class="lcontainer__story-content">
              <reveal child direction="up" opacity>
                <h2>Where is Tagion beneficial?</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>Tagion can act as the backbone for almost any transaction-based service as it connects robust security mechanisms and fair ordering mechanisms with parallel execution.</p>

                <p>Tagion enables smooth cross-border transactions at very fair prices and provides an open transaction platform allowing for any person or company to participate. The openness of the system offers businesses and incumbents to compete on equal terms</p>
              </reveal>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--story">
          <b-container class="lcontainer lcontainer--story">
            <reveal class="lcontainer__story-content">
              <reveal child direction="up" opacity>
                <h2>Who owns and runs Tagion?</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>Currently, Tagion is funded and developed by its founders. As soon as the network is strong enough to be self-sustainable, it becomes open-sourced, and all IP's transferred to the Tagion foundation. This foundation will be responsible for the funding of projects that further develop Tagion.</p>
              </reveal>
            </reveal>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--whitepaper mt-8 mb-4">
          <b-container class="lcontainer lcontainer--illustrated lcontainer--whitepaper">
            <reveal class="lcontainer__headline" :delay="400">
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

        <div class="lcontainer-wrapper mt-8">
        <b-container class="lcontainer lcontainer--roadmap">
          <b-row>
            <b-col cols="12" xl="5" class="d-flex align-items-center">
              <reveal class="lcontainer__headline">
                <reveal child direction="up" opacity>
                  <h2>Tagion Roadmap</h2>
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
                <img class="lcontainer--roadmap__roadmap" src="/timeline.svg" />
              </reveal>
            </b-col>
          </b-row>
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

      

      <div class="lcontainer-wrapper mb-8 mt-5">
        <b-container class="lcontainer">
          <b-row>
            <b-col cols="12" lg="8">
              <reveal class="lcontainer__headline pr-6">
                <reveal child direction="up" opacity>
                  <h2>Tagion is Committed to Transparency</h2>
                </reveal>
                <reveal child direction="up" opacity :delay="200">
                  <p>We are fully committed to transparency. Tagion partners up with TrustedIn Trading, the platform to ensure responsibility and transparency in the wild world of cryptocurrency startups.</p>
                </reveal>
                <reveal child direction="right" opacity :delay="500" class="mt-4">
                  <brand-button
                    href="/tagionwhitepaper.pdf"
                    @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                    reveal
                    variant="right"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >Visit Tagion on TrustedIn Trading</brand-button>
                </reveal>
              </reveal>
            </b-col>
            <b-col cols="12" lg="4" class="mt-8 mt-lg-0 text-center">
              <reveal direction="left" opacity :delay="300">
                <img width="120" src="/partners/trustedintrading.png" />
              </reveal>
            </b-col>
          </b-row>
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
