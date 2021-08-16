<template>
  <form @submit.prevent="">
    <h2>新規会員登録</h2>

    <div class="mb-3">
      <input-name :error="errorBag.name"></input-name>
    </div>

    <div class="mb-3">
      <input-mail :error="errorBag.email"></input-mail>
    </div>

    <div class="mb-3">
      <input-password :error="errorBag.password"></input-password>
    </div>

    <div class="mb-3">
      <submit-button label="登録する" @click="submitForm"></submit-button>
    </div>

    <p><router-link to="/login">ログイン</router-link>する</p>
  </form>
</template>

<script lang="ts">
import { Form } from "../../composables/useForm";
import { defineComponent, provide, reactive } from "vue";
import SubmitButton from "../atoms/SubmitButton.vue";
import InputMail from "../molecules/InputMail.vue";
import InputName from "../molecules/InputName.vue";
import InputPassword from "../molecules/InputPassword.vue";
import Validator from "validatorjs";

export default defineComponent({
  name: "SignupForm",
  components: { SubmitButton, InputName, InputMail, InputPassword },
  setup() {
    const form = new Form({
      name: "",
      email: "",
      password: "",
    });

    const rules = {
      name: "required",
      email: "required|email",
      password: "required|min:8|max:20",
    };

    const errorBag: {
      name: string | false;
      email: string | false;
      password: string | false;
    } = reactive({
      name: "",
      email: "",
      password: "",
    });

    provide("form", form);

    const submitForm = () => {
      const validation = new Validator(form.formValue, rules);

      if (validation.fails()) {
        errorBag.name = validation.errors.first("name");
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
