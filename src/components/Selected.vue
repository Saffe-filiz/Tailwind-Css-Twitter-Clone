<template>
	<div class="w-full sectionMainStyle relative">
		<label class="ml-2 focus:text-red-100" for="s">{{content.title}}</label>
		<svg class="w-6 h-6 absolute right-2.5 pointer-events-none top-4" viewBox="0 0 24 24"><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
		<select class="sectionStyle" v-model="timer">
			<option v-for="(time, index) in content.durations" :key="index">{{index}}</option>
		</select>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	let content = defineProps({
		title: String,
		durations: Number
	});

	let timer = ref(0)
</script>
