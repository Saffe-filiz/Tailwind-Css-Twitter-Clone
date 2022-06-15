import { createStore } from 'vuex'

const store = createStore({
	state: {
		tweets: [],
	    gifData: {
	    	gifs: [],
	    	numberOfGif: 20,
	    	gifAutoPlay: false,
	    	ganre: '',
	    },
	    updataSchedule: {},
	    pollData: {
	    	quest: ['', '', '', ''],
	    	date: [1, 0, 0],
	    	counter: 2,
	    },

	    unSendTweets: {
	    	drafts: [
	    	{
	    		post: '0',
	    		date: [2022, 6, 10, 16, 29],
	    		id: 0,
	    	},{
	    		post: '1',
	    		date: [2022, 7, 2, 16, 15],
	    		id: 1,
	    	},{
	    		post: '0',
	    		date: [2022, 7, 2, 16, 19],
	    		id: 2,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 3, 16, 59],
	    		id: 3,
	    	},{
	    		post: '0',
	    		date: [2023, 2, 1, 5, 19],
	    		id: 4,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 4, 16, 39],
	    		id: 5,
	    	},{
	    		post: '0',
	    		date: [2023, 2, 9, 11, 19],
	    		id: 6,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 10, 12, 19],
	    		id: 7,
	    	}
	    	],
	    	scheduled: [
	    	{
	    		post: '0',
	    		date: [2022, 6, 10, 16, 29],
	    		id: 0,
	    	},{
	    		post: '1',
	    		date: [2022, 7, 2, 16, 15],
	    		id: 1,
	    	},{
	    		post: '0',
	    		date: [2022, 7, 2, 16, 19],
	    		id: 2,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 3, 16, 59],
	    		id: 3,
	    	},{
	    		post: '0',
	    		date: [2023, 2, 1, 5, 19],
	    		id: 4,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 4, 16, 39],
	    		id: 5,
	    	},{
	    		post: '0',
	    		date: [2023, 2, 9, 11, 19],
	    		id: 6,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 10, 12, 19],
	    		id: 7,
	    	},{
	    		post: '0',
	    		date: [2022, 6, 10, 16, 29],
	    		id: 0,
	    	},{
	    		post: '1',
	    		date: [2022, 7, 2, 16, 15],
	    		id: 1,
	    	},{
	    		post: '0',
	    		date: [2022, 7, 2, 16, 19],
	    		id: 2,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 3, 16, 59],
	    		id: 3,
	    	},{
	    		post: '0',
	    		date: [2023, 2, 1, 5, 19],
	    		id: 4,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 4, 16, 39],
	    		id: 5,
	    	},{
	    		post: '0',
	    		date: [2023, 2, 9, 11, 19],
	    		id: 6,
	    	},{
	    		post: '1',
	    		date: [2023, 2, 10, 12, 19],
	    		id: 7,
	    	}
	    	],
	    }
	},

	getters: {
		getGifs: state => {
			let mediaType = state.gifData.gifAutoPlay ? 'fixed_height_small' : 'fixed_height_small_still';
			return state.gifData.gifs.flat().map( item => item.images[mediaType].url);
		},

		getGifGanre: state => state.gifData.ganre,

		getNumberOfGif: state => state.gifData.numberOfGif,

		getUpdataSchedule: state => state.updataSchedule,

		getGifIsReady: state => state.gifData.gifs.length,

		getTweets: state => state.tweets,

		getPollDataDate: state => state.pollData.date,

		getUnSendDrafts: state => state.unSendTweets.drafts,

		getUnSendScheduled: state => state.unSendTweets.scheduled,

	},

	mutations: {
		setGif(state, gifs) {
			if(state.gifData.numberOfGif > 50) return;
			state.gifData.gifs = gifs;
		},

		setGifOfNumber(state, number) {
			state.gifData.numberOfGif = number
		},

		setGifGanre(state, ganre) {
			state.gifData.ganre = ganre
		},

		setUpdataSchedule (state, data) {
			state.updataSchedule = data;
		},

		setGifAutoPlay (state, isPlay) {
			state.gifData.gifAutoPlay = isPlay;
		},

		setNewTweet (state, tweet) {
			state.tweets.push(tweet)
		},

		setPollDataDate (state, date) {
			state.pollData.date = date;
		},

		setUnSendScheduled (state, data) {
			state.unSendTweets.scheduled.push(data);
		},

		setUnSendDraft (state, data) {
			state.unSendTweets.drafts.push(data);
		},

		deletUnSendScheduled (state, data) {
			state.unSendTweets.scheduled = data;
		}
	},

	actions: {
		getGifts ({ commit }, payload) {
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload.ganre}&limit=${payload.number}&offset=2&rating=g&lang=en`)
			    .then( response => response.json())
			    .then( response =>  commit('setGif', response.data))
			    .catch( error =>  console.log(error))
		},
	}
})


export default store