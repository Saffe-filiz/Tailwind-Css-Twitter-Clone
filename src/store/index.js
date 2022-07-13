import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
	state: {
		tweets: [],
		
	    gifData: {
	    	gifs: [],
	    	numberOfGif: 20,
	    	gifAutoPlay: false,
	    	ganre: '',
	    	gifIsNonFind: false,
	    	isReady: true,
	    },

	    updataSchedule: {},
	    pollData: {
	    	quest: ['', '', '', ''],
	    	length: [1, 0, 0],
	    	counter: 2,
	    	showPoll: false,
	    },

	    unSendTweets: {
	    	drafts: [],
	    	scheduled: [],
	    },
	 
	    media: {
	    	modalMedia: [],
	    	isModal: false,
	    	postMedia: [],
	    },
	},

	getters: {
		// Gif Start

		getGifs: state => {
			let mediaType = state.gifData.gifAutoPlay ? 'fixed_height_small' : 'fixed_height_small_still';
			return state.gifData.gifs.flat().map( item => item.images[mediaType].url).slice(0, state.numberOfGif);
		},

		getGifForTweet: state => {
			return state.gifData.gifs.flat().map( item => item.images['downsized_large'].url)
		},

		getGifGanre: state => state.gifData.ganre,

		getNumberOfGif: state => state.gifData.numberOfGif,

		getGifIsReady: state => state.gifData.gifs.length,

		getGifIsLoading: state => state.gifData.isReady,

		getGifIsNonFind: state => {
			return state.gifData.gifIsNonFind = state.gifData.gifs.length == 0 && state.gifData.ganre.length > 0
		},

		// Gif End

		getTweets: state => state.tweets,

		// Poll Start

		getPollData: state => state.pollData,

		getPollDataDate: state => state.pollData.length,

		getShowPoll: state => state.pollData.showPoll,

		// Poll End

		getUnSendDrafts: state => state.unSendTweets.drafts,

		getUpdataSchedule: state => state.updataSchedule,

		getUnSendScheduled: state => state.unSendTweets.scheduled,

		getGifAutoPlay: state => state.gifData.gifAutoPlay,

		getMedia: state => {
			return state.media.isModal ? state.media.modalMedia: state.media.postMedia
		},

		getMediaLength: state => {
			return state.media.isModal ? state.media.modalMedia.length: state.media.postMedia.length
		},

		getIsModal: state => state.media.isModal,


	},

	mutations: {
		// Gif Start

		setGif(state, data) {
			if(state.gifData.numberOfGif > 50) return;
			state.gifData.gifs = data;
			setTimeout(() => state.gifData.isReady = false, 600);
		},

		setGifOfNumber: (state, number) => state.gifData.numberOfGif = number,

		setGifGanre: (state, data) => state.gifData.ganre = data,

		setGifIsReady: (state, data) => state.gifData.isReady = data,

		setUpdataSchedule: (state, data) => state.updataSchedule = data,

		setGifAutoPlay: (state, data) => state.gifData.gifAutoPlay = data,

		// Gif End

		// Poll Start

		setPollData: (state, data) => state.pollData = data,

		setPollDataDate: (state, data) => state.pollData.date = data,

		setShowPoll (state, data) {
			console.log(data)
			return state.pollData.showPoll = data
		},

		// Poll End

		setUnSendScheduled: (state, data) => state.unSendTweets.scheduled.push(data),

		deletUnScheduled: (state, data) => state.unSendTweets.scheduled = data,

		deletUnDraft: (state, data) => state.unSendTweets.drafts = data,

		setIsModal: (state, data) => state.media.isModal = data,

		setUnSendDraft: (state, data) => state.unSendTweets.drafts.push(data),

		setMedia (state, data) {
			state.media.isModal ? state.media.modalMedia.push(data): state.media.postMedia.push(data)
		},

		removeMedia (state, data) {
			state.media.isModal ? state.media.modalMedia.splice(data, 1): state.media.postMedia.splice(data, 1)
		},

		deletModalMedia: (state, data) => state.media.modalMedia = data,

		setNewTweet: (state, data) => state.tweets.push(data),

	},

	actions: {
		async getGifts ({commit}, payload) {
			let response
			try{
				response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=50&offset=2&rating=g&lang=en`);
				
			}catch(error){
				console.log(error, 'dasdasda')
			}
			let { data } = await response.data 
			commit('setGif', data)
		}
	}
})


export default store