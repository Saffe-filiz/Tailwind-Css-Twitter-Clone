<template>
	<div class="w-[31.563rem] pt-3 border border-[#cfd9de] rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !showIncressBtn}">
			<span class="w-full h-[53px] border border-[#cfd9de] rounded" 
			v-for="index in numberOfOptions" :key="index">
				<input type="text" name="poll" v-model="questList[index -1]">
			</span>
		</div>
		<div class="w-[3.063rem] relative" v-if="showIncressBtn">
			<span class="block w-[2rem] h-[2rem] ml-1 flexCenter rounded-full absolute bg-black bottom-6" 
			@click="numberOfOptions++">+</span>
		</div>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Days</label>
				<select class="sectionStyle">
				<option>1</option>
			</select>
			</div>
		    <div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Hours</label>
				<select class="sectionStyle">
				<option>0</option>
			</select>
			</div>
			<div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Minutes</label>
				<select class="sectionStyle">
				<option>0</option>
			</select>
			</div>
		</div>
	</div>
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]">Remove Poll</button>
	</div>
</div>
</template>


<script setup>
	import { ref, computed } from 'vue';

	let numberOfOptions = ref(2);
    const questList = ref([]);
    const showIncressBtn = computed(() => numberOfOptions.value < 4 )
</script>