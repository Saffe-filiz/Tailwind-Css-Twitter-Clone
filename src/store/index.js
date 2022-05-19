import { createStore } from 'vuex'

const store = createStore({
	state: {
		gifs: [],
	},

	getters: {
		getGifImages (state) {
			return state.gifs.flat().map( item => item.images['fixed_height_small_still'])
		},

		getGifs ( state ) {
			return state.gifs.flat().map( item => item.images['fixed_height_small'])
		}
	},

	mutations: {
		gifData (state, item) {
			state.gifs = item;
		},
	},

	actions: {
		getGifts ({ commit }, payload) {
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=40&offset=0&rating=g&lang=en`)
			    .then( response => response.json())
			    .then( response => commit('gifData', response.data)) 
		},
	}
})


export default store