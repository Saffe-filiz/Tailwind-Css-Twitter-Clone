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
		<div class="inline-flex justify-between items-center mr-1">
			<span  class="px-[15px] h-[30px] rounded-[15px] cursor-pointer flex items-center hover:bg-[#0c14191a] mr-4 rounded-full" v-if="update.date.sending"
			 @click="scrollVisibil(), $emit('date', {})">
				<span class="h-[22px] border-b-2 border-black text-[16px] font-medium">Clear</span>
			</span>
			<button class="h-[30px] px-[15px] bg-[#0f1419] text-[13px] font-bold text-white rounded-[2rem]"
			 :disabled="!!showErrorMassage[0]" :class="{'opacity-70': showErrorMassage[0]}" @click="$emit('date', scheduling), scrollVisibil()">
			    <span v-if="!update.date.sending">Confirm</span>
			    <span v-else>Update</span>
		    </button>
		</div>
	</div>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.438rem] px-3.75">
			<!-- DATE INFO START -->
			<span class="h-0.5">
				<span class="inline-flex items-center" v-if="!showErrorMassage[1]">
					<Calendar/>
				    <span class="text-[12px] text-[#536471]">{{setTimeInfo}}</span>
				</span>
			</span>
			<!-- DATE INFO END -->
		<div>
		<span class="text-[15px] text-[#536471]">Date</span>
		    <div class="flex flex-row justify-between">
		    	<!-- SELECT MONTH START -->
	             <SelectBox class="w-[17.125rem]" name="Month">
	             	  <select class="sectionStyle" v-model="scheduling.date[1]">
			            <option v-for="(munth, index) in getMonths" :key="index" :value="index" :selected="index == scheduling.date[1]">{{munth}}</option>
		            </select> 
	             </SelectBox>
	            <!-- SELECT MONTH END -->
	            <!-- SELECT DAY START -->
	            <SelectBox class="w-[7.875rem]" name="Day">
	            	<select class="sectionStyle" v-model="scheduling.date[2]">
			            <option v-for="(day, index) in getMonthDay" :key="index" :value="day" :selected="day == scheduling.date[2]">{{day}}</option>
		            </select>
	            </SelectBox>
	            <!-- SELECT DAY END -->
	            <!-- SELECT YEAR START -->
	            <SelectBox class="w-[9.063rem]" name="Year">
	            	<select class="sectionStyle"  v-model="scheduling.date[0]">
			            <option v-for="(year, index) in [2024, 2023, 2022]" :key="index" :selected="year == scheduling.date[0]">{{year}}</option>
		            </select>
	            </SelectBox>
	            <!-- SELECT YEAR END -->
		    </div>
		    <span class="text-[14px] text-[#f4212e]">{{errorMassageForDate}}</span>
		</div>
		<!-- TIME SECTION START -->
		<div>
		<span class="text-[15px] text-[#536471]">Time</span>
			<div class="w-auto flex flex-row gap-[11px]">
				<!-- SELECT HOURS START -->
	            <SelectBox class="w-[11.375rem]" name="Hour">
		            <select class="sectionStyle" v-model="scheduling.date[3]">
			            <option v-for="(hours, index) in 24" :key="index" :value="index" :selected="hours == scheduling.date[3]">{{formatNumber(hours -1)}}</option>
		            </select> 
	            </SelectBox>
	            <!-- SELECT HOURS END -->
	            <!-- SELECT MINUTE START --> 
	             <SelectBox class="w-[11.375rem]" name="Minute">
		            <select class="sectionStyle"  v-model="scheduling.date[4]">
			            <option v-for="(minute, index) in 60" :key="index" :value="index" :selected="minute == scheduling.date[4]">{{formatNumber(minute -1)}}</option>
		            </select> 
	            </SelectBox>
	            <!-- SELECT MINUTE END -->
		    </div>
		    <span class="text-[14px] text-[#f4212e]" v-if="showErrorMassage[2]">{{errorMassageForHours}}</span>
		</div>
		<!-- TIME SECTION END -->
		<div class="w-full" >
			<span class="text-[16px] text-[#536471]">Time zone</span>
			<h4>GMT+03:00</h4>
		</div>
		</div>
	</div>
    <div class="w-full h-[2.813rem] px-3.75 border-t border-[#cfd9de]"></div>
</article>
</template>

<script setup>
	import { inject, ref, computed, onMounted, reactive, watch } from 'vue';
	import DownArrow from './icons/DownArrow.vue';
	import Calendar from './icons/NewPostIcons/Calendar.vue';
	import SelectBox from './SelectBox.vue'

	const scrollVisibil = inject('scrollVisibil');

	// POST SEND DATE START
	const scheduling = reactive({
		'info': null,
	    'date': ['', '', '', '', ''],
	    'sending': true,
	})

	// SET NEW DATE START

	// Date prop
	let update = defineProps({date: Object});  

    onMounted(() => currentTime());
	// Set new date
	const currentTime = () => {
		let dateUpdata = update.date
		let date = currentDate.value
		date.forEach( (item, index) =>  scheduling.date[index] = dateUpdata.date?.[index] || item )
	}
	// SET NEW DATE END

	const currentDate = computed(() => {
		let date = new Date();
		return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()];
	})

	// Date info
	const setTimeInfo = computed(() => {
		let [dayName, month, day, year] = setTime.value.toString().split(' ');
		let info = `Will send on ${dayName}, ${month} ${day}, ${year}  at ${timePeriod.value}`;
		scheduling.info = info
		return info;
	});

	// Format time period
	const timePeriod = computed(() => {
		let hours = scheduling.date[3];
		let minute = scheduling.date[4];
		let period = hours < 12 ? 'AM': 'PM';
		let formatHours = hours % 12 == 0 ?  12: hours % 12
		return `${formatHours}:${formatNumber.value(minute)} ${period}`
	})

	// Formant number 
	const formatNumber = computed(() => (num) => num < 10 ? '0' + num: num)

	// Release date
	const setTime = computed(() => {
		return new Date(scheduling.date[0], scheduling.date[1], scheduling.date[2], scheduling.date[3], scheduling.date[4]);;
	})

	// Get month with name
	const getMonths = computed(() => {
		return Array.from({length: 11}, (_, munth) => new Date(scheduling.date[0], munth, 1).toLocaleString('en', { month: 'long' }));
	});

	// Get number days
	const getMonthDay = computed(() => {
		let day = new Date(scheduling.date[0], scheduling.date[1] +1, 0).getDate();
		return Array.from({length: day}, (_, day) => day +1);
	})

	let errorMassageForDate = ref('');
	let errorMassageForHours = ref('');
	const showErrorMassage = computed(() => {
		let [errorDate, errorHours] = [errorMassageForDate.value, errorMassageForHours.value];
		return [errorDate || errorHours, errorDate && !errorHours, !errorDate && errorHours];
	});
    // Error messages
	watch( scheduling.date, (value) => {
		let [year, month, day, hours, minute] = value;
		let currentTime = currentDate.value
		let calculateMonthRange = (year - currentTime[0]) * 12;
		calculateMonthRange -= currentTime[1];
		calculateMonthRange += month;
		let [past, future] = ['You can’t schedule a Tweet to send in the past.', 'You can’t schedule a Tweet more than 18 months in the future.'];

		 if(calculateMonthRange < 0){
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange < 0 == true && day < currentTime[2]) {
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange == 0 && day < currentTime[2]) {
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange >= 18){
		 	errorMassageForDate.value = future;
		 }else if(day == currentTime[2] && calculateMonthRange == 0 && hours < currentTime[3]){
		 	errorMassageForHours.value = past;
		 }else if(day == currentTime[2] && calculateMonthRange == 0 && hours == currentTime[3] && minute < currentTime[4]){
		 	errorMassageForHours.value = past;
		 }else {
		 	errorMassageForDate.value = '';
		 	errorMassageForHours.value = '';
		 }
	})

	// POST SEND DATE END

</script>