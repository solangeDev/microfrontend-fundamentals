<template>
  <div>
    <router-link to="vue-exercise/" style="padding: 16px; display: inline-block"
      >Vue Home</router-link
    >
    <router-link
      to="vue-exercise/subroute"
      style="padding: 16px; display: inline-block"
      >Vue Sub Route</router-link
    >
    <router-link to="/angular" style="padding: 16px; display: inline-block"
      >Angular</router-link
    >
    <div class="Texto">Vue exercise</div>
    <router-view></router-view>
  </div>
</template>
<style scope>
.Texto {
  color: green;
}
</style>
