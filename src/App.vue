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

          console.log(response.data);
          this.store.characters = response.data
          this.store.info = response.data.info
        })
        .catch(err => {
          console.log(err.message);
        })
    },
    categorySelected(event) {
      console.log(event.target.value);
      if (event.target.value == 2) {
        this.callApi("https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul");
      } else if (event.target.value == 1) {
        this.callApi("https://www.breakingbadapi.com/api/characters?category=Breaking+Bad");
      }
      // this.callApi(this.store.API_URL);
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

      <select class="m-3 btn btn-light " name="Seleziona categoria" id="" @change="categorySelected($event)">
        <option value="">Select a category</option>
        <option value="1">Breaking Bad</option>
        <option value="2">Better Call Saul</option>
      </select>

      <!-- <button class="m-3 btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select Category
      </button> -->

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
