<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <reveal-group class="landing">
        <div class="hero">
          <div class="hero__background"></div>
          <b-container class="lcontainer">
            <div class="hero__quote" child opacity direction="up">
              <h2>
                <span>Universal Token Protocol</span>
              </h2>
            </div>
            <div class="hero__summary" child opacity direction="up">
              <p>Inclusive. Elastic. Decentralized. Scalable.</p>
            </div>
            <div class="hero__details">
              <div class>
                <a
                  href="https://www.reddit.com/r/Tagion/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="btn btn-reddit btn-social mt-3"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="reddit-alien"
                    class="svg-inline--fa fa-reddit-alien fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
                    />
                  </svg>Discuss on Subreddit
                </a>
                <a
                  href="https://t.me/TagionChat/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="btn btn-telegram btn-social  mt-3"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="telegram-plane"
                    class="svg-inline--fa fa-telegram-plane fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                    />
                  </svg>Chat on Telegram
                </a>
              </div>

              <!-- <div>
                <div child opacity direction="down">
                  <small class="hero__join-note">Get all the important updates first:</small>
                  <newsletter-form />
                </div>
              </div>-->
            </div>

            <div class="hero__cards feature-cards feature-cards--four">
              <div class="feature-card">
                <div child opacity direction="left">
                  <div class="feature-card__internal">
                    <img src="/icons/dex.svg" />
                    <h4>Decentralized Exchange</h4>
                    <p>
                      Pay with anything anywhere. DEX is an open protocol that enables a trustless exchange of any digital currency that supports HTLC (Hash Time Locked Contract).
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
                      To scale properly, the money supply must match demand. Tagion does not have a hard cap, but makes use of elastic supply, which aims to create a stable price level.
                    </p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div child opacity direction="left">
                  <div class="feature-card__internal">
                    <img src="/icons/governance.svg" />
                    <h4>Inclusive Governance</h4>
                    <p>Tagion and its resources are governed as a Common. All have equal right to participate, but it is the contribution which gives reward and power.</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div child opacity direction="left">
                  <div class="feature-card__internal">
                    <img src="/icons/scalability.svg" />
                    <h4>Scalable Core Technology</h4>
                    <p>Tagion builds on a modular and scalable core. Each module can be changed and optimised. Main modules are the distributed database, scripting engine, Hashgraph and gossip mechanism. </p>
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
                  <reveal child direction="up" opacity>
                    <h2>The Big Why</h2>
                  </reveal>
                  <reveal child direction="up" opacity :delay="200">
                    <p>The world has too many financial (and physical) borders. Tagion was born to break down those borders and enable seamlessly peer-to-peer money transfers. Cheap, quick, fair, and fast for anyone anywhere.</p>
                  </reveal>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content">
                  <reveal child direction="up" opacity>
                    <h2>The Inquiring How</h2>
                  </reveal>
                  <reveal child direction="up" opacity :delay="200">
                    <p>Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.</p>
                  </reveal>
                </reveal>
                <reveal :delay="300" class="lcontainer__story-cards-wrapper">
                  <div role="tablist">
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-1
                          variant="info"
                        >Network Throughput</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                            <p>Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second per shard. In comparison, VISA does around 1,700 transactions per second on average.</p>
                            <p>Tagion is architected to be able to scale to hundreds of Shards that operate equally fast in parallel.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-2
                          variant="info"
                        >Speed of Transactions</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                            <p>Transactions on Tagion are validated in two to three seconds, putting it on par with VISA in terms of validation speed.</p>
                            <p>The fast validation time is reached by the use of hashgraph for consensus and an efficient patent-pending gossip mechanism. The hashgraph algorithm and the accompanying mathematical proof was discovered by Leemon Baird.</p>
                            <p>The algorithms ensure that all nodes, infinite time, reach the same order of events - as long as more than two-thirds of the nodes in the network follow the same consensus rules. In doing so, the nodes confirm and validate any action on the network, such as a money transfer, money exchange, or data interactions.</p>
                            <p>The gossip mechanisms optimise data exchange between nodes to happen most efficiently.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-3
                          variant="info"
                        >Storage and Computational Power</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                            <p>Most DLTs uses a decentralised immutable database for storage. The blockchain data structure is immutable, meaning all data should be stored forever.</p>
                            <p>Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions) gives away with immutability, and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size. The innovation in terms of data utilisation is, however, that once a bill becomes irrelevant, it is deleted, rather than kept forever.</p>
                            <p>The mechanism transforms an exponential workload into a linear workload, which saves vast amounts of CPU power.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-4
                          variant="info"
                        >Scalability</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                            <p>Combining Tagion DEX with DART provides Tagion with the speed and scalability needed to become the underlying network for all everyday financial services.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-5
                          variant="info"
                        >Market Liquidity</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>
                            <p>A better market liquidity results in efficient markets. With Tagions as intermediate currency, it is possible to exchange all tokenised currencies seamlessly. By pairing all alien currencies with Tagions the resulting reduction of currency pairs enables a simpler market with higher liquidity.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-6
                          variant="info"
                        >Algorithmically Controlled Dynamic Monetary Policy</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
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
                <reveal
                  class="lcontainer__headline lcontainer__story-content lcontainer__story-content--singlecolumn"
                >
                  <reveal child direction="up" opacity>
                    <h2>The Significant What</h2>
                  </reveal>
                  <reveal child direction="up" opacity :delay="200">
                    <div class="lcontainer__story-content-singlecolumn">
                      <p>Tagion is a decentralised and permissionless banking network – run and owned by its users. Its genuinely fair and democratic governance model builds on the ideas and design principles of Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom. Tagion is self-sustainable and seen as a common resource that lets developers create new financial markets with a few clicks.</p>
                      <p>The elastic money supply and absence of a hard cap keep the value of the network tokens stable - and in time – Tagion will be a thrust less monetary system with an algorithmically controlled dynamic monetary supply. Given all developers, the possibility of creating a more sustainable economic world.</p>
                    </div>
                  </reveal>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story lcontainer--story-last">
                <reveal
                  class="lcontainer__headline lcontainer__story-content lcontainer__story-content--multicolumn"
                >
                  <reveal child direction="up" opacity>
                    <h2>The Practical Where</h2>
                  </reveal>
                  <reveal child direction="up" opacity :delay="200">
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
            <reveal class="lcontainer__headline" :delay="400">
              <reveal child direction="up" opacity>
                <h2>Technical Paper</h2>
              </reveal>
              <reveal child direction="up" opacity :delay="200">
                <p>DEX Protocol. Hashgraph Consensus. DART Database. Inclusive Governance.</p>
              </reveal>
              <reveal child direction="right" opacity :delay="500" class="mt-4">
                <brand-button
                  href="/tagiontechpaper.pdf"
                  target="_blank"
                  variant="down"
                  @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                  reveal
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

        <div class="lcontainer-wrapper mt-10">
          <b-container class="lcontainer lcontainer--roadmap">
            <b-row>
              <b-col cols="12" xl="5" class="d-flex align-items-center">
                <reveal class="lcontainer__headline">
                  <reveal child direction="up" opacity>
                    <h2>Tagion Roadmap</h2>
                  </reveal>
                  <reveal child direction="up" opacity :delay="200">
                    <p>
                      The team behind Tagion has spent a significant amount of time, funding itself, while building core components: Hashgraph, Gossip protocol,
                      DART database, HiBON data format, the underlying API and more.
                    </p>
                    <p>We keep implementing new functionality and getting closer to the major milestone, where we can open-source the Tagion project and launch the main network.</p>
                  </reveal>
                  <reveal child direction="right" opacity :delay="800">
                    <brand-button
                      reveal
                      to="/community/roadmap.html"
                      class="mt-5"
                    >See Detailed Roadmap</brand-button>
                  </reveal>
                </reveal>
              </b-col>
              <b-col cols="12" xl="7" class="mt-8 mt-xl-0 d-none d-md-block">
                <reveal opacity direction="up" :delay="700">
                  <img class="lcontainer--roadmap__roadmap" src="/timeline.svg" />
                </reveal>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white mb-10">
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
        <div class="lcontainer-wrapper">
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
                      href="https://www.trustedintrading.com/profile/tagion/"
                      @click="$analytics.triggerEvent({category: 'Exploration', action: 'TrustedInTrading', fields: {placement: 'Landing'}})"
                      reveal
                      target="_blank"
                      rel="dofollow"
                    >See Tagion on TrustedIn Trading</brand-button>
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
      </reveal-group>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import RevealGroup from "@theme/components/landing/RevealGroup";
// import WhitePaper from "@theme/components/WhitePaper";
// import Roadmap from "@theme/components/Roadmap";
import BrandButton from "@theme/components/BrandButton";
import SocialButtons from "@theme/components/SocialButtons";
import DownloadBrandButton from "@theme/components/DownloadBrandButton";
import NewsletterForm from "@theme/components/NewsletterForm";
import TeamCard from "@theme/components/landing/TeamCard";
import Reveal from "@theme/components/landing/Reveal";
import News from "@theme/components/landing/News";

import { isMobile } from "@theme/util";
import { teamMembers } from "@theme/data";

export default {
  data() {
    return {
      teamMembers
    };
  },
  components: {
    LayoutDefault,
    RevealGroup,
    WhitePaper: () => import("@theme/components/WhitePaper"),
    Roadmap: () => import("@theme/components/Roadmap"),
    BrandButton,
    DownloadBrandButton,
    SocialButtons,
    NewsletterForm,
    TeamCard,
    Reveal,
    News
  }
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
