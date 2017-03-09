<template lang="html">
  <div class="">
    <nav>
      <router-link v-bind:to="{ name: 'index' }">See All Blogs</router-link>
      <router-link v-bind:to="{ name: 'index' }">Add New Blog</router-link>
    </nav>

    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
