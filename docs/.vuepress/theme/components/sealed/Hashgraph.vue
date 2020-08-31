<template>
  <b-card
    tag="article"
    class="testnet-card"
  >
    <h2>Hashgraph - {{address}}</h2>
    <b-card-text style='text-align: center;'>
      <div class="hashgraph-visuals">
        <div
          id="hashgraph-visuals"
          ref="hashgraphVisuals"
          class="hashgraph-visuals__container"
        ></div>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
import Graph from "@theme/lib/graph.js";

export default {
  name: "Hashgraph",
  props: {
    address: {
      type: String,
    },
  },
  data() {
    return {
      queueInterval: null,
      oldIp: "",
      isSubscribed: false,
    };
  },
  updated() {
    if (this.oldIp !== this.address) {
      this.unsubscribe(this.oldIp);
      this.subscribe();
      this.oldIp = this.address;
    }
  },
  beforeDestroy() {
    this.unsubscribe();
    if (this.queueInterval) {
      clearInterval(this.queueInterval);
      this.queueInterval = null;
    }
  },
  mounted() {},
  methods: {
    subscribe() {
      this.unsubscribe();
      console.log("Subscribe to " + this.address);

      this.$socket.emit(
        "stateInit",
        `${this.address}_10900`,
        this.onDataInit.bind(this)
      );
      
      this.sockets.subscribe(`stateUpdate_${this.address}_10900`, this.onDataUpdate.bind(this)
        
      );

      this.isSubscribed = true;
    },
    unsubscribe(ip) {
      const unsubIp = ip || this.address;
      console.log("Unsubscribe from " + unsubIp);
      this.sockets.unsubscribe(`stateUpdate_${unsubIp}_10900`);

      if (this.queueInterval) {
        clearInterval(this.queueInterval);
        this.queueInterval = null;
      }

      this.isSubscribed = false;
    },
    onDataInit(data) {
      this.graph = new Graph(this.$refs.hashgraphVisuals, data);

      if (this.queueInterval) {
        clearInterval(this.queueInterval);
      }

      this.queueInterval = setInterval(
        this.graph.handleQueue.bind(this.graph),
        100
      );
    },
    onDataUpdate(data) {
      this.graph.onStateUpdate(data);
    },
  },
};
</script>

<style>
</style>