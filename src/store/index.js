import { createStore } from 'vuex'

const store = createStore({
	state: {
		gifs: [],
	},

	getters: {
		getGifImages (state) {
			return state.gifs.flat().map( item => item.images['480w_still'].url)
		},

		getGifs ( state ) {
			return state.gifs.flat().map( item => item.url)
		}
	},

	mutations: {
		gifData (state, item) {
			state.gifs = item;
		},
	},

	actions: {
		getGifts ({ commit }, payload) {
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=25&offset=0&rating=g&lang=en`)
			    .then( response => response.json())
			    .then( response => commit('gifData', response.data)) 
		},
	}
})


export default store