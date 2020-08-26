<template>
  <b-card
    tag="article"
    class="b-card-token-form mx-4 my-5 p-2"
  >
    <b-card-text class="b-card-text-token-form">
      <div class="title-token-form m-2">Tagion Group Provider</div>

      <form
        id="token-form"
        @submit="saveFormValues"
      >

        <div class="text-left d-flex justify-content-center">
          <b-input
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Enter group tag name"
            style="width: 100%;"
            class="b-input-token-form mb-1"
          />
        </div>

        <div class="text-left d-flex justify-content-center">
          <b-input
            id="age"
            v-model="age"
            type="number"
            name="age"
            min="3"
            max='10'
            placeholder="Enter max nodes in group"
            style="width: 100%;"
            class="b-input-token-form mt-1"
          />
        </div>

        <div class="mt-3 d-flex justify-content-end align-items-center">
          <b-button
            type="submit"
            variant="primary"
            id='submit'
            class="mr-3 p-2"
            v-on:click="isHidden = false"
          >
            Submit
          </b-button>
        </div>

        <div class="d-flex flex-row justify-content-center align-items-center mt-4 ml-3 mr-3" v-if="!isHidden">
          <b-input type='text' class="b-input-token-form" id="testing-code" v-model="testingCode" style="width: 90%"/>

          <div type='text' id="copy-to-clipboard" class="d-flex flex-row justify-content-center align-items-center">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="svg clipboard pl-1"
              @click.stop.prevent="copyTestingCode"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="
                  M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2
                  0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2
                "
              >
              </path>
            </svg>
          </div>
        </div>

      </form>

    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'TokenForm',
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      testingCode: "1234", // get from api
      isHidden: true,
    }
  },
  methods: {
    saveFormValues: function(event) {
      event.preventDefault();
      console.log('name:', event.target.elements.name.value);
      console.log('age:', event.target.elements.age.value);
    },
    copyTestingCode () {
      console.log(`Testing code has been copied to clipboard`);
    },
  }
};
</script>

<style>
  .b-card-token-form {
    max-width:100%;
    border-radius: 5px;
    background-color: #f5f7fb;
    overflow: hidden;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
  }

  .b-card-text-token-form {
    text-align: center;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
  }

  .svg {
    width: 2rem;
    cursor: pointer;
  }

  .title-token-form {
    text-transform: uppercase;
    text-align: center;
  }

  .b-input-token-form {
    font-size: 0.75rem;
  }
</style>