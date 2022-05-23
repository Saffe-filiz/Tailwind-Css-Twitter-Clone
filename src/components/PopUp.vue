<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 table overflow-hidden" v-if="showTheScheduleForm" @click="showTheScheduleForm = false, scrollVisibil()" >
<!--	<TheSchedule v-on:click.stop @date="(dateScheduling) => date = dateScheduling" :date="date" />-->
      	<TheGifts v-on:click.stop/>
	</div>
</template>

<script setup>
	import TheGifts from './TheGifts.vue';
	import TheSchedule from './TheSchedule.vue';
	import { inject } from 'vue';

	const scrollVisibil = inject('scrollVisibil'); // Coming from app vue
	const showTheScheduleForm = inject('showTheScheduleForm'); // Coming from app vue
</script>
