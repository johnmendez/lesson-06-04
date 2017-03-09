<template lang="html">
  <div class="">
    <h1>All Blog Posts</h1>

    <ul>
      <li v-for="item in posts">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/post';

export default {
  name: 'route-index',
  data() {
    return {
      posts: this.$select('posts'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
