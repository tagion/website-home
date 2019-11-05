<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="hero" scroll-reveal>
          <b-container class="lcontainer lcontainer--hero">
              <div
                class="parallax-element parallax-element--fast hero__background"
                data-parallax-factor="0.12"
              ></div>
            <div class="parallax-element parallax-element--fast" data-parallax-factor="-0.03">
              <div class="hero__quote">
                <h2
                  scroll-reveal-child
                  scroll-reveal-up
                  scroll-reveal-opacity
                  data-reveal-delay="200"
                >
                  <span class="hero__quote-muted">&nbsp;Creating A</span>
                  <br />
                  <span class="hero__quote-accent">&nbsp;Sustainable</span>
                  <br />
                  <span class="hero__quote-muted">&nbsp;Economic</span>
                  <br />
                  <span class="hero__quote-muted">&nbsp;World</span>
                </h2>
              </div>
              <div
                class="hero__details"
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="400"
              >
                <p
                  class="parallax-element parallax-element--fast"
                  data-parallax-factor="-0.02"
                >Peer-to-peer cryptocurrency, governed by its users. Designed for adoption on a massive scale.</p>

                <div
                  class="hero__buttons mt-5 parallax-element parallax-element--fast"
                  data-parallax-factor="0.02"
                >
                  <div
                    class="hero__button-wrapper hero__button-wrapper--social"
                    scroll-reveal-child
                    scroll-reveal-up
                    scroll-reveal-opacity
                    data-reveal-delay="350"
                  >
                    <social-buttons light />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hero__button-wrapper hero__button-wrapper--learn-more"
              scroll-reveal-child
              scroll-reveal-up
              scroll-reveal-opacity
              data-reveal-delay="850"
            >
              <download-brand-button
                bottom
                href="#starter-section"
                v-scroll-to="{
                        el: '#starter-section',
                        duration: 1000,
                        offset: -50,
                      }"
              >Learn More</download-brand-button>
            </div>
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
              >Tagion is a monetary system with revolutionary protocols that have the potential to replace legacy banking systems and trigger a paradigm shift in the current financial ecosystem.</p>
            </div>
            <div class="feature-cards" scroll-reveal data-reveal-delay="200">
              <a
                class="feature-card feature-card--c1"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                <div class="feature-card__internal">
                  <h4>Fast Transactions</h4>
                  <p>Tagion secures fast, private, cheap and uncensored transactions.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/#inflation-control"
                class="feature-card feature-card--c2"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="200"
              >
                <div class="feature-card__internal">
                  <h4>Money Supply Control</h4>
                  <p>In Tagion algorithms function as money supply oracles that control the supply, based on intrinsic variables.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/#cash-anonymity"
                class="feature-card feature-card--c3"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="300"
              >
                <div class="feature-card__internal">
                  <h4>Anonymous Payments</h4>
                  <p>Digital bills are stored in the database, one record per bill. Ownership is unknown. There are no accounts in the system, only bills. Therefore it's much harder to trace.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/#multi-currency"
                class="feature-card feature-card--c4"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="400"
              >
                <div class="feature-card__internal">
                  <h4>Decentralized Crypto Exchange</h4>
                  <p>DEX allows everyone to make exchanges between supported cryptocurrencies with no mediator.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/#sharding-by-default"
                class="feature-card feature-card--c5"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="500"
              >
                <div class="feature-card__internal">
                  <h4>Node Runs on a Laptop</h4>
                  <p>The hashgraph consensus mechanism, DART, and the lean script executions allow Tagion to operate on low powered commodity hardware, such as smartphones.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/#governed-by-users"
                class="feature-card feature-card--c6"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="600"
              >
                <div class="feature-card__internal">
                  <h4>Owned and Governed by Users</h4>
                  <p>Tagion utilises what is dubbed the Proof-of-People protocol, a heuristic social protocol based on random validation and social components, to achieve a democratic principle of “one person – one node” and “one person – one vote”.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
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
                    to="/wiki/development/roadmap.html"
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

        <div class="lcontainer-wrapper lcontainer-wrapper--grey">
          <b-container class="lcontainer lcontainer--bulletpoints">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">3.</span>Built for Scale
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >Tagion solves many of the issues found in other major cryptocurrency networks.</p>
            </div>
            <div class="feature-cards" scroll-reveal data-reveal-delay="200">
              <a
                to="/wiki/architecture/hashgraph.html"
                class="feature-card feature-card--c6"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                <div class="feature-card__internal">
                  <h4>Hashgraph</h4>
                  <p>Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second per Shard. Tagion is architected to be able to scale to hundreds of Shards that operate equally fast in parallel.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/architecture/proof-of-people.html"
                class="feature-card feature-card--c3"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="200"
              >
                <div class="feature-card__internal">
                  <h4>Proof of People</h4>
                  <p>Tagion reputational scoring model and proof-of-people protocol incentivise nodes to serve the network loyally. This approach leapfrogs the governance mechanisms in other ‘decentralised’ systems.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
              <a
                to="/wiki/development/open-source.html"
                class="feature-card feature-card--c2"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="300"
              >
                <div class="feature-card__internal">
                  <h4>Open Source</h4>
                  <p>The Tagion network will eventually be open-sourced. The open-source license type is not fully determined yet, but it will be along the lines of GNU GPL.</p>
                  <!-- <p class="feature-card__read-more">Read more</p> -->
                </div>
              </a>
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

        <div class="lcontainer-wrapper lcontainer-wrapper--grey">
          <b-container class="lcontainer">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="50">
                <span class="lcontainer__headline__number">4.</span>Latest from Tagion
              </h2>
            </div>
            <div class="mt-6">
              <div scroll-reveal scroll-reveal-up scroll-reveal-opacity data-reveal-delay="300">
                <div
                  id="medium-widget"
                  class="lcontainer__medium-widget"
                  :class="{'lcontainer__medium-widget--loaded': isMediumLoaded}"
                >
                  <div class="lcontainer__spinner">
                    <spinner />
                  </div>
                </div>
              </div>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white">
          <b-container class="lcontainer lcontainer--team">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">5.</span>Team
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >Learn more about trully dedicated team behind Tagion.</p>
            </div>
            <div class="team-table" scroll-reveal scroll-reveal-opacity>
              <b-row>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="300"
                  >
                    <router-link
                      to="/wiki/development/team.html#theis-simonsen"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/ts.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Theis Simonsen
                              <br />
                              <span class="team-table__card-position">CEO, Co-founder</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="400"
                  >
                    <router-link
                      to="/wiki/development/team.html#carsten-bleser-rasmussen"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/cr.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Carsten Bleser Rasmussen
                              <br />
                              <span class="team-table__card-position">CTO, Co-founder</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="500"
                  >
                    <router-link
                      to="/wiki/development/team.html#kristian-vestergaard"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/kv.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Kristian Vestergaard
                              <br />
                              <span class="team-table__card-position">CCO, Co-founder</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>

                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="600"
                  >
                    <router-link
                      to="/wiki/development/team.html#tobias-ambs-thomsen"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/ta.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Tobias Ambs-Thomsen
                              <br />
                              <span class="team-table__card-position">Chief Communications Director</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="700"
                  >
                    <router-link
                      to="/wiki/development/team.html#vlad-pazych"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/vp.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Vlad Pazych
                              <br />
                              <span class="team-table__card-position">Digital Marketing Manager</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="800"
                  >
                    <router-link
                      to="/wiki/development/team.html#oleksandr-sushko"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/as.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Oleksandr Sushko
                              <br />
                              <span class="team-table__card-position">System Engineer</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="900"
                  >
                    <router-link
                      to="/wiki/development/team.html#oksana-perederii"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/op.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Oksana Perederii
                              <br />
                              <span class="team-table__card-position">Marketer & Office Manager</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="1000"
                  >
                    <router-link
                      to="/wiki/development/team.html#leif-bloch-rasmussen"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/lr.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Leif Bloch Rasmussen
                              <br />
                              <span class="team-table__card-position">Economic Governance Advisor</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="1100"
                  >
                    <router-link
                      to="/wiki/development/team.html#richard-kastelein"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/kastalein.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Richard Kastelein
                              <br />
                              <span class="team-table__card-position">Copywriter, Advisor</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="1200"
                  >
                    <router-link
                      to="/wiki/development/team.html#shane-mcquillan"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/shane.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Shane McQuillan
                              <br />
                              <span class="team-table__card-position">Project Manager</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="1300"
                  >
                    <router-link
                      to="/wiki/development/team.html#sam-kawtharani"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/sam.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Sam Kawtharani
                              <br />
                              <span class="team-table__card-position">Project Manager</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="1400"
                  >
                    <router-link
                      to="/wiki/development/team.html#michael-harboe"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/harboe.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Michael Harboe
                              <br />
                              <span class="team-table__card-position">Strategic Advisor</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="4">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="1500"
                  >
                    <router-link
                      to="/wiki/development/team.html#michel-avital"
                      class="team-table__card"
                    >
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img src="/team/avital.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Michel Avital
                              <br />
                              <span class="team-table__card-position">External Advisor</span>
                            </h5>
                            <p class="team-table__card-read-more">Read more</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container
            class="lcontainer lcontainer--bluebg lcontainer--illustrated lcontainer--community"
          >
            <div class="lcontainer__illustrations" scroll-reveal data-reveal-delay="100">
              <div
                class="lcontainer__illustration lcontainer__illustration--single"
                scroll-reveal-child
                scroll-reveal-up
                scroll-reveal-opacity
              >
                <div class="parallax-element-group">
                  <div class="parallax-element parallax-element--1" data-parallax-factor="-0.05">
                    <img src="../../public/l-conversation-1.svg" />
                  </div>
                  <div class="parallax-element parallax-element--2" data-parallax-factor="0.02">
                    <img src="../../public/l-conversation-2.svg" />
                  </div>
                  <div class="parallax-element parallax-element--3" data-parallax-factor="-0.08">
                    <img src="../../public/l-conversation-3.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="lcontainer__headline" scroll-reveal data-reveal-delay="100">
              <h2
                class="line-4"
                scroll-reveal-child
                scroll-reveal-up
                scroll-reveal-opacity
                data-reveal-delay="0"
              >Join the Conversation!</h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >Tagion is a community-centric project and is still in its early days. Join to participate in discussions, suggest ideas, contribute. You are an essential part of Tagion!</p>
              <div
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="350"
                class="mt-4"
              >
                <social-buttons light />
              </div>
            </div>
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
import Spinner from "@theme/components/Spinner";
import * as throttle from "lodash.throttle";

export default {
  data() {
    return {
      parallaxElements: [],
      revealElements: [],
      layoutElement: undefined,
      isMediumLoaded: false
    };
  },
  components: {
    LayoutDefault,
    WhitePaper,
    Roadmap,
    BrandButton,
    DownloadBrandButton,
    SocialButtons,
    Spinner
  },
  mounted() {
    this.initMediumScript();
    this.initMedium();
    this.layoutElement = document.getElementById("landing-page");
    this.parallaxElements = Array.from(
      document.getElementsByClassName("parallax-element")
    );
    this.revealElements = Array.from(
      document.querySelectorAll("[scroll-reveal]")
    );
    window.addEventListener("scroll", this.throttleParallax);
    window.addEventListener("scroll", this.throttleReveal);

    this.handleReveal();
    this.throttleParallax();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleParallax);
    window.removeEventListener("scroll", this.throttleReveal);
  },
  methods: {
    throttleParallax: throttle(function() {
      this.handleParallax();
    }, 20),
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
          if (element.dataset.parallaxCache != parallaxTranslate && Math.abs(parallaxTranslate) < 300) {
            element.style.transform = `translateY(${parallaxTranslate}px)`;
            element.dataset.parallaxCache = parallaxTranslate;
          }
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
    },
    initMediumScript() {
      let el = document.createElement("script");
      el.src = "https://medium-widget.pixelpoint.io/widget.js";
      el.async = !0;
      document.head.appendChild(el);
    },
    initMedium() {
      if (!window.MediumWidget) {
        setTimeout(() => {
          this.initMedium();
        }, 1000);
        return;
      }

      window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/tagion",
          postsPerLine: 3,
          limit: 3,
          picture: "big",
          fields: ["description", "author", "publishAt"],
          ratio: "landscape"
        }
      });

      setTimeout(() => {
        this.isMediumLoaded = true;
      }, 500);
    }
  }
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
