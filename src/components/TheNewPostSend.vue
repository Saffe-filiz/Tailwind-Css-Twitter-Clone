<template>
	<button class="w-auto h-8 px-[15px] bg-btn-bg-color text-white rounded-[2rem]" :class="{'pointer-events-none opacity-50': data.isReady}">
	    <span v-if="data.isSchedule">Schedule</span>
	    <span v-else>Tweet</span>
	</button>
</template>

<script setup>
	const data = defineProps({isSchedule: String, isReady: Boolean})
</script>