<template>
	<div class="w-fit h-[17.5px] inline-flex">
		<Calendar v-if="!data.isDate"/> 
	    <span class="text-[12px] text-[#536471]" :class="{'!text-white' : data.isDate}">{{info}}</span>
	</div>
</template>

<script setup>
	import Calendar from './icons/NewPost/Calendar.vue';
	import { computed } from 'vue';
	
	const data = defineProps({date: Array, isDate: {type: Boolean, default: false}});

	const date = computed(() =>  new Date(data.date[0], data.date[1], data.date[2], data.date[3], data.date[4]));

    const timePeriod = computed(() => {
		let hours = data.date[3];
		let minute = data.date[4];
		let period = hours < 12 ? 'AM': 'PM';
	    hours = hours % 12 == 0 ?  12: hours % 12;
	    minute = minute < 10 ? '0' + minute: minute
		return `${hours}:${minute} ${period}`
	});

	const info = computed(()  => {
		let [dayName, month, day, year] = date.value.toString().split(' ');
		return `Will send on ${dayName}, ${month} ${day}, ${year} at ${timePeriod.value}`;
	});

</script>