<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
