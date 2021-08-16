<template>
  <input :type="type" v-model="value" class="form-control" />
</template>
<script lang="ts">
import useForm from "../../composables/useForm";
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "submitButton",
  props: {
    type: {
      type: String,
      default: "text",
    },
    val: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const form = useForm();
    const value = ref("");

    if (!form.isExist(props.val)) {
      throw new Error("unmatch key value pair");
    }

    watchEffect(() => {
      form.setFormValue(props.val, value.value);
    });

    return {
      value,
    };
  },
});
</script>
