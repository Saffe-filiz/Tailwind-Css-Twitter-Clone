import { createStore } from 'vuex'

const store = createStore({
	state: {
		tweets: ['test'],
		gifs: [],
	},

	mutations: {
		gifData (state, item) {
			state.gifs.push(item);
		},
	},

	actions: {
		getGifts ({ commit }) {
			fetch('https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=Agree&limit=25&offset=0&rating=g&lang=en')
			    .then( response => response.json())
			    .then( response => commit('gifData', response.data)) 
		}
	}
})


export default store