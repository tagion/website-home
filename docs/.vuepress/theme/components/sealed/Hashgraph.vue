<template>
  <b-card
    tag="article"
    class="b-card-hashgraph mx-4 my-5 p-2"
  >
    <div class='title-hashgraph m-2'>Hashgraph</div>
    <b-card-text style='text-align: center;'>
      <canvas></canvas>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'Hashgraph',
};
</script>

<style>
  .b-card-hashgraph {
    max-width:100%;
    border-radius: 5px;
    background-color: #f5f7fb;
    text-align: center;
    overflow: hidden;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
    color: #494c4c;
  }

  .title-hashgraph {
    text-transform: uppercase;
    text-align: center;
  }
</style>