<script >
import axios from 'axios'
import AppMain from './components/AppMain.vue'

import { store } from './store.js'

export default {
  name: 'App',
  components: {

    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          console.log(response.data);
          this.store.characters = response.data
          this.store.info = response.data.info
        })
        .catch(err => {
          console.log(err.message);
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL);
  }
}



</script>

<template>
  <main>

    <h1 class="p-5">Breaking Bad Api</h1>

    <div class="container ">
      <button class="m-3 btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select Category
      </button>

      <AppMain class="mainSection" />
    </div>

  </main>

</template>

<style  lang="scss" scoped>
main {
  background-color: #2e3a46;
  color: white;
}

.mainSection {
  background-color: white;
}
</style>
