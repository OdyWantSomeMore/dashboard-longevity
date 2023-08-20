<script>
import DashboardIcon from "@/assets/svg/dashboard.svg";

export default {
  components: {
    DashboardIcon,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="pl-5 pr-5 pb-3">
    <div
      class="btn bg-white flex items-center text-menu rounded-lg p-4 font-size hover:bg-hover duration-200 hover:text-def"
      :disabled="disabled"
      :class="{ 'bg-color-active': active }"
    >
      <div class="flex items-center cursor-pointer">
        <slot>
          <DashboardIcon class="mr-2"/>
          <a>Dashboard</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<style>
.bg-color-active {
  background-color: #eaedf5;
  color: #2d3134;
}

.bg-color-default {
  background-color: #fff;
}

.font-size {
  font-size: 14.5px;
}
</style>
