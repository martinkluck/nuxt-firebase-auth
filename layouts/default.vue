<template>
  <div>
    <Header>
      <h1>Welcome</h1>
      <button
        v-if="getUser"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="logout"
      >
        LogOut
      </button>
    </Header>
    <section class="container">
      <div class="flex justify-center items-center wrap">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('users', ['getUser']),
  },
  methods: {
    ...mapActions('users', ['logout']),
  },
};
</script>

<style></style>
