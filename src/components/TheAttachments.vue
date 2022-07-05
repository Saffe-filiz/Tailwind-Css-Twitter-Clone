<template>
	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
		<Madia 
		    :isActive="mediaLength || selected.gif || selected.poll" 
		    :madiaType="selected.image"/>
	    <Gif 
	        :isActive="selected.image || selected.gif || selected.poll" 
	        @click="modal.openGifModal = true, modal.scrollHidden()"/>
		<Poll 
		    @click="$emit('showPoll', true)" 
		    :isActive="selected.gif || selected.image" />
	    <Emoji/>
	    <Schedule 
	        :isActive="selected.poll || selected.whoCanReply != 'Everyone'" 
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

	import { ref, inject, computed } from 'vue'
	import { useStore } from 'vuex'; 
	const store = useStore();
	
	const is = defineProps({active: Array})
	const selected = inject('selected'); // Coming from app vue
	const modal = inject('modal');
	const mediaLength = computed(() => store.getters.getMediaLength == 4)


</script>
