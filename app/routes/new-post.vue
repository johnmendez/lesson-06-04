<template lang="html">
  <div class="">
    <form @submit.prevent="submit">
      <p>
        <input type="text" v-model="values.title" placeholder="Title">
      </p>
      <p>
        <input type="text" v-model="values.headerImg" placeholder="Header Image">
      </p>
      <p>
        <textarea name="content" id="blog-content" v-model="values.content" placeholder="Content"></textarea>
      </p>

      <p>
        <router-link v-bind:to="{ name: 'index' }" class="button">Back</router-link>
        <button class="button" type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import store from '../store';
import { add } from '../actions/post';

export default {
  data() {
    return {
      values: {
        title: '',
        // date later on
        headerImg: '',
        content: '',
      },
    };
  },

  methods: {
    submit() {
      store.dispatch(add(this.values)).then(() => {
        this.$router.push({ name: 'index' });
      });
    }
  },
};
</script>
