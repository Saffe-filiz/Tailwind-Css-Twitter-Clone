<template>
	<section class="w-[600px] h-[591px] h-auto bg-white m-auto mt-[33px] rounded-2xl overflow-auto" @click="searchAreaIsActive = false">
		<div class="h-full w-full overflow-y-scroll searchInput  inline-flex flex-wrap gap-1">
		    <TheGiftsSearch :active="searchAreaIsActive" :ganre="selectedGanre" @active="(x) => searchAreaIsActive = x"/>
		    	<div class="w-full h-5 my-[7px] bg-white px-[11px] inline-flex justify-between items-center">
			        <span class="text-[#536471] text-sm">Auto-play GIFs</span>
			        <label for="gifAutoPlayRadio" class="w-10 h-3.5 bg-[#939393] flex items-center rounded-full relative after:w-5 after:h-5 after:bg-white after:rounded-full after:absolute after:shadow-[0_1px_3px_rgb(0,0,0,0.5)] after:duration-100 cursor-pointer"  
			        :class="{'after:ml-5 bg-[#6bc9fb] after:bg-[#1d9bf0]': gifAutoPlayRadio}">
				        <input type="checkbox"  class="hidden" id="gifAutoPlayRadio" v-model="gifAutoPlayRadio">
			        </label>
		       </div>
		    <div  class="w-[289px] h-[140px] last:w-full relative cursor-pointer" v-for="ganere in genres" @click="setSelectedGanre(ganere.title)">
		    	<img :src="ganere.image_Url" class="w-full h-full object-cover" draggable="false">
	    	    <span class="absolute bottom-0 p-2 text-lg  text-white font-bold z-10">{{ganere.title}}</span>
	        </div>
	    </div> 
	</section>
</template>

<script setup>
	import TheGiftsSearch from './TheGiftsSearch.vue';

	import { ref } from 'vue'
	import { useStore } from 'vuex';
	const store = useStore()
	let selectedGanre = ref('')
	const sendTweet = () => useStore.state.tweets.push(post)

	let searchAreaIsActive = ref(false)
	let gifAutoPlayRadio = ref(false)
	let setSelectedGanre = ( ganre ) => {
		searchAreaIsActive.value = true;
		selectedGanre.value = ganre;
	}

	let genres = [
	{
	    title: 'Agree',
	    image_Url : 'https://media3.giphy.com/media/I16U5AfBWqgJYJum6i/giphy_s.gif'
	},
	{
		title: 'Applause',
		image_Url: 'https://media.tenor.com/images/5656c0cd4de11821336ab2bb920d383a/raw'
	},
	{
		title: 'Awww',
		image_Url: 'https://media4.giphy.com/media/2pK55s0S9ClLhaga91/giphy_s.gif'
	},
	{
		title: 'Dance',
		image_Url: 'https://media.tenor.com/images/3b39c942b33fc56ac8c821396393b9ae/raw'
	},
	{
		title: 'Deal with it',
		image_Url: 'https://media3.giphy.com/media/xXIdOVUINy8g0/giphy_s.gif'
	},
	{
		title: 'Do not want',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Eww',
		image_Url: 'https://media1.giphy.com/media/10FHR5A4cXqVrO/giphy_s.gif'
	},
	{
		title: 'Eye roll',
		image_Url: 'https://media.tenor.com/images/8a9769fcb9a6bd09c1762004c69de6d9/raw'
	},
	{
		title: 'Facepalm',
		image_Url: 'https://media.tenor.com/images/1b58b8869489f53b36407f357faf0168/raw'
	},
	{
		title: 'Fist bump',
		image_Url: 'https://media.tenor.com/images/63994fa89c1c83e080db63dc604ae2bc/raw'
	},
	{
		title: 'Good luck',
		image_Url: 'https://media.tenor.com/images/a9da611f5736a740600d8ea0168baa4f/tenor.png'
	},
	{
		title: 'Happy dance',
		image_Url: 'https://media.tenor.com/images/8a4ca6bf8aedee0fb984190cca42eab6/raw'
	},
	{
		title: 'Hearts',
		image_Url: 'https://media.tenor.com/images/dcb9127691bf5577d82f75698b37af0f/raw'
	},
	{
		title: 'High five',
		image_Url: 'https://media.tenor.com/images/2cc552d3e72363df0e4783d575887b91/raw'
	},
	{
		title: 'Hug',
		image_Url: 'https://media.tenor.com/images/4f2cc0760686079a646c99a5e69ae6ed/raw'
	},
	{
		title: 'IDK',
		image_Url: 'https://media.tenor.com/images/cc073e2428934c516d0ff6a7af22857f/raw'
	},
	{
		title: 'Kiss',
		image_Url: 'https://media.tenor.com/images/eaad02eaa21dddf873592ef73d943d19/raw'
	},
	{
		title: 'Mic drop',
		image_Url: 'https://media.tenor.com/images/8dfcdaae56c58b8e642482c42d4b4389/tenor.png'
	},
	{
		title: 'No',
		image_Url: 'https://media.tenor.com/images/d550dd3183fb30200c2ef60231e2d692/raw'
	},
	{
		title: 'OMG',
		image_Url: 'https://media.tenor.com/images/7084eedbc95b743ae8b410af1572f648/raw'
	},
	{
		title: 'Oh snap',
		image_Url: 'https://media.tenor.com/images/36d9a5a64aa680341e02e7539dae729d/raw'
	},
	{
		title: 'Ok',
		image_Url: 'https://media.tenor.com/images/cb9b4e0293bf811c2702a207b4df90ed/raw'
	},
	{
		title: 'Oops',
		image_Url: 'https://media.tenor.com/images/35b86d86fad19bd281a6eefcc08210c3/raw'
	},
	{
		title: 'Please',
		image_Url: 'https://media.tenor.com/images/8857a582cf689029854911009357752a/raw'
	},
	{
		title: 'Popcorn',
		image_Url: 'https://media.tenor.com/images/b17717a6ce809e7b03716bb031b1041f/raw'
	},
	{
		title: 'SMH',
		image_Url: 'https://media.tenor.com/images/5eb72c5e1ecee9e864e3efb64b839816/raw'
	},
	{
		title: 'Scared',
		image_Url: 'https://media.tenor.com/images/4012fafd5c2a4610b935f86d12790568/raw'
	},
	{
		title: 'Seriously',
		image_Url: 'https://media.tenor.com/images/a7ea3801f982ae8dcfac98269cf81604/raw'
	},
	{
		title: 'Shocked',
		image_Url: 'https://media.tenor.com/images/556f5eb3e0c6dbc7a658ba380bab5be3/raw'
	},
	{
		title: 'Shrug',
		image_Url: 'https://media.tenor.com/images/ddd23ddd00565415fa9fdaf4b8402b7a/raw'
	},
	{
		title: 'Sigh',
		image_Url: 'https://media.tenor.com/images/330fd08bd125f8dd0251187b94e06364/raw'
	},
	{
		title: 'Slow clap',
		image_Url: 'https://media.tenor.com/images/374d99c720897ad646f09817188c2472/raw'
	},
	{
		title: 'Sorry',
		image_Url: 'https://media.tenor.com/images/70fdf95d7e073bf8284a69181c76317a/raw'
	},
	{
		title: 'Thank you',
		image_Url: 'https://media.tenor.com/images/b7b0958fcc0caf54ce5ca3d0e8191d15/raw'
	},
	{
		title: 'Thumbs down',
		image_Url: 'https://media.tenor.com/images/9d4728e8d17993d8213c0528c4b2dd5c/raw'
	},
	{
		title: 'Thumbs up',
		image_Url: 'https://media.tenor.com/images/588285b638fb143682303d3d4a80f7da/raw'
	},
	{
		title: 'Want',
		image_Url: 'https://media.tenor.com/images/a5ca165d8a8ae869bce94a1857c4b003/raw'
	},
	{
		title: 'Win',
		image_Url: 'https://media.tenor.com/images/44510c17d5f2ff703e48c9dd5d3528ad/raw'
	},
	{
		title: 'Wink',
		image_Url: 'https://media.tenor.com/images/7cefe591c57332815afd8b14a841255a/raw'
	},
	{
		title: 'YOLO',
		image_Url: 'https://media.tenor.com/images/db4193d77996d0d3668a01b8ac8dbc20/raw'
	},
	{
		title: 'Yawn',
		image_Url: 'https://media.tenor.com/images/3ae0c3ebf1f1115709092a92bd7ba491/raw'
	},
	{
		title: 'Yes',
		image_Url: 'https://media.tenor.com/images/e5e349b46fdac12ee6995883d263d3f0/raw'
	},
	{
		title: 'You got this',
		image_Url: 'https://media.tenor.com/images/7d79ff38ece02509372d30834e0d94e7/raw'
	}
	  ]

</script>