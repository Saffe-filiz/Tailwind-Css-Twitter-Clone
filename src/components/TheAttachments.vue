<template>
	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
		<Madia 
		    :isActive="is.active[1] == 4 || is.active[0].gif || is.active[0].poll" 
		    :madiaType="is.active[0].image"/>
	    <Gif 
	        :isActive="is.active[0].image || is.active[0].gif || is.active[0].poll" 
	        @click="modal.openGifModal = true, modal.scrollHidden()"/>
		<Poll 
		    @click="$emit('showPoll', true)" 
		    :isActive="is.active[0].gif || is.active[0].image || is.active[2]" />
	    <Emoji/>
	    <Schedule 
	        :isActive="is.active[0].poll || is.active[0].whoCanReply != 'Everyone'" 
	        @click="modal.scrollHidden(), modal.openScheduleModal = true"/>
	    <Mark/>
	</div>
</template>

<script setup>
	import Madia from './icons/NewPost/Madia.vue';
	import Gif from './icons/NewPost/Gif.vue';
	import Emoji from './icons/NewPost/Emoji.vue';
	import Poll from './icons/NewPost/Poll.vue';
	import Schedule from './icons/NewPost/Schedule.vue';
	import Mark from './icons/NewPost/Mark.vue';

	import { inject } from 'vue'

	const is = defineProps({active: Array})
	const modal = inject('modal'); // Coming from app vue
</script>
