<script >
import CharactersList from './CharactersList.vue'
import { store } from '../store.js'
export default {
    name: 'AppMain',
    components: { CharactersList },
    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <main>
        <div class="container p-4">
            <div class="result p-3">
                <h4>Found 62 character</h4>
            </div>


            <CharactersList class="p-4" :characters="store.characters" />
        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    background-color: white;
}

.result {
    background-color: black;
}
</style>
