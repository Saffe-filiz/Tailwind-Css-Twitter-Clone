<template>
	<section class="w-[600px] h-[591px] h-auto bg-red-100 m-auto mt-[33px] rounded-2xl overflow-auto" @click="searchAreaIsActive = false">
		<div class="h-full w-full overflow-y-scroll searchInput">
		    <TheGiftsSearch :active="searchAreaIsActive" @active="(x) => searchAreaIsActive = x"/>
	    </div>
	</section>
</template>

<script setup>
	import TheGiftsSearch from './TheGiftsSearch.vue';

	import { ref } from 'vue'

	let searchAreaIsActive = ref(false)

	let genre = [
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
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Eye roll',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Facepalm',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Fist bump',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Good luck',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Happy dance',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Hearts',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'High five',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Hug',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'IDK',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Kiss',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Mic drop',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'No',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'OMG',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Oh snap',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Ok',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Oops',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Please',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Popcorn',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'SMH',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Scared',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Seriously',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Shocked',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Shrug',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Sigh',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Slow clap',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Sorry',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Thank you',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Thumbs down',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Thumbs up',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Want',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Win',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'YOLO',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Yawn',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'Yes',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	},
	{
		title: 'You got this',
		image_Url: 'https://media.tenor.com/images/4ecdc09c97e239087d685c40250e71b2/raw'
	}
	  ]

</script>