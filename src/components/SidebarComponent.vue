<script>
import MenuItemComponent from "@/components/MenuItemComponent.vue";
import UserIcon from "@/assets/svg/users.svg";
import SettingsIcon from "@/assets/svg/settings.svg";
import AnnotationsIcon from "@/assets/svg/annotation-dots.svg";
import PieChartIcon from "@/assets/svg/pie-chart.svg";
import TrendIcon from "@/assets/svg/trending-up.svg";
import ChartIcon from "@/assets/svg/chart.svg";

export default {
  components: {
    MenuItemComponent,
    UserIcon,
    SettingsIcon,
    AnnotationsIcon,
    PieChartIcon,
    TrendIcon,
    ChartIcon,
  },
};
</script>

<template>
  <div class="h-fill w-80 bg-white font-SF">
    <MenuItemComponent class="mt-5"></MenuItemComponent>
    <MenuItemComponent active><UserIcon class="icons" />Users</MenuItemComponent>
    <MenuItemComponent><AnnotationsIcon class="icons"/>Order List</MenuItemComponent>
    <MenuItemComponent><PieChartIcon class="icons"/>Invoice</MenuItemComponent>
    <MenuItemComponent><TrendIcon class="icons"/>Hub</MenuItemComponent>
    <MenuItemComponent><ChartIcon class="icons"/>Analytics</MenuItemComponent>
    <div class="flex-grow border-t-2 mb-3 border-background"></div>
    <MenuItemComponent><SettingsIcon class="icons"/>Settings</MenuItemComponent>
  </div>
</template>

<style>
.icons {
  margin-right: 8px;
}
</style>
