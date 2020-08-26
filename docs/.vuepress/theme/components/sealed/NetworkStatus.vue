<template>
  <b-card
    tag="article"
    class="testnet-card testnet-card--status"
  >
    <h2>AlphaOne Network Status</h2>
    <div class="network-status">
      adsf
    </div>
  </b-card>
</template>

<script>
export default {
  name: "NodeList",
  data() {
    return {
      allNodes: 50,
      activeNodes: 8,
      startDate: Date.now()
    };
  },
  methods: {
    select: function ($event) {
      console.log(event.target.textContent);
    },
  },
};
</script>