<template>
  <label for="email" class="form-label">メールアドレス</label>
  <form-input type="email" val="email"></form-input>
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
