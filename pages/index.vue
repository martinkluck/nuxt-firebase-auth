<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="login"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          id="email"
          v-model="account.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="user@email.com"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="account.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="******************"
        />
        <p
          v-if="error.code == 'auth/wrong-password'"
          class="text-red-500 text-xs italic"
        >
          {{ error.message }}
        </p>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
    <div class="flex items-center justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="googleLogin"
      >
        Google
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        email: '',
        password: '',
      },
      error: {},
    };
  },
  methods: {
    async login() {
      // eslint-disable-next-line no-console
      await this.$store
        .dispatch('users/login', this.account)
        .catch((error) => (this.error = error));
      this.$router.push('/admin');
    },
    async googleLogin() {
      this.account = 'google';
      await this.$store
        .dispatch('users/ingresarGoogle', this.account)
        .catch((error) => (this.error = error));
      this.$router.push('/admin');
    },
  },
};
</script>

<style>
h1 {
  font: 1em sans-serif;
}
</style>
