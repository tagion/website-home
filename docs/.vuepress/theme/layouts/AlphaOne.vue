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
            </b-col>
          </b-row>
        </b-container>
        <b-container
          class="container py-4"
          v-else
        >
          <div class="not-connected">
            <div>Not connected to Tagion AlphaOne Monitor</div>
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
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
  },
  mounted() {
    this.$socket.emit("nodesInit", {}, this.onNodesInit.bind(this));
    this.sockets.subscribe("nodesUpdate", this.onNodesUpdate.bind(this));
  },
  methods: {
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
    }
  },
};
</script>

<style src="../styles/landing.scss" lang="scss"></style>
<style src="../styles/testnet.scss" lang="scss"></style>
