<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 pl-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-10.75 h-10.75 bg-black rounded-full"></div>
	</div>
	<div class="w-full flex flex-col"> 
		<div class="w-full h-auto">
			<!-- TEXTAREA START -->
			<!-- POST Schedule INFO START -->
			<div v-if="date.info" class="w-[512px] h-[17.5px] pl-2 inline-flex hover:underline cursor-pointer">
				<!-- CALENDER ICON COMPONENT START  -->
				<Calendar/> 
				<!-- CALENDER ICON COMPONENT END  -->
				<span class="text-[12px] text-[#536471]">{{date.info}}</span>
			</div>
			<!-- POST Schedule INFO END -->
			<!-- IMAGE DRAG AREA START -->
			<imageDragArea @dragover="draggableAreaActive = true" :permission="[selected.gif, selected.image, showPoll]">
				<!-- TEXT AREA START -->
		        <TextArea @post="(text) => post.massage = text" @click="whoCanAnswer = true"/>
		        <!-- TEXT AREA END -->
		         <!-- POLL FORM START --> 
		        <ThePoll v-if="showPoll" @hiddePoll="(pollObject) => pollData(pollObject)"  :pollData="pollFormData"/>
		        <!-- POLL FORM EMD --> 
		    </imageDragArea>
		    <!-- IMAGE DRAG AREA END -->
		    <!-- POLL FORM START --> 
		   <TheWhoCanReply  v-if="whoCanAnswer || selected.gif || selected.image || showPoll" @whoCanReply="(value) => post.whoCanReply = value "/>
		 </div>
		 <!-- TEXTAREA END -->
	    <div class="w-auto h-[45px] inline-flex justify-between items-center pr-4">
	        <!-- ICONS AREA START -->	
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    	    <Madia :isActive="images.length == 4 ||  selected.gif || showPoll" :madiaType="selected.image"/>
	    		<Gift :isActive="selected.image || selected.gif || showPoll"/>	    	    
			   	<Poll @click="showPoll = true" :isActive="selected.gif || selected.image"  />
	    		<Emoji/>
	    		<Schedule :isActive="showPoll || post.whoCanReply != 'Everyone'" @click="scrollHidden(), showTheScheduleForm = true"/>
	    		<Mark/>
	    	</div>
	    	<!-- ICONS AREA END -->
	    	<div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    		<div class="w-auto h-auto inline-flex mr-2.75" v-show="post.massage">
	    			<!-- POST LATTER PROGRESS CIRCLE START -->
	    		    <TheCircle :post="post.massage.length"/>
	    		    <!-- POST LATTER PROGRESS CIRCLE END -->
	    		    <div class="w-px h-[29px] ml-[9px] mr-2.75 bg-[#c0d0d8]"></div>
	    		    <div class="w-[23px] flexCenter ">
	    		   	    <div class="w-full h-[23px] flexCenter rounded-full border border-b border-min-border-color">
	    		   	        <Plus class="w-3.75 h-3.75"/>
	    		        </div>
	    		   </div>
	    		</div>
	    		<!-- SEND NEW TWEET BUTTON START --> 
	    		<button class="w-auto h-8 px-[15px] bg-btn-bg-color text-white rounded-[2rem]" :class="{'pointer-events-none opacity-50': !post.massage}" @click="sendTweet">
	    			<span v-if="date.info" >Schedule</span>
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
        <span v-if="!showPoll">Please choose either 1 GIF or up to 4 photos.</span>
        <span v-else>You can only have 1 type of attachment</span>
    </div>
     <!-- IMAGE UPDATE ERROR END --> 
</template>

<script setup>
	import { ref, computed, inject, provide, reactive, watch } from 'vue';
	import { useStore } from 'vuex';
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

    const images = ref([]); // Take image.
	let draggableAreaActive = ref(false); // Drag area is aktive chake
	let selected = reactive({
		gif: false,
		image: false,
		imageError: false,
	})

    // Image upload error massage
	const imageError = () => [selected.imageError = true, setTimeout(() => selected.imageError = false , 3000)];
    
    const uploadImage =  (e) => {
    	draggableAreaActive.value = false
    	let draggedMadiaCount = e.dataTransfer?.files?.length ?? 0;
    	let uploadMadiaCount = images.value.length;
    	if(showPoll.value || selected.gif || draggedMadiaCount > 4 || uploadMadiaCount >= 4) return imageError();

    	let image = e.target.files || e.dataTransfer.files;
    	let isGif =  Array.from({length: image.length}, (_, index) => image[index].name.split('.').indexOf('gif')).includes(1)

    	if(uploadMadiaCount > 0 && isGif || draggedMadiaCount > 1 && isGif){
    		selected.image = true
    		return imageError();
    	}else if(uploadMadiaCount == 0 && isGif || draggedMadiaCount == 1 && isGif){
    		selected.gif = true
    		images.value.push(URL.createObjectURL(image[0]))
    	}else {
    		selected.image = true
    	    Array.from({length: image.length}, (_, index) => images.value.push(URL.createObjectURL(image[index])));
    	}
    	e.target.value = ''
	}



	provide('uploadImage', uploadImage); // Going to image drag area component
	provide('images', images); // Going to image drag area component
	provide('draggableAreaActive', draggableAreaActive); // Going to image drag area component

	const scrollHidden = inject('scrollHidden'); // Coming from app vue
	const scrollVisibil = inject('scrollVisibil'); // Coming from app vue
	const showTheScheduleForm = inject('showTheScheduleForm'); // Coming from app vue
    
	let pollFormData = ref(); // Poll form data
	let showPoll = ref(false); // Show poll form

    // Emit from poll component
	const pollData = (obj) => {
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


	const post = reactive({
    	user: null,
    	username: null,
    	massage: '',
    	whoCanReply: 'Everyone',
    	date: null,
    	Schedule: null,
    	poll: null,
    	Image: null,

    }); // Take post text


    const sendTweet = () => useStore.state.tweets.push(post)
</script>
