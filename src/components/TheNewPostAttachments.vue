<template>
	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
		<Madia :isActive="active.imagesCount == 4 || active.attachment.gif || active.attachment.showPoll" :madiaType="active.attachment.image"/>
	    <Gift :isActive="active.attachment.image || active.attachment.gif || active.attachment.showPoll"/>	    	    
		<Poll :isActive="active.attachment.gif || active.attachment.image" />
	    <Emoji/>
	    <Schedule :isActive="active.attachment.showPoll"/>
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

	const active = defineProps(['attachment', 'imagesCount'])
</script>

//@click="scrollHidden(), showTheScheduleForm = true"