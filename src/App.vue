<template>
  <div class="h-screen w-full">
    <div class="admin-layout">
      <div class="sidebar bg-black">

        <div class="logo-box">
          <router-link to="/">
            <div class="text-white">
              PIPI Design
            </div>
          </router-link>

        </div>
        <div class="list-group bg-black">

          <router-link v-for="name in router_tabs" :key="name" :to="`/${name}`" v-slot="{isActive}">
            <div class="list-group-item" :class="isActive && 'active'">
              {{name}}
            </div>
          </router-link>
        </div>
      </div>
      <div class="main-content">
        <div class="content-header">
        </div>
        <div class="content-body">
          <router-view />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function(){
    return {
      router_tabs: ["typography","buttons","alert","table","layout","forms"]
    }
  },
  created: function(){
  },
}
</script>
