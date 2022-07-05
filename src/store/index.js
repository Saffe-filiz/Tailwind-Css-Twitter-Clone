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
	 
	    media: {
	    	modalMedia: [],
	    	isModal: false,
	    	postMedia: [],
	    },
	},

	getters: {
		getGifs: state => {
			let mediaType = state.gifData.gifAutoPlay ? 'fixed_height_small' : 'fixed_height_small_still';
			return state.gifData.gifs.flat().map( item => item.images[mediaType].url).slice(0, state.numberOfGif);
		},

		getGifForTweet: state => {
			return state.gifData.gifs.flat().map( item => item.images['downsized_large'].url)
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

		getMedia: state => {
			return state.media.isModal ? state.media.modalMedia: state.media.postMedia
		},

		getMediaLength: state => {
			return state.media.isModal ? state.media.modalMedia.length: state.media.postMedia.length
		},

		getIsModal: state => state.media.isModal


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

		setIsModal (state, data) {
			state.media.isModal = data;
		},

		setMedia (state, data) {
			state.media.isModal ? state.media.modalMedia.push(data): state.media.postMedia.push(data)
		},

		removeMedia (state, data) {
			state.media.isModal ? state.media.modalMedia.splice(data, 1): state.media.postMedia.splice(data, 1)
		},

		deletModalMedia (state, data) {
			state.media.modalMedia = data;
		},

	},

	actions: {
		async getGifts ({commit}, payload) {
			let response
			try{
				response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GqPadHTXbqlqEhw7vHMg8VrmyHdroaVP&q=${payload}&limit=50&offset=2&rating=g&lang=en`);
				
			}catch(error){
				console.log(error)
			}
			let { data } = await response.data 
			commit('setGif', data)
		}
	}
})


export default store