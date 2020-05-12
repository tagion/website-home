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
                <span>Universal Token Protocol</span>
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
              <div class="mt-3">

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
                <newsletter-form class="mt-4" />
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

        <div class="lcontainer-wrapper-group lcontainer-wrapper-group--story">
          <div class="lcontainer-wrapper-group__paper">
            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Big Why</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <p>The world has too many financial (and physical) borders. Tagion was born to break down those borders and enable seamlessly peer-to-peer money transfers. Cheap, quick, fair, and fast for anyone anywhere.</p>
                  </reveal>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Inquiring How</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <p>Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.</p>
                  </reveal>
                </reveal>
                <reveal
                  :delay="500"
                  opacity
                  direction="up"
                  class="lcontainer__story-cards-wrapper"
                >
                  <div role="tablist">
                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-1
                          variant="info"
                        >Network Throughput</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-1"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second per shard. In comparison, VISA does around 1,700 transactions per second on average.</p>
                            <p>Tagion is architected to be able to scale to hundreds of Shards that operate in tandem without loss of efficiency.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-2
                          variant="info"
                        >Speed of Transactions</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-2"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Transactions on Tagion are validated in between two or three seconds, placing it on par with major credit card operators in terms of validation speed.</p>
                            <p>A fast validation time is reached through the use of Hashgraph for consensus and an efficient (Patent Pending) gossip Mechanism. The Hashgraph algorithm and the accompanying mathematical proof was initially discovered by Leemon Baird. </p>
                            <p>The algorithm ensures that all nodes, infinite time, reach the same order of events - as long as more than two-thirds of the nodes in the network follow the same consensus rules. In doing so, the nodes confirm and validate any action on the network, such as a money transfer, money exchange, or data interactions.</p>
                            <p>The gossip mechanisms optimise data exchange between nodes to happen most efficiently.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-3
                          variant="info"
                        >Storage and Computational Power</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-3"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Most DLTs use a decentralised, immutable database for storage. The blockchain data structure is immutable, meaning all data should be stored forever. </p>
                            <p>Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions) gives away with immutability, and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size. The innovation in terms of data utilisation is, however, that once a bill becomes irrelevant, it is deleted, rather than kept forever.</p>
                            <p>The mechanism transforms an exponential workload into a linear workload, which saves vast amounts of CPU power.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-4
                          variant="info"
                        >Scalability</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-4"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Combining Tagion DEX with DART provides Tagion with the speed and scalability needed to become an underlying network for any and all everyday financial services.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-5
                          variant="info"
                        >Market Liquidity</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-5"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Better market liquidity results in a more efficient market. With Tagions as an intermediate currency, it is possible to exchange all tokenised currencies seamlessly. By pairing all alien currencies with Tagions, the resulting reduction of currency pairs enables a simpler market with higher liquidity.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-6
                          variant="info"
                        >Algorithmically Controlled Dynamic Monetary Policy</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-6"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>In general, to keep the market stable, a simple modelling of the use of money must be based on internal variables, such as the velocity of money (total velocity of Tagions), adoption level, supply of money, average transaction sizes and more.</p>
                            <p>The model can be used as a measure for demand on liquidity and be the basis for the addition or removal of money, to keep the market stable.</p>
                            <p>The system burns money after each transaction and all fees. Rewards are given to nodes, when consensus is reached. If the reward sums up to more than the burned fees, there is a money increase in the system, and the sum is lower than the burned fees, the opposite is true, i.e. a money decrease.</p>
                            <p>These features enable the world's first genuine decentralised exchange: Tagion DEX. With Tagion DEX it will be possible to seamlessly pay in all cryptos and FIAT's with a simple swipe.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content lcontainer__story-content--singlecolumn">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Significant What</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <div class="lcontainer__story-content-singlecolumn">
                      <p>Tagion is a decentralised and permissionless banking network – run and owned by its users. Its genuinely fair and democratic governance model builds on the ideas and design principles of Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom. Tagion is self-sustainable and seen as a common resource that lets developers create new financial markets with a few clicks.</p>
                      <p>The elastic money supply and absence of a hard cap keep the value of the network tokens stable - and in time – Tagion will be a trustless, algorithmically controlled monetary system, that keeps the token price stable. Given all developers, the possibility of creating a more sustainable economic world.</p>
                    </div>
                  </reveal>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story lcontainer--story-last">
                <reveal class="lcontainer__headline lcontainer__story-content lcontainer__story-content--multicolumn">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Practical Where</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <div class="lcontainer__story-content-multicolumn">
                      <p>Tagion is a universal token protocol that acts as the backbone for almost any transaction-based service such as C2C cross-border payments and daily micro-transactions and seamlessly exchange between all tokenised currencies.</p>
                      <p>Finally, Tagion is a vital aid for solving United Nations Sustainable Development Goal 10.c: by 2030, reduce to less than 3% the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5%</p>
                    </div>
                  </reveal>
                </reveal>
              </b-container>
            </div>
          </div>
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
        </div>-->

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
                    <section class="year year--future">
                      <h3>2020</h3>
                      <section>
                        <h4>June</h4>
                        <ul>
                          <li>Launch of open test network.</li>
                        </ul>
                      </section>
                      <section>
                        <h4>Q3</h4>
                        <ul>
                          <li>Open-sourcing the Tagion Core library.</li>
                          <li>β-launch of the Tagion Network.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year year--future">
                      <h3>2021</h3>
                      <section>
                        <h4>Q1</h4>
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
            <reveal class="lcontainer__headline">
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
          </b-container>
        </div>
        <div class="lcontainer-wrapper">
          <b-container class="lcontainer ">
            <b-row>
              <b-col
                cols="12"
                lg="8"
              >
                <reveal class="lcontainer__headline pr-6">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>Tagion is Committed to Transparency</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <p>We are fully committed to transparency. Tagion partners up with TrustedIn Trading, the platform to ensure responsibility and transparency in the wild world of cryptocurrency startups.</p>
                  </reveal>
                  <reveal
                    child
                    direction="right"
                    opacity
                    :delay="500"
                    class="mt-4"
                  >
                    <brand-button
                      href="https://www.trustedintrading.com/profile/tagion/"
                      @click="$analytics.triggerEvent({category: 'Exploration', action: 'TrustedInTrading', fields: {placement: 'Landing'}})"
                      reveal
                      target="_blank"
                      rel="dofollow"
                    >See Tagion on TrustedIn Trading</brand-button>
                  </reveal>
                </reveal>
              </b-col>
              <b-col
                cols="12"
                lg="4"
                class="mt-8 mt-lg-0 text-center"
              >
                <reveal
                  direction="left"
                  opacity
                  :delay="300"
                >
                  <img
                    width="120"
                    src="/partners/trustedintrading.png"
                  />
                </reveal>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </reveal-group>
      <!-- <div class="team-card-modal" :class="{'team-card-modal--visible': selectedTeamMember}">
        <div class="team-card-modal__card" v-if="selectedTeamMember">
           <img
          loading="lazy"
          class="lazy"
          width="100"
          :data-src="selectedTeamMember.image"
        />
        </div>
      </div> -->
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
import { teamMembers } from "@theme/data";

export default {
  data() {
    return {
      teamMembers,
      selectedTeamMember: undefined
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
    News
  },
  methods: {
    openTeamCard(teamMember) {
      this.selectedTeamMember = teamMember;
    },
    closeTeamCard() {
      this.selectedTeamMember = false;
    }
  }
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
