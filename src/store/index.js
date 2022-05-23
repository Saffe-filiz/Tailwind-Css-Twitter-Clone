import { createStore } from 'vuex'

const store = createStore({
	state: {
	    gifts: [],
	    gifGanre: '',
	    error: '',
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
		},

		error ( state, item ) {
			state.error = item
		}
	},

	actions: {
		getGifts ({ commit }, payload) {
			return new Promise((resolve, reject) => {
				fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=40&offset=0&rating=g&lang=en`)
			        .then( response => response.json())
			        .then( response =>  resolve(commit('setGif', response.data)))
			        .catch( error =>  reject(console.log(error)) ) 
			})
		},
	}
})


export default store