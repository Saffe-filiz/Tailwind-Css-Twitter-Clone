import { createStore } from 'vuex'

const store = createStore({
	state: {
	    gifts: [],
	    gifGanre: '',
	    error: '',
	    schedule: {},
	},

	getters: {
		getGifImages: state => state.gifts.flat().map( item => item.images['fixed_height_small_still'].url),

		getGifs: state => state.gifts.flat().map( item => item.images['fixed_height_small'].url),

		getSchedule: state => state.schedule,

	},

	mutations: {
		setGif (state, item) {
			state.gifts = item;
		},

		setClearGifState (state, payload) {
			state.gifts = payload;
		},

		error ( state, item ) {
			state.error = item;
		},

		setSchedule (state, object) {
			state.schedule = object;
		},
	},

	actions: {
		getGifts ({ commit }, payload) {
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload.ganre}&limit=${payload.number}&offset=0&rating=g&lang=en`)
			    .then( response => response.json())
			    .then( response =>  {
			    	console.log(response.data)
			    	commit('setGif', response.data)
			    })
			    .catch( error =>  console.log(error))
		},
	}
})


export default store