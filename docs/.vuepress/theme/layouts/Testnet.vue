<template>
  <layout-default
    class="landing-page testnet-page"
    id="landing-page"
  >
    <template slot="root-content">
      <reveal-group class="landing">

        <div class="container-wrapper">
          <b-container class="container py-4">
            <b-row class="d-flex justify-content-lg-between">
              <b-col
                cols="12"
                lg="5"
                class="px-3"
              >
                <reveal
                  delay="50"
                  direction="up"
                  opacity
                >
                  <NodeList />
                </reveal>
                <reveal
                  delay="150"
                  direction="up"
                  opacity
                >
                  <TokenForm />
                </reveal>
              </b-col>

              <b-col
                cols="12"
                lg="7"
                class="px-3 px-lg-0"
              >
                <reveal
                  delay="100"
                  direction="up"
                  opacity
                >
                  <Hashgraph />
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
import NodeList from "../components/sealed/NodeList";
import Hashgraph from "../components/sealed/Hashgraph";
import TokenForm from "../components/sealed/TokenForm";

export default {
  data() {
    return {};
  },
  components: {
    LayoutDefault,
    RevealGroup,
    BrandButton,
    SocialButtons,
    Reveal,
    NodeList,
    Hashgraph,
    TokenForm,
  },
  methods: {},
};
</script>

<style src="../styles/landing.scss" lang="scss"></style>
<style src="../styles/testnet.scss" lang="scss"></style>
