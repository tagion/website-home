<template>
  <b-card
    tag="article"
    class="testnet-card"
  >
    <h2>Hashgraph - 123.341.22.11</h2>
    <b-card-text style='text-align: center;'>
      <div class="hashgraph-visuals">
        <div
          id="hashgraph-visuals"
          ref="hashgraphVisuals"
          class="hashgraph-visuals__container"
        ></div>
      </div>
      <button @click="subscribe">connect</button>
      <button @click="unsubscribe">disconnect</button>
      {{isConnected}}
      {{isSubscribed}}
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
      isConnected: true,
      isSubscribed: false,
      queueInterval: null,
    };
  },
  mounted() {
    // this.subscribe();
  },
  beforeDestroy() {
    this.unsubscribe();

    if (this.queueInterval) {
      clearInterval(this.queueInterval);
      this.queueInterval = null;
    }
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
  },
  methods: {
    subscribe() {
      this.unsubscribe();
      this.$socket.emit(
        "stateInit",
        "63.32.90.80:10900",
        this.onDataInit.bind(this)
      );
      this.sockets.subscribe(
        "stateUpdate_63.32.90.80:10900",
        this.onDataUpdate.bind(this)
      );

      this.isSubscribed = true;
    },
    unsubscribe() {
      this.sockets.unsubscribe("stateUpdate_63.32.90.80:10900");

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

      this.queueInterval = setInterval(this.graph.handleQueue.bind(this.graph), 1000);
    },
    onDataUpdate(data) {
      console.log(data)
      this.graph.onStateUpdate(data);
    },
  },
};
</script>

<style>
</style>