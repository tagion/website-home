<template>
  <b-card
    tag="article"
    class="testnet-card testnet-card--nodelist"
  >
    <h2>AlphaOne Status</h2>

    <div
      v-for="item in items"
      v-on:click="select($event)"
      class="node-item"
    >
      <span class="pr-2"> {{ item.name }} </span>
      <span class="pl-2"> {{ item.status }} </span>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "NodeList",
  data() {
    return {
      items: [
        { name: "node1", status: "active" },
        { name: "node2", status: "inactive" },
        { name: "node3", status: "inactive" },
        { name: "node4", status: "active" },
        { name: "node1", status: "active" },
        { name: "node2", status: "inactive" },
        { name: "node3", status: "inactive" },
        { name: "node4", status: "active" },
      ],
    };
  },
  methods: {
    select: function ($event) {
      console.log(event.target.textContent);
    },
  },
};
</script>