<template>
  <button class="btn btn-primary" type="block">{{ label }}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubmitButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
