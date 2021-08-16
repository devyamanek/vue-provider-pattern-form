<template>
  <form @submit.prevent="">
    <h2>ログイン</h2>

    <div class="mb-3">
      <input-mail :error="errorBag.email"></input-mail>
    </div>

    <div class="mb-3">
      <input-password :error="errorBag.password"></input-password>
    </div>

    <div class="mb-3">
      <submit-button label="ログイン" @click="submitForm"></submit-button>
    </div>

    <p><router-link to="/signup">新規会員登録</router-link>する</p>
  </form>
</template>

<script lang="ts">
import { Form } from "../../composables/useForm";
import { defineComponent, provide, reactive } from "vue";
import SubmitButton from "../atoms/SubmitButton.vue";
import InputMail from "../molecules/InputMail.vue";
import InputPassword from "../molecules/InputPassword.vue";
import Validator from "validatorjs";

export default defineComponent({
  name: "LoginForm",
  components: { SubmitButton, InputPassword, InputMail },
  setup() {
    const form = new Form({
      email: "",
      password: "",
    });

    const rules = {
      email: "required|email",
      password: "required|min:8|max:20",
    };

    const errorBag: {
      email: string | false;
      password: string | false;
    } = reactive({
      email: "",
      password: "",
    });

    provide("form", form);

    const submitForm = () => {
      const validation = new Validator(form.formValue, rules);

      if (validation.fails()) {
        errorBag.email = validation.errors.first("email");
        errorBag.password = validation.errors.first("password");
        return false;
      }

      alert("Successfuly submitted!");
    };
    return {
      submitForm,
      errorBag,
    };
  },
});
</script>
