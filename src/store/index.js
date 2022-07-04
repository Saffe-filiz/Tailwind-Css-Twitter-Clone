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
	    	drafts: [],
	    	scheduled: [],
	    },
	 
	    media: [],
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

		getGifAutoPlay: state => state.gifData.gifAutoPlay,

		getMedia: state => state.media,

		getMediaLength: state => state.media.length,

	},

	mutations: {
		setGif(state, data) {
			if(state.gifData.numberOfGif > 50) return;
			state.gifData.gifs = data;
		},

		setGifOfNumber(state, number) {
			state.gifData.numberOfGif = number
		},

		setGifGanre(state, data) {
			state.gifData.ganre = data
		},

		setUpdataSchedule (state, data) {
			state.updataSchedule = data;
		},

		setGifAutoPlay (state, data) {
			state.gifData.gifAutoPlay = data;
		},

		setNewTweet (state, data) {
			state.tweets.push(data)
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

		deletUnScheduled (state, data) {
			state.unSendTweets.scheduled = data;
		},

		deletUnDraft (state, data) {
			state.unSendTweets.drafts = data;
		},

		setMedia (state, data) {
			state.media.push(data);
		},

		removeMedia (state, data) {
			state.media.splice(data, 1)
		}
	},

	actions: {
		getGifts ({ commit }, payload) {
			fetch(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=50&offset=2&rating=g&lang=en`)
			    .then( response => response.json())
			    .then( response =>  commit('setGif', response.data))
			    .catch( error =>  console.log(error))
		},
	}
})


export default store