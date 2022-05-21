import { createStore } from 'vuex'

const store = createStore({
	state: {
	    gifts: [],
	},

	getters: {
		getGifImages: state => state.gifts.flat().map( item => item.images['fixed_height_small_still'].url),

		getGifs: state => state.gifts.flat().map( item => item.images['fixed_height_small'].url),

	},

	mutations: {
		setGif (state, item) {
			state.gifts = item;
		},

		setClearGifState (state, payload) {
			state.gifts = payload
		}
	},

	actions: {
		getGifts ({ commit }, payload) {
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=40&offset=0&rating=g&lang=en`)
			    .then( response => response.json())
			    .then( response => commit('setGif', response.data)) 
		},
	}
})


export default store