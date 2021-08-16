<template>
  <label for="name" class="form-label">ユーザー名</label>
  <form-input type="text" val="name"></form-input>
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
