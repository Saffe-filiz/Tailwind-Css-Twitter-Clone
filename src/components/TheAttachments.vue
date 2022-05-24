<template>
	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
		<Madia :isActive="active.imagesCount == 4 || active.attachment.gif || active.attachment.showPoll" :madiaType="active.attachment.image"/>
	    <Gif :isActive="active.attachment.image || active.attachment.gif || active.attachment.showPoll"  @click="showGifContent = true, scrollHidden()"/>
		<Poll @click="$emit('showPoll', true)" :isActive="active.attachment.gif || active.attachment.image" />
	    <Emoji/>
	    <Schedule :isActive="active.attachment.showPoll || active.attachment.whoCanReply != 'Everyone'" @click="scrollHidden(), showSchedule = true"/>
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

	const active = defineProps(['attachment', 'imagesCount'])

	const scrollHidden = inject('scrollHidden'); // Coming from app vue
	const showSchedule = inject('showSchedule'); // Coming from app vue
	const showGifContent = inject('showGifContent'); // Coming from app vue
</script>
