<template>
  <b-card
    tag="article"
    class="b-card-nodelist mx-4 my-5 pt-2"
  >
    <b-card-text class="b-card-text-nodelist px-4 py-2">
      <div class='title-nodelist'>Nodelist</div>
      <div v-for="item in items" v-on:click="select($event)">
        <span class="pr-2"> {{ item.name }} </span>
        <span class="pl-2"> {{ item.status }} </span>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'NodeList',
  data() {
    return {
      items: [
        { name: 'node1', status: 'active' },
        { name: 'node2', status: 'inactive' },
        { name: 'node3', status: 'inactive' },
        { name: 'node4', status: 'active' },
        { name: 'node1', status: 'active' },
        { name: 'node2', status: 'inactive' },
        { name: 'node3', status: 'inactive' },
        { name: 'node4', status: 'active' },
      ],
    };
  },
  methods: {
    select: function($event) {
      console.log(event.target.textContent);
    }
  },
};
</script>

<style>
  .b-card-nodelist {
    max-width:100%;
    border-radius: 5px;
    background-color: #f5f7fb;
    overflow: hidden;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
  }

  .b-card-text-nodelist {
    text-align: left;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    text-transform: lowercase;
  }

  .title-nodelist {
    text-transform: uppercase;
    text-align: center;
  }
</style>