<template>
  <div>
    <b-form
      :novalidate="true"
      :validated="validation"
      @submit.native.prevent="onSubmit"
      @keydown.native.enter="onSubmit"
      v-on:submit.prevent="onSubmit"
      class="t-form"
    >
      <!-- <b-form-text text-variant="muted" class="pb-1">Don't miss important updates:</b-form-text> -->
      <b-input-group size="sm" pill>
        <b-input
          class="email-field"
          type="email"
          :value="email"
          :disabled="inputDisabled"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          :state="validation"
          @input="value => onInput(value)"
          required
        />
        <div class="input-group-append">
          <b-button
            variant="secondary"
            :type="!inputDisabled ? 'submit' : ''"
            :class="{disabled: inputDisabled}"
            :disabled="inputDisabled"
            aria-label="Subscribe"
          >
            <span v-if="emailProgress">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span class="d-none d-md-inline">Subscribing...</span>
            </span>
            <span v-else>
              <span class="fas fa-envelope"></span>
              <span class>Subscribe</span>
            </span>
          </b-button>
        </div>
      </b-input-group>
      <b-form-text text-variant="danger" v-if="!emailSent">{{emailError}}&nbsp;</b-form-text>
      <b-form-text text-variant="success" v-if="emailSent">Verification code is sent to your email.</b-form-text>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailProgress: false,
      emailSent: false,
      emailError: ""
    };
  },
  computed: {
    inputDisabled() {
      return this.emailSent || this.emailProgress;
    },
    validation() {
      return !this.email ? null : this.validateEmail(this.email);
    }
  },
  methods: {
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    onInput(value) {
      this.email = value;
      if (!value) {
        this.emailError = "";
      } else if (!this.validateEmail(value)) {
        this.emailError = "Please, enter valid email address.";
      } else {
        this.emailError = "";
      }
    },
    async onSubmit() {
      if (this.validation) {
        try {
          this.emailProgress = true;
          await this.$http.post("http://localhost:4501/action/subscribe", {
            email: this.email
          });

          this.emailSent = true;
          this.emailError = "";
          this.emailProgress = false;
        } catch (e) {
          this.emailProgress = false;
          this.emailError = e.message;
        }
      } else {
        this.emailError = "Please, enter valid email address.";
      }
    }
  }
};
</script>
