<template>
  <b-card
    tag="article"
    class="testnet-card testnet-card--nodelist"
  >
    <h2>AlphaOne Active Nodes</h2>
    <div
      v-for="(status, key) in hosts"
      v-on:click="select(key)"
      class="node-item"
      :class="{'node-item--selected': key === selected}"
    >
      <span class="pr-2"> {{ key }} </span>
      <span class="pl-2"> {{status ? 'Monitor Connected' : 'Monitor Disconnected'}} </span>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "NodeList",
  props: {
    hosts: {
      type: Object,
    },
    selected: {
      type: String
    }
  },
  methods: {
    select: function (address) {
      this.$emit("select", address);
    },
  },
};
</script>