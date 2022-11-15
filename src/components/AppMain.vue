<script >
import CharactersList from './CharactersList.vue'
import Loader from './loader.vue'

import { store } from '../store.js'
export default {
    name: 'AppMain',
    components: { CharactersList, Loader },
    data() {
        return {
            store
        }
    }

}

</script>

<template>

    <div class="container p-4">
        <div class="result p-3">
            <h4>Found 62 character</h4>
        </div>

        <div>

        </div>
        <Loader />
        <CharactersList class="p-4" :characters="store.characters" />
    </div>



</template>

<style lang="scss" scoped>
.result {
    background-color: black;
}
</style>
