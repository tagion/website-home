<template>
  <b-card
    tag="article"
    class="testnet-card"
  >
    <h2>Tagion Group Provider</h2>

    <b-card-text>
      You can run a separate testnet, by creating a group and using a provided token.
    </b-card-text>
    <div class="px-1 py-2 pb-3">
      <form
        id="token-form"
        @submit="saveFormValues"
      >

        <div class="d-flex justify-content-center">
          <b-input
            id="name"
            v-model="name"
            type="text"
            name="name"
            size="sm"
            placeholder="Unique name"
            class="mx-2"
          />
          <b-input
            id="age"
            v-model="age"
            type="number"
            name="age"
            min="3"
            max='10'
            size="sm"
            placeholder="Max nodes"
            class="mx-2"
          />

          <b-button
            type="submit"
            variant="primary"
            id='submit'
            size="sm"
            class="mx-2 get-token-button"
            v-on:click="isHidden = false"
          >
            Get Token
          </b-button>
        </div>

        <div class="d-flex justify-content-center mt-3">
          <b-input-group
            prepend="unique name"
            size="sm"
            class="mx-2"
          >
            <b-input
              type="text"
              :disabled="true"
              value="1324"
              required
            />
            <div class="input-group-append">
              <b-button variant="secondary">
                <font-awesome-icon icon="copy" />
                </svg>
              </b-button>
            </div>
          </b-input-group>
          <!-- <b-input
            type='text'
            class="b-input-token-form"
            id="testing-code"
            v-model="testingCode"
            style="width: 90%"
          />

          <div
            type='text'
            id="copy-to-clipboard"
            class="d-flex flex-row justify-content-center align-items-center"
          >
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
            </svg> -->
        </div>

      </form>

    </div>
  </b-card>
</template>

<script>
export default {
  name: "TokenForm",
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      testingCode: "1234", // get from api
      isHidden: true,
    };
  },
  methods: {
    saveFormValues: function (event) {
      event.preventDefault();
      console.log("name:", event.target.elements.name.value);
      console.log("age:", event.target.elements.age.value);
    },
    copyTestingCode() {
      console.log(`Testing code has been copied to clipboard`);
    },
  },
};
</script>

<style>
.svg {
  width: 2rem;
  cursor: pointer;
}
</style>