<template>
	<article class="w-[37.5rem] h-auto rounded-2xl overflow-auto bg-white m-auto mt-7">
	<div class="w-full h-[3.125rem] inline-flex flex-row items-center justify-between px-3">
		<div class="flex items-center justify-between ">
			<!-- EXIT BUTTON START -->
		    <span class="w-[2rem] h-[2rem] rounded-full hover:bg-[#0f14191a] cursor-pointer flex items-center justify-center text-[#2d3136] hoverDuration" 
		    @click="scrollVisibil()">&#10005</span>
		    <!-- EXIT BUTTON END -->
			<span class="ml-[1.7rem]">Schedule</span>
		</div>
		<button class="w-[5.2rem] h-[1.938rem] bg-[#0f1419] text-white rounded-[2rem]">Confirm</button>
	</div>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.438rem] px-3.75">
			<!-- SELECTED TIME START -->
			<div><span>Will send on {{showSelectedTime}}PM</span></div>
			<!-- SELECTED TIME END -->
		<div>
		<span>Date</span>
		    <div class="flex flex-row justify-between">
		    	<!-- SELECT MONTH START -->
			    <div class="w-[16.5rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Mouth</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="monthParentItem">
			            <option v-for="(month, index) in getMonths" :key="index" id="month" :selected="index == getMonthIndex">{{month}}</option>
		            </select> 
	            </div>	
	            <!-- SELECT MONTH END -->
	            <!-- SELECT DAY START -->
			    <div class="w-[7.813rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Day</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="day">
			            <option v-for="(day, index) in 30" :key="index" :selected="index == selectedDay">{{day -1}}</option>
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
			            <option v-for="(hours, index) in 24" :key="index" :selected="index == selectedHourse">{{hours -1}}</option>
		            </select> 
	            </div>
	            <!-- SELECT HOURS END -->
	            <!-- SELECT MINUTE START --> 
	            <div class="w-[11.375rem] sectionMainStyle focusInput relative">
		            <label class="grup-focus-within:text-red-600 ml-2" for="date">Minute</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="minute">
			            <option v-for="(minute, index) in 60" :key="index" :selected="index == selectedMinute">{{minute -1}}</option>
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

	// POST SEND DATE START

	let selectedMinute = ref('');     // Select relist minute
	let selectedHourse = ref('');    // Select relist hourse
	let selectedDay = ref('');      // Select relist day
	let selectedMonth = ref('');   // Select relist month
	let selectedYear = ref(2022); // Select relist year
	let getMonthIndex = ref(0);  // Get month index
	let monthDays = ref();

	onMounted(() => currentTime());


	// Set release date
	const selectedDate = () => {
		let day = document.querySelector('#day');
		let year = document.querySelector('#year');
		let hours = document.querySelector('#hours');
		let month = document.querySelectorAll('#month');
		let minute = document.querySelector('#minute');
		let monthParentItem = document.querySelectorAll('#monthParentItem');
		selectedDay.value = day.value;
		selectedYear.value = year.value;
		selectedHourse.value = hours.value;
		selectedMinute.value =  minute.value;
		month.forEach( (item, index) => {
			if(item.value == monthParentItem[0].value) {
				getMonthIndex.value = index
			}
		})
	};

	// Defult schedule value
	const currentTime = () => {
		let date = new Date();
		getMonthIndex.value = date.getMonth() +1;
		selectedDay.value = date.getDate();
		selectedMinute.value = date.getMinutes();
		selectedHourse.value = date.getHours();
	}

	// Date preview
	const showSelectedTime = computed(() => {
		let date = releaseDate.value
		let [dayName, munth, munthDay, year] = date.toString().split(' ');
		return `${dayName}, ${munth} ${selectedDay.value}, at ${year} ${selectedHourse.value}:${selectedMinute.value}`;
	});
	// Release date
	const releaseDate = computed(() => {
		 return new Date(selectedYear.value, getMonthIndex.value -1, selectedDay.value);
	})

	// Month arr 
	const getMonths = computed(() => {
		let month = [];
		for(let index = 0; index < 12; index++) {
			month.push(new Date(selectedYear.value, index, 0).toLocaleString('en', { month: 'long' }));
		}
		return month;
		
	});

	// POST SEND DATE END




</script>