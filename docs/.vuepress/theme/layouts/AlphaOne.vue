<template>
  <layout-default
    class="landing-page testnet-page"
    id="landing-page"
  >
    <template slot="root-content">

      <div class="container-wrapper">
        <b-container
          class="container py-4"
          v-if="isConnected"
        >
          <b-row class="d-flex justify-content-lg-between">
            <b-col
              cols="12"
              lg="5"
              class="px-3"
            >

              <NetworkStatus :hosts="hosts" />
              <NodeList
                @select="onNodeSelect"
                :hosts="hosts"
                :selected="selectedHost"
              />
            </b-col>

            <b-col
              cols="12"
              lg="7"
              class="px-3 px-lg-0"
            >

              <Hashgraph
                :isSubscribed="isSubscribed"
                :address="selectedHost"
                :isConnected="this.hosts[selectedHost] || false"
              />

              <b-card
                tag="article"
                class="testnet-card"
              >
                <h2>About Monitor</h2>
                <b-card-text style='text-align: left;'>
                  Tagion AlphaOne comes with a monitor function, which lets you better understand how the AlphaOne network is operating, The monitor provides useful information such as network status, active nodes, and a hashgraph showing recent network communication and event ordering between nodes.
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
        <b-container
          class="container py-4"
          v-else
        >
          <div class="not-connected">
            <div>Not connected to Tagion AlphaOne Monitor</div>
            <div class="text-muted">Please, refresh this page in 2 minutes</div>
          </div>
        </b-container>
      </div>

    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/layout/LayoutDefault";
import BrandButton from "@theme/components/sealed/BrandButton";
import SocialButtons from "@theme/components/sealed/SocialButtons";
import DownloadBrandButton from "@theme/components/sealed/DownloadBrandButton";
import NewsletterForm from "@theme/components/sealed/NewsletterForm";
import TeamCard from "@theme/components/sealed/TeamCard";
import News from "@theme/components/sealed/News";

import { isMobile } from "@theme/util";
import NodeList from "../components/sealed/NodeList";
import Hashgraph from "../components/sealed/Hashgraph";
import TokenForm from "../components/sealed/TokenForm";
import NetworkStatus from "../components/sealed/NetworkStatus";

export default {
  data() {
    return {
      isConnected: false,
      isSubscribed: false,
      hosts: {},
      selectedHost: "",
      socketTimeout: undefined,
    };
  },
  components: {
    LayoutDefault,
    BrandButton,
    SocialButtons,
    NodeList,
    Hashgraph,
    TokenForm,
    NetworkStatus,
  },
  mounted() {
    this.connectSocket();
  },
  beforeDestroy() {
    this.clearTimeoutSocket();
  },

  methods: {
    connectSocket() {
      this.$socket.emit("nodesInit", {}, this.onNodesInit.bind(this));
      this.sockets.subscribe("nodesUpdate", this.onNodesUpdate.bind(this));
      // this.clearTimeoutSocket();

      // this.socketTimeout = setTimeout(() => {
      // }, 100);
    },
    clearTimeoutSocket() {
      if (this.socketTimeout) {
        clearTimeout(this.socketTimeout);
      }
    },
    onNodeSelect(host) {
      this.selectNode(host);
    },
    selectNode(ip) {
      this.selectedHost = ip;
    },
    onNodesInit(data) {
      this.isConnected = true;
      this.hosts = data;
      let keys = Object.keys(this.hosts);
      if (!this.selectedHost) this.selectNode(keys[0]);
    },
    onNodesUpdate(data) {
      this.hosts = data;
    },
  },
};
</script>

<style src="../styles/landing.scss" lang="scss"></style>
<style src="../styles/testnet.scss" lang="scss"></style>
