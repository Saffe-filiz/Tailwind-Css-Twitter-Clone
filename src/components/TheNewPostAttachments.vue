<template>
	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
		<Madia :isActive="active.imagesCount == 4 || active.attachment.gif || active.attachment.showPoll" :madiaType="active.attachment.image"/>
	    <Gift :isActive="active.attachment.image || active.attachment.gif || active.attachment.showPoll"/>	    	    
		<Poll :isActive="active.attachment.gif || active.attachment.image" />
	    <Emoji/>
	    <Schedule :isActive="active.attachment.showPoll || active.attachment.whoCanReply != 'Everyone'" @click="scrollHidden(), showTheScheduleForm = true"/>
	    <Mark/>
	</div>
</template>

<script setup>
	import Madia from './icons/NewPostIcons/Madia.vue';
	import Gift from './icons/NewPostIcons/Gift.vue';
	import Emoji from './icons/NewPostIcons/Emoji.vue';
	import Poll from './icons/NewPostIcons/Poll.vue';
	import Schedule from './icons/NewPostIcons/Schedule.vue';
	import Mark from './icons/NewPostIcons/Mark.vue';

	import { inject } from 'vue'

	const active = defineProps(['attachment', 'imagesCount'])

	const scrollHidden = inject('scrollHidden'); // Coming from app vue
	const showTheScheduleForm = inject('showTheScheduleForm'); // Coming from app vue
</script>

//@click="scrollHidden(), showTheScheduleForm = true"