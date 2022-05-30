import { createStore } from 'vuex'

const store = createStore({
	state: {
	    gifData: {
	    	gifs: [],
	    	numberOfGif: 20,
	    	ganre: '',
	    },

	    schedule: {},
	},

	getters: {
		getGifImages: state => state.gifData.gifs.flat().map( item => item.images['fixed_height_small_still'].url),

		getGifs: state => state.gifData.gifs.flat().map( item => item.images['fixed_height_small'].url),

		getGifGanre: state => state.gifData.ganre,

		getNumberOfGif: state => state.gifData.numberOfGif,

		getSchedule: state => state.schedule,

	},

	mutations: {
		setGif(state, item) {
			state.gifData.gifs = item;
		},

		setGifOfNumber(state, number) {
			state.gifData.numberOfGif = number
		},

		setGifGanre(state, ganre) {
			state.gifData.ganre = ganre
		},

		setSchedule (state, object) {
			state.schedule = object;
		},
	},

	actions: {
		getGifts ({ commit }, payload) {
			console.log(payload)
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload.ganre}&limit=${payload.number}&offset=2&rating=g&lang=en`)
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