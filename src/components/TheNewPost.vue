<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 pl-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-[44px] h-[44px] bg-black rounded-full hi"></div>
	</div>
	<div class="w-full flex flex-col"> 
		<div class="w-full h-auto">
			<!-- TEXTAREA START -->
			<!-- POST Schedule INFO START -->
			<div v-if="date.info" class="w-[516px] h-[17.5px] pl-2 inline-flex hover:underline cursor-pointer">
				<!-- CALENDER ICON COMPONENT START  -->
				<Calendar/> 
				<!-- CALENDER ICON COMPONENT END  -->
				<span class="text-[12px] text-[#536471]"> {{date.info}}</span>
			</div>
			<!-- POST Schedule INFO END -->
			<!-- IMAGE DRAG AREA START -->
			<TheImageDragArea @dragover="draggableAreaActive = true">
				<!-- TEXT AREA START -->
		        <TextArea @post="(text) => post = text" @click="whoCanAnswer = true"/>
		        <!-- TEXT AREA END -->
		    </TheImageDragArea>
		    <!-- IMAGE DRAG AREA END -->
		    <!-- POLL FORM START --> 
		     <div>
		    	<ThePoll v-if="showPoll" @hiddePoll="(pollObject) => poll(pollObject)"  :pollData="pollFormData"/>
		    </div>
		    <!-- POLL FORM EMD --> 
		    <div class="w-[516px] h-[35px] border-b border-min-border-color pl-2" v-if="whoCanAnswer">
		        <span class="w-auto h-auto inline-flex items-center flex-row">
		            <World class="w-[15px] h-[15px] mr-1"/>
		            <p class="text-[#1d9bf0]">Everyone can replay</p>
		        </span>
            </div>
		 </div>
		 <!-- TEXTAREA END -->
	    <div class="w-auto h-[45px] inline-flex justify-between items-center pr-4">
	        <!-- ICONS AREA START -->	
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    		<label for="image">
	    			<span  class="group tooltipContainer">
	    			    <Madia/>
	    			    <input type="file" class="hidden" id="image" @change="imagePrevew"  multiple="multiple" accept="image/png, image/gif, image/jpeg">
	    			    <span class="tooltip">Image</span>
	    		   </span>
	    		</label>
	    		<span  class="group tooltipContainer">
	    			<Gift/>
	    			<span class="tooltip">Gift</span>
	    		</span>
	    		<span class="group tooltipContainer">
	    			<Emoji/>
	    			<span class="tooltip">Emoji</span>
	    		</span>
			   <span  class="group tooltipContainer">
			   	    <Poll @click="showPoll = true"/>
			   	    <span class="tooltip">Poll</span>
			   </span>
	    		<span class="group tooltipContainer ">
	    			<Schedule @click="scrollHidden(), showTheScheduleForm = true"/>
	    			<span class="tooltip">Schedule</span>
	    		</span>
	    		<span class="group tooltipContainer">
	    			<Mark/>
	    			<span class="tooltip">Schedule</span>
	    		</span>
	    	</div>
	    	<!-- ICONS AREA END -->
	    	<div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    		<div class="w-auto h-auto inline-flex mr-2.75" v-show="post">
	    			<!-- POST LATTER PROGRESS CIRCLE START -->
	    		    <TheCircle :post="post.length"/>
	    		    <!-- POST LATTER PROGRESS CIRCLE END -->
	    		    <div class="w-px h-[29px] ml-[9px] mr-2.75 bg-[#c0d0d8]"></div>
	    		    <div class="w-[23px] flexCenter ">
	    		   	    <div class="w-full h-[23px] flexCenter rounded-full border border-b border-min-border-color">
	    		   	        <Plus class="w-3.75 h-3.75"/>
	    		        </div>
	    		   </div>
	    		</div>
	    		<!-- SEND NEW TWEET BUTTON START --> 
	    		<button class="w-auto h-8 px-[15px] bg-btn-bg-color text-white rounded-[2rem]">
	    			<span v-if="date.info" @click="updateDate()">Schedule</span>
	    			<span v-else>Tweet</span>
	    		</button>
	    		<!-- SEND NEW TWEET BUTTON START --> 
	    	</div>
	    </div>
	</div>
    </article>
    <!-- POPUP COMPONENT START --> 
    <PopUp v-if="showTheScheduleForm" @click="showTheScheduleForm = false, scrollVisibil()" >
      	<TheSchedule v-on:click.stop @date="(dateScheduling) => date = dateScheduling" :date="date" />
    </PopUp>
    <!-- POPUP COMPONENT END --> 
</template>

<script setup>
	import { ref, computed, inject, provide, reactive } from 'vue';
	// Component
 	import ThePoll from './ThePoll.vue'
	import PopUp from './PopUp.vue'
	import TheCircle from './TheCircle.vue';
	import TheSchedule from './TheSchedule.vue';
	import TextArea from './TextArea.vue';
	import TheImageDragArea from './TheImageDragArea.vue';
    // Icons 	
	import Madia from './icons/NewPostIcons/Madia.vue';
	import Gift from './icons/NewPostIcons/Gift.vue';
	import Emoji from './icons/NewPostIcons/Emoji.vue';
	import World from './icons/NewPostIcons/World.vue';
	import Poll from './icons/NewPostIcons/Poll.vue';
	import Schedule from './icons/NewPostIcons/Schedule.vue';
	import Mark from './icons/NewPostIcons/Mark.vue';
	import Calendar from './icons/NewPostIcons/Calendar.vue';
	import Plus from './icons/Plus.vue';

	let whoCanAnswer = ref(false);

	let date = ref({})

    const wait = ms => setTimeout(() => console.log('test') , ms)
     
    let post = ref(''); // Take post text

	let draggableAreaActive = ref(false); // Drag area is aktive chake
	const images = ref([]); // Take image.

    const imagePrevew = (e) => {
		let image = e.target.files || e.dataTransfer.files
		for(let index = 0; index < image.length; index++){
			images.value.push(URL.createObjectURL(image[index]))
		}
		draggableAreaActive.value = false
	}

	provide('imagePrevew', imagePrevew); // Going to image drag area component
	provide('images', images); // Going to image drag area component
	provide('draggableAreaActive', draggableAreaActive); // Going to image drag area component

	const scrollHidden = inject('scrollHidden'); // Coming from app vue
	const scrollVisibil = inject('scrollVisibil'); // Coming from app vue
	const showTheScheduleForm = inject('showTheScheduleForm'); // Coming from app vue
    
	let pollFormData = ref(); // Poll form data
	let showPoll = ref(false); // Show poll form

    // Emit from poll component
	const poll = (obj) => {
		showPoll.value = obj.showPoll;
		pollFormData.value = obj.data;
	};
    // Set poll ending date
	const setPollDate = computed(() => {
		if(!pollFormData) return;
		let date = new Date();
		let [day, hours, minute] =  [...pollFormData.value.pollLength].map(Number)
		date.setDate(date.getDate() + day); 
		date.setHours(date.getHours() + hours);
		date.setMinutes(date.getMinutes() + minute);
        return date
	})
</script>
