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
    };
  },
  mounted() {
    this.graph = new Graph(this.$refs.hashgraphVisuals);
    
    this.subscribe();
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
        "localhost:10900",
        this.onDataInit.bind(this)
      );
      this.sockets.subscribe(
        "stateUpdate_localhost:10900",
        this.onDataUpdate.bind(this)
      );

      this.isSubscribed = true;
    },
    unsubscribe() {
      this.sockets.unsubscribe(
        "stateUpdate_localhost:10900",
        this.onDataUpdate
      );

      this.isSubscribed = false;
    },
    onDataInit(data) {
      console.log("result", data);
    },
    onDataUpdate(data) {
      this.graph.onStateUpdate(data);
    },
  },
};
</script>

<style>
</style>