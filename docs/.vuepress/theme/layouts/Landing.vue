<template>
  <layout-default
    class="landing-page"
    id="landing-page"
  >
    <template slot="root-content">
      <reveal-group class="landing">
        <div class="hero">
          <div class="hero__background"></div>
          <b-container class="lcontainer">
            <div
              class="hero__quote"
              child
              opacity
              direction="up"
            >
              <h2>
                <span>Open Monetary and Banking System</span>
              </h2>
            </div>
            <div
              class="hero__summary"
              child
              opacity
              direction="up"
            >
              <p>Inclusive. Elastic. Decentralized. Scalable.</p>
            </div>
            <div class="hero__details">
              <div class="mt-1">
                <a
                  href="https://forum.tagion.org/t/new-members-intro-corner/30"
                  target="_blank"
                  class="btn btn-social"
                >Discuss on Forum</a>
                <a
                  href="https://t.me/tagionChat"
                  target="_blank"
                  class="btn btn-social"
                >Chat in Telegram</a>
                
                <!-- <newsletter-form class="mt-4" /> -->
              </div>
            </div>

            <div class="hero__cards feature-cards feature-cards--four">
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/dex.svg" />
                    <h4>Decentralized Exchange</h4>
                    <p>Pay with anything anywhere. DEX is an open protocol that enables a trustless exchange of any digital currency that supports HTLC (Hash Time Locked Contract).</p>
                  </div>
                </div>
              </div>

              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/money-supply.svg" />
                    <h4>Elastic Money Supply</h4>
                    <p>To scale properly, the money supply must match demand. Tagion does not have a hard cap, but makes use of elastic supply, which aims to create a stable price level.</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/governance.svg" />
                    <h4>Inclusive Governance</h4>
                    <p>Tagion and its resources are governed as a Common. All have equal right to participate, but it is the contribution which gives reward and power.</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/scalability.svg" />
                    <h4>Scalable Core Technology</h4>
                    <p>Tagion builds on a modular and scalable core. Each module can be changed and optimised. The main modules comprise of the distributed database, scripting engine, Hashgraph and gossip mechanism.</p>
                  </div>
                </div>
              </div>
            </div>
          </b-container>
        </div>

      

     
        <div class="lcontainer-wrapper lcontainer-wrapper--whitepaper">
          <b-container class="lcontainer lcontainer--illustrated lcontainer--whitepaper">
            <reveal
              class="lcontainer__headline"
              :delay="400"
            >
              <reveal
                child
                direction="up"
                opacity
              >
                <h2>Technical Paper</h2>
              </reveal>
              <reveal
                child
                direction="up"
                opacity
                :delay="200"
              >
                <p>DEX Protocol. Hashgraph Consensus. DART Database. Inclusive Governance.</p>
                <p class="text-muted">
                  This Technical Paper is a living document that will be updated as the project develops, and new concepts are being developed. In other words, the document version in front of you represents our thinking as of that moment. Open finance is a rapidly growing field, so feel free to contact us regarding our latest developments.
                </p>
              </reveal>
              <reveal
                child
                direction="right"
                opacity
                :delay="500"
                class="mt-4"
              >
                <brand-button
                  href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
                  variant="down"
                  @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                  reveal
                >Download PDF</brand-button>
              </reveal>
            </reveal>
            <div class="lcontainer__illustrations">
              <reveal
                class="lcontainer__illustration"
                :delay="200"
              >
                <white-paper />
              </reveal>
            </div>
          </b-container>
        </div>

        <!-- <div class="lcontainer-wrapper lcontainer-wrapper--video">
          <b-container class="lcontainer lcontainer--video">
            <reveal class="lcontainer__headline lcontainer__headline--small">
              <reveal child direction="up" opacity>
                <h2>Watch The Introduction</h2>
              </reveal>
            </reveal>
            <div class="intro-video mt-5">
              <reveal direction="up" opacity :delay="400">
                <iframe
                  class="hero__video lazy"
                  data-src="https://www.youtube.com/embed/2xPvrTZDAp8?modestbranding=1&rel=0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </reveal>
            </div>
          </b-container>
        </div> -->

        <div class="lcontainer-wrapper lcontainer-wrapper--overflowed mt-10">
          <b-container class="lcontainer lcontainer--roadmap">
            <b-row>
              <b-col
                cols="12"
                xl="6"
                class="lcontainer__headline-sticky"
              >
                <div class="lcontainer__headline">
                  <div
                    child
                    direction="up"
                    opacity
                  >
                    <h2>Tagion Roadmap</h2>
                    <div
                      child
                      direction="up"
                      opacity
                      :delay="200"
                    >
                      <p>The team behind Tagion has spent a significant amount of time, funding itself, while building core components: Hashgraph, Gossip protocol, DART database, HiBON data format, the underlying API and more.</p>
                      <p>We keep implementing new functionality and getting closer to the major milestone, where we can open-source the Tagion project and launch the main network.</p>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col xl="6">
                <div class="timeline">
                  <div>
                    <section class="year">
                      <h3>2015</h3>
                      <section>
                        <ul>
                          <li>Ideation of BitCuits by Carsten Bleser Rasmussen.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year">
                      <h3>2017</h3>
                      <section>
                        <h4>July</h4>
                        <ul>
                          <li>Tagion project is formally started by the three founders.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>December</h4>
                        <ul>
                          <li>Blockchain-based proof of concept network tested.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year">
                      <h3>2018</h3>
                      <section>
                        <h4>January</h4>
                        <ul>
                          <li>Redesigned network to use Hashgraph instead of Blockchain.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>April</h4>
                        <ul>
                          <li>Confirmed that our design is not violating any patents.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>July</h4>
                        <ul>
                          <li>Implemented β-version of HBSON (now HiBON) data format.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>August</h4>
                        <ul>
                          <li>Implemented α-version of transaction API.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>October</h4>
                        <ul>
                          <li>Implemented α-version of Gossip protocol.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>November</h4>
                        <ul>
                          <li>Implemented α-version of Hashgraph consensus protocol.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>December</h4>
                        <ul>
                          <li>Formed the core principles of the node governance model.</li>
                          <li>Successfully tested Hashgraph implementation in closed network.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year">
                      <h3>2019</h3>
                      <section>
                        <h4>January</h4>
                        <ul>
                          <li>Implemented α-version of scripting engine.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>April</h4>
                        <ul>
                          <li>Implemented α-version of DART.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>July</h4>
                        <ul>
                          <li>Filed patents for Gossip protocol and DART.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>September</h4>
                        <ul>
                          <li>Formed the core principles of the economic governance model.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>October</h4>
                        <ul>
                          <li>Implemented β-version of HiBON and HiBON-RPC.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>December</h4>
                        <ul>
                          <li>α-launch of developer package and test node.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year">
                      <h3>2020</h3>
                      <section>
                        <h4>June</h4>
                        <ul>
                          <li><code>_basic</code> release on GitHub.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>July</h4>
                        <ul>
                          <li>HiBON release on GitHub.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>August</h4>
                        <ul>
                          <li>Alpha test network release.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year year--future">
                      <h3>2021</h3>
                      <section>
                        <h4>Q1</h4>
                        <ul>
                          <li>Open-sourcing the Tagion Core library.</li>
                          <li>β-launch of the Tagion Network.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>Q2</h4>
                        <ul>
                          <li>Launching main network.</li>
                        </ul>
                      </section>

                    </section>
                  </div>
                </div>
              </b-col>
            </b-row>

          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white mb-10">
          <b-container class="lcontainer lcontainer--team pb-3">
            <reveal class="">
              <reveal
                child
                direction="up"
                opacity
              >
                <h2 class="text-center mb-5">Meet People Behind Tagion</h2>
              </reveal>
            </reveal>
            <reveal class="team-table">
              <b-row class="row--big-gutter justify-content-center">
                <b-col
                  cols="12"
                  md="6"
                  xl="4"
                  v-for="(teamMember, index) in teamMembers"
                >
                  <reveal
                    child
                    opacity
                    direction="left"
                    :delay="50 * index"
                  >
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                      :about="teamMember.about"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-row>
            </reveal>
            <div class="global-team-information">
              <reveal
                direction="up"
                opacity
                :delay="400"
              >
                <p>Tagion is an open-source project with members contributing from all over the planet. The company currently funding and developing Tagion, I25s, is located in Denmark and Ukraine. Currently, there are 15+ full-time resources working on the Tagion project. </p>
              </reveal>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white mb-10">
          <b-container class="lcontainer lcontainer--team pb-3">
            <reveal class="">
              <reveal
                child
                direction="up"
                opacity
              >
                <h2 class="text-center mb-5">Advisers</h2>
              </reveal>
            </reveal>
            <reveal class="team-table">
              <b-row class="row--big-gutter justify-content-center">
                <b-col
                  cols="12"
                  lg="6"
                  xl="3"
                  v-for="(teamMember, index) in advisers"
                >
                  <reveal
                    child
                    opacity
                    direction="left"
                    :delay="50 * index"
                  >
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                      :about="teamMember.about"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-row>
            </reveal>
          </b-container>
        </div>

      </reveal-group>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/layout/LayoutDefault";
import RevealGroup from "@theme/components/transition/RevealGroup";
import BrandButton from "@theme/components/sealed/BrandButton";
import SocialButtons from "@theme/components/sealed/SocialButtons";
import DownloadBrandButton from "@theme/components/sealed/DownloadBrandButton";
import NewsletterForm from "@theme/components/sealed/NewsletterForm";
import TeamCard from "@theme/components/sealed/TeamCard";
import Reveal from "@theme/components/transition/Reveal";
import News from "@theme/components/sealed/News";

import { isMobile } from "@theme/util";
import { teamMembers, advisers } from "@theme/data";

export default {
  data() {
    return {
      teamMembers,
      advisers,
      selectedTeamMember: undefined,
    };
  },
  components: {
    LayoutDefault,
    RevealGroup,
    WhitePaper: () => import("@theme/components/sealed/WhitePaper"),
    Roadmap: () => import("@theme/components/sealed/Roadmap"),
    BrandButton,
    DownloadBrandButton,
    SocialButtons,
    NewsletterForm,
    TeamCard,
    Reveal,
    News,
  },
  methods: {
    openTeamCard(teamMember) {
      this.selectedTeamMember = teamMember;
    },
    closeTeamCard() {
      this.selectedTeamMember = false;
    },
    scrollToAlphaOne() {
      this.$scrollTo(this.$refs["alphaone"]);
    },
  },
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
