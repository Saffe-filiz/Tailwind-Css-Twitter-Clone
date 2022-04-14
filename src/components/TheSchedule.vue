<template>
	<article class="w-[37.5rem] h-auto rounded-2xl overflow-auto bg-white m-auto mt-7">
	<div class="w-full h-[3.125rem] inline-flex flex-row items-center justify-between px-3.75">
		<div class="flex items-center justify-between ">
			<!-- EXIT BUTTON START -->
		    <span class="w-[2rem] h-[2rem] rounded-full hover:bg-[#0f14191a] cursor-pointer flex items-center justify-center text-[#2d3136] hoverDuration" 
		    @click="scrollVisibil()">&#10005</span>
		    <!-- EXIT BUTTON END -->
			<span class="ml-[1.25rem]">Schedule</span>
		</div>
		<button class="w-[5.2rem] h-[1.938rem] bg-[#0f1419] text-white rounded-[2rem]">Confirm</button>
	</div>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.438rem] px-3.75">
			<!-- SELECTED TIME START -->
			<div><span>Will send on Sun, {{showSelectedTime}} PM</span></div>
			<!-- SELECTED TIME END -->
		<div>
		<span>Date</span>
		    <div class="flex flex-row justify-between">
		    	<!-- SELECT MONTH START -->
			    <div class="w-[16.5rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Mouth</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="month">
			            <option v-for="(month, index) in getMouth" :key="index">{{month}}</option>
		            </select> 
	            </div>	
	            <!-- SELECT MONTH END -->
	            <!-- SELECT DAY START -->
			    <div class="w-[7.813rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Day</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="day">
			            <option v-for="(day, index) in 30" :key="index">{{day}}</option>
		            </select>
	            </div>
	            <!-- SELECT DAY END -->
	            <!-- SELECT YEAR START -->
			    <div class="w-[7.813rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Year</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="year">
			            <option v-for="(year, index) in 3" :key="index">202{{year +1}}</option>
		            </select>
	            </div>
	            <!-- SELECT YEAR END -->
		    </div>
		</div>
		<!-- TIME SECTION START -->
		<div>
		<span>Time</span>
			<div class="w-auto flex flex-row gap-[11px]">
				<!-- SELECT HOURS START -->
				 <div class="w-[11.375rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Hours</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="hours">
			            <option v-for="(hours, index) in 24" :key="index">{{hours}}</option>
		            </select> 
	            </div>
	            <!-- SELECT HOURS END -->
	            <!-- SELECT MINUTE START --> 
	            <div class="w-[11.375rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Minute</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="minute">
			            <option v-for="(minute, index) in 60" :key="index">{{minute}}</option>
		            </select> 
	            </div>
	            <!-- SELECT MINUTE END -->
		    </div>
		</div>
		<!-- TIME SECTION END -->
		<div class="w-full" >
			<p>Time zone</p>
			<h4>GMT+03:00</h4>
		</div>
		</div>
	</div>
    <div class="w-full h-[2.813rem] px-3.75 border-t border-[#cfd9de]"></div>
</article>
</template>

<script setup>
	import { inject, ref, computed, onMounted } from 'vue';
	import DownArrow from './icons/DownArrow.vue';

	const scrollVisibil = inject('scrollVisibil');

	// SET POST RESLIST DATE START

	let selectedMinute = ref('')    // Select relist minute
	let selectedHourse = ref('')   // Select relist hourse
	let selectedDay = ref('')     // Select relist day
	let selectedYear = ref('')   // Select relist year
	let selectedMonth = ref('') // Select relist month

	onMounted(() => selectedDate())

	// Relist date preview
	const selectedDate = () => {
		let month = document.querySelector('#month');
		let day = document.querySelector('#day');
		let year = document.querySelector('#year');
		let hours = document.querySelector('#hours');
		let minute = document.querySelector('#minute');
		selectedMonth.value = month.value;
		selectedDay.value = day.value;
		selectedYear.value = year.value;
		selectedHourse.value = hours.value;
		selectedMinute.value = minute.value
	}

	const showSelectedTime = computed(() => {
		return `${selectedMonth.value} ${selectedDay.value}, at ${selectedYear.value} ${selectedHourse.value}:${selectedMinute.value}`
	})


	const getMouth = computed(() => {
		let month = []
		for(let index = 0; index < 12; index++) {
			month.push(new Date(2022, index, 0).toLocaleString('en', { month: 'long' }));
		}
		return month
		
	})

	// SET POST RESLIST DATE END

	const getMouthDay = (index) => {
		let days = [];
		/*for(let index = 0; index < 12; index++ ){
			days.push(new Date(2022, index, 0).getDate())
		}
		let mouth = document.querySelectorAll('option');*/
	}


</script>