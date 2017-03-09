<template lang="html">
  <div v-bind:class="{ loading }">
    <nav>
      <router-link v-bind:to="{ name: 'index' }">See All Blogs</router-link>
      <router-link v-bind:to="{ name: 'new-post' }">Add New Blog</router-link>
    </nav>

    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'Application',
  data() {
    return {
      loading: this.$select('loading')
    };
  },

  methods: {

  },
};
</script>
