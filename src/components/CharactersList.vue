<script>
export default {
    name: 'CharactersList',
    props: {
        characters: Array
    }
}
</script>

<template>

    <section class="characters ">

        <div class="container">
            <div class="row row-cols-1 row-cols-sm-4">
                <div class="col my-4" v-for="character in characters">
                    <div class="character p-4 ">

                        <img :src="character.img" :alt="character.name" class="img-fluid">
                        <h3 class="p-3">{{ character.name }}</h3>
                        <p class="mt-2">Breaking Bad</p>
                        <p class="status">{{ character.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.characters {
    text-align: center;
}

.character {
    background-color: #2e3a46;
    height: 100%;
}

p {
    color: gray;
}
</style>