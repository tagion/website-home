<template>
  <div>
    <b-form
      :novalidate="true"
      :validated="validation"
      @submit.prevent="onSubmit"
      @keydown.enter="onSubmit"
      v-on:submit.prevent="onSubmit"
      ref="newsletter-form"
      :action="formAction"
      :method="formAction ? 'post' : ''"
      :target="formAction ? '_blank' : ''"
      class="t-form"
      :class="{'t-form--dark': !!dark}"
    >
      <b-input-group size="sm" pill>
        <b-input
          class="email-field"
          type="email"
          :value="email"
          :disabled="inputDisabled"
          name="EMAIL"
          placeholder="Your Email"
          aria-label="Your Email"
          :state="validation"
          @input="value => onInput(value)"
          required
        />
        <div class="input-group-append">
          <b-button
            variant="primary"
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
              <span class>Join Newsletter</span>
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
  props: {
    dark: {
      type: Boolean
    }
  },
  data() {
    return {
      email: "",
      emailProgress: false,
      emailSent: false,
      emailError: "",
      formAction: undefined,
      startTypeRecorded: false
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
        this.setFormAction(true);
        this.emailError = "";
      } else if (!this.validateEmail(value)) {
        this.setFormAction(true);
        this.emailError = "Please, enter valid email address.";
      } else {
        this.setFormAction();
        this.emailError = "";
      }
      if (!this.startTypeRecorded) {
        this.$analytics.triggerEvent({
          category: "Newsletter",
          action: "StartRegistration"
        });
        this.startTypeRecorded = true;
      }
    },
    async onSubmit(event) {
      if (this.validation) {
        this.setFormAction();
        let submitForm = this.$refs["newsletter-form"];
        if (submitForm) {
          this.$analytics.triggerEvent({
            category: "Newsletter",
            action: "CompleteRegistration",
            fields: {
              email: this.email,
              currency: "USD",
              value: 1
            }
          });

          submitForm.submit();
        }
      } else {
        event.preventDefault();
        this.setFormAction(true);
        this.emailError = "Please, enter valid email address.";
      }
    },
    setFormAction(reset) {
      if (reset) this.formAction = "";
      else
        this.formAction =
          "https://tagion.us5.list-manage.com/subscribe/post?u=374351fbb938dd675075d28ae&amp;id=f736a9c5ae";
    }
  }
};
</script>
