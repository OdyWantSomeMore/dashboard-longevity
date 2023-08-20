<script>
import BellIcon from "@/assets/svg/bell.svg";
import { ref } from "vue";
import UserIcon from "@/assets/svg/users.svg";
import HeartIcon from "@/assets/svg/heart.svg";
import UserAddIcon from "@/assets/svg/users-plus.svg";

export default {
  setup() {
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);
    return { show, isOpen };
  },
  components: {
    BellIcon,
    UserIcon,
    HeartIcon,
    UserAddIcon,
  },
};
</script>

<template>
  <div
    class="w-full top-0 left-80 flex h-16 items-center justify-between bg-white text-def"
  >
    <div>
      <h1 class="ml-10 text-xl font-black font-['Poppins'] drop-shadow-sm">L<span class="letter-o">O</span>NGEVITY</h1>
    </div>
    <div class="flex">
      <div class="flex items-center">
        <BellIcon class="mr-5" />
      </div>
      <div>
        <button @click="isOpen" class="mr-10 flex items-center">
          <img src="../assets/img/cat.gif" class="w-11 h-11 rounded-full" />
        </button>

        <!-- Dropdown menu -->
        <div
          v-show="show"
          class="absolute right-3 w-64 p-3 bg-white rounded-lg shadow-md text-menu z-10 cursor-pointer"
        >
          <h1 to="/" class="drop-text hover:text-def duration-200">Profile Settings</h1>
          <h1 to="/" class="drop-text hover:text-def duration-200">View Profile</h1>
          <div class="flex-grow border-t-2 border-background "></div>
          <h1 to="/" class="drop-text flex items-center hover:text-def duration-200"><UserIcon class="mr-2" />Explore Creators</h1>
          <h1 to="/" class="drop-text flex items-center hover:text-def duration-200"><HeartIcon class="mr-2" />Manage Membership</h1>
          <h1 to="/" class="drop-text flex items-center hover:text-def duration-200"><UserAddIcon class="mr-2" />Invite Creators</h1>
          <div class="flex-grow border-t-2 border-background"></div>
          <h1 to="/" class="drop-text hover:text-def duration-200"><router-link :to="{name: 'login'}">Log Out</router-link></h1>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-grow border-t-2 border-background"></div>
</template>

<style>
.drop-text {
  margin: 15px;
  font-size: 14.5px;
}

.letter-o {
  color: #FFA427;
}
</style>
