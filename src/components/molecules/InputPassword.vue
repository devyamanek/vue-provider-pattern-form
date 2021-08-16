<template>
  <label for="name" class="form-label">パスワード</label>
  <form-input type="password" val="password"></form-input>
  <small v-if="error" class="text-danger">{{ error }}</small>
</template>

<script lang="type">
import { defineComponent } from "vue";
import FormInput from "../atoms/FormInput.vue";

export default defineComponent({
  components: { FormInput },
  props: {
    error: {
      type: [String, Boolean],
      required: true
    }
  },
});
</script>

<style></style>
