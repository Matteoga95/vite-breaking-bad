import { reactive } from 'vue'

export const store = reactive({
    characters: null,
    info: null,
    error: null,
    API_URL: 'https://www.breakingbadapi.com/api/characters'
})