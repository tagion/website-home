<template>
  <layout-default
    class="landing-page testnet-page"
    id="landing-page"
  >
    <template slot="root-content">

        <div class="container-wrapper">
          <b-container class="container py-4">
            <b-row class="d-flex justify-content-lg-between">
              <b-col
                cols="12"
                lg="6"
                class="px-3"
              >
                  <TokenForm />
              </b-col>

              <b-col
                cols="12"
                lg="6"
                class="px-3 px-lg-0"
              >
              </b-col>
            </b-row>
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
    return {};
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
  methods: {},
};
</script>

<style src="../styles/landing.scss" lang="scss"></style>
<style src="../styles/testnet.scss" lang="scss"></style>
