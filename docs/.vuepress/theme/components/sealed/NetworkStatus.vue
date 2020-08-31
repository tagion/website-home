<template>
  <b-card
    tag="article"
    class="testnet-card testnet-card--status"
  >
    <h2>AlphaOne Network Status</h2>
    <div class="network-status">
      <div class="status-item">
        <span class="pr-2"> All Nodes: </span>
        <span class="pl-2"> {{hostsAmount}} </span>
      </div>
      <div class="status-item">
        <span class="pr-2"> Connected to Monitor: </span>
        <span class="pl-2"> {{healthyHostsAmount}} </span>
      </div>
      <div class="status-item">
        <span class="pr-2"> Health: </span>
        <span class="pl-2"> {{hostsAmount < 1 ? 'Down' : (healthyHostsAmount >= 7 ? 'Healthy' : 'Critical')}} </span>
      </div>
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
  },
  computed: {
    hostsAmount() {
      if (this.hosts) {
        return Object.keys(this.hosts).length;
      }
      return 0;
    },
    healthyHostsAmount() {
      if (this.hosts) {
      
      let count = 0;
      for (let key in this.hosts) {
        if (this.hosts[key]) count++;
      }
      return count;
      }
    },
  },
  data() {
    return {
      allNodes: 50,
      activeNodes: 8,
      startDate: Date.now(),
    };
  },
  methods: {
    select: function ($event) {
      console.log(event.target.textContent);
    },
  },
};
</script>