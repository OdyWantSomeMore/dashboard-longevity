<template>
  <div class="h-screen">
    <HeaderComponent />
    <div class="flex min-h-[calc(100vh-66px)]">
      <SidebarComponent />
      <slot />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  components: {
    HeaderComponent,
    SidebarComponent,
  },
};
</script>
