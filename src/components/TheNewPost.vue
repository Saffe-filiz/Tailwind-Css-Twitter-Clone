<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 pl-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-10.75 h-10.75 bg-black rounded-full"></div>
	</div>
	<div class="w-full flex flex-col"> 
		<div class="w-full h-auto">
			<!-- TEXTAREA START -->
			<!-- POST Schedule INFO START -->
			<div v-if="date.info" class="w-[516px] h-[17.5px] pl-2 inline-flex hover:underline cursor-pointer">
				<!-- CALENDER ICON COMPONENT START  -->
				<Calendar/> 
				<!-- CALENDER ICON COMPONENT END  -->
				<span class="text-[12px] text-[#536471]">{{date.info}}</span>
			</div>
			<!-- POST Schedule INFO END -->
			<!-- IMAGE DRAG AREA START -->
			<imageDragArea @dragover="draggableAreaActive = true">
				<!-- TEXT AREA START -->
		        <TextArea @post="(text) => post = text" @click="whoCanAnswer = true"/>
		        <!-- TEXT AREA END -->
		    </imageDragArea>
		    <!-- IMAGE DRAG AREA END -->
		    <!-- POLL FORM START --> 
		     <div>
		    	<ThePoll v-if="showPoll" @hiddePoll="(pollObject) => poll(pollObject)"  :pollData="pollFormData"/>
		    </div>
		    <!-- POLL FORM EMD --> 
		   <TheWhoCanReply  v-if="whoCanAnswer || selected.gif || selected.image" @whoCanReply="(value) => whoCanReply = value "/>
		 </div>
		 <!-- TEXTAREA END -->
	    <div class="w-auto h-[45px] inline-flex justify-between items-center pr-4">
	        <!-- ICONS AREA START -->	
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    		<label for="img" :class="{'pointer-events-none': images.length == 4 || selected.gif || showPoll}">
	    	        <Madia :isActive="images.length == 4 || selected.gif || showPoll"/>
	    			<input  type="file" id="img" class="hidden" @change="imgUpdate" multiple="multiple" :accept="[selected.image ? 'image/png,image/jpeg':'']" >
	    		</label>
	    		<Gift :isActive="selected.image || selected.gif || showPoll"/>	    	    
			   	<Poll @click="showPoll = true" :isActive="selected.gif || selected.image"  />
	    		<Emoji/>
	    		<Schedule :isActive="showPoll" @click="scrollHidden(), showTheScheduleForm = true"/>
	    		<Mark/>
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
   <!-- IMAGE UPDATE ERROR START --> 
    <div class="flex justify-center items-center text-[14px] text-white w-[323px] h-[40px] bg-[#1da1f2] rounded fixed inset-x-[35%]  bottom-[20px] z-10" v-if="selected.imageError">
        Please choose either 1 GIF or up to 4 photos.
    </div>
     <!-- IMAGE UPDATE ERROR END --> 
</template>

<script setup>
	import { ref, computed, inject, provide, reactive, watch } from 'vue';
	// Component
 	import ThePoll from './ThePoll.vue'
	import PopUp from './PopUp.vue'
	import TheCircle from './TheCircle.vue';
	import TheSchedule from './TheSchedule.vue';
	import TextArea from './TextArea.vue';
	import imageDragArea from './imageDragArea.vue';
	import TheWhoCanReply from './TheWhoCanReply.vue';
    // Icons 	
	import Madia from './icons/NewPostIcons/Madia.vue';
	import Gift from './icons/NewPostIcons/Gift.vue';
	import Emoji from './icons/NewPostIcons/Emoji.vue';
	import Poll from './icons/NewPostIcons/Poll.vue';
	import Schedule from './icons/NewPostIcons/Schedule.vue';
	import Mark from './icons/NewPostIcons/Mark.vue';
	import Calendar from './icons/NewPostIcons/Calendar.vue';
	import Plus from './icons/Plus.vue';

	let whoCanAnswer = ref(false);

	let date = ref({})

    const wait = ms => setTimeout(() => console.log('test') , ms)
     
    let post = ref(''); // Take post text

    let whoCanReply = ref('Everyone')

    const images = ref([]); // Take image.
	let draggableAreaActive = ref(false); // Drag area is aktive chake
	let selected = reactive({
		gif: false,
		image: false,
		imageError: false,
	})

	const imageError = () => [selected.imageError = true, setTimeout(() => selected.imageError = false , 3000)];
    
    const imgUpdate = (e) => {
    	draggableAreaActive.value = false
    	if(images.value.length == 4) return imageError();
		let image = e.target.files || e.dataTransfer.files
	    let updateType = [];
	    for(let index = 0; index < image.length; index++){
	   		let src = image[index].name.split('.');
	   		updateType.push(src[src.length -1]);
	    }
	    let indexOf = updateType.indexOf('gif')
	    if(updateType.length == 1 && indexOf == 0){
	    	images.value.push(URL.createObjectURL(image[0]))
	    	selected.gif = true
	    }else if(updateType.length > 4 || indexOf > 0){
	    	return imageError()
	    }else {
	    	Array.from({length: image.length}, (_, index) =>  images.value.push(URL.createObjectURL(image[index])))
	    	selected.image = true
	    }
	     e.target.value = ''
	}

	provide('imagePrevew', imgUpdate); // Going to image drag area component
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
		if(!pollFormData.value) return;
		let date = new Date();
		let [day, hours, minute] =  [...pollFormData.value.pollLength].map(Number)
		date.setDate(date.getDate() + day); 
		date.setHours(date.getHours() + hours);
		date.setMinutes(date.getMinutes() + minute);
        return date
	})

	watch(images.value, (oldValue, newValue) => oldValue == '' ? Object.keys(selected).map( v => selected[v] = false): '')
</script>
