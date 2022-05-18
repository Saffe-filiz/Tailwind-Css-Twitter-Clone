<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 pl-3.75 inline-flex flex-row justify-betweenr">
	<UserProfileImage :size="10.75" class="mr-2"/>
	<div class="w-full flex flex-col"> 
		<div class="w-full h-auto">
			<TheScheduleInfo :info="date.info" @click="showTheScheduleForm = true"/>
			<DragArea @dragover="draggableAreaActive = true" :permission="[selected.gif, selected.image, selected.showPoll]">
		        <TextArea @post="(text) => post.massage = text" @click="whoCanAnswer = true"/>
		        <ThePoll v-if="selected.showPoll" @hiddePoll="(pollObject) => pollData(pollObject)"  :pollData="pollFormData"/>
		    </DragArea>
		   <TheWhoCanReply v-if="whoCanAnswer || selected.gif || selected.image || selected.showPoll" @whoCanReply="(value) => selected.whoCanReply = value "/>
		 </div>
	    <div class="w-auto h-[45px] inline-flex justify-between items-center pr-4">
	    	<TheNewPostAttachments :attachment="selected" :imagesCount="images.length"/>
	    	<div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    		<div class="w-auto h-auto inline-flex mr-2.75" v-show="post.massage">
	    		    <TheCircle :post="post.massage.length"/>
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
      	<!--<TheSchedule v-on:click.stop @date="(dateScheduling) => date = dateScheduling" :date="date" />-->
      	<TheGifts v-on:click.stop/>
    </PopUp>
    <!-- POPUP COMPONENT END --> 
  <TheDragAreaErorrMassage :error="[selected.imageError, selected.showPoll]"/> 
</template>

<script setup>
	import { ref, computed, inject, provide, reactive, watch } from 'vue';

 	import ThePoll from './ThePoll.vue'
	import PopUp from './PopUp.vue'
	import TheCircle from './TheCircle.vue';
	import TheSchedule from './TheSchedule.vue';
	import TextArea from './TextArea.vue';
	import DragArea from './DragArea.vue';
	import TheWhoCanReply from './TheWhoCanReply.vue';
	import TheGifts from './TheGifts.vue';
	import TheNewPostAttachments from './TheNewPostAttachments.vue';
	import TheScheduleInfo from './TheScheduleInfo.vue';
	import UserProfileImage from './UserProfileImage.vue';
	import TheDragAreaErorrMassage from './TheDragAreaErorrMassage.vue';
    // Icons 	
	import Plus from './icons/Plus.vue';

	let whoCanAnswer = ref(false);

	let date = ref({})

    const images = ref([]); // Take image.
	let draggableAreaActive = ref(false); // Drag area is aktive chake
	let selected = reactive({
		gif: false,
		image: false,
		imageError: false,
		showPoll: false,
		whoCanReply: 'Everyone',
	})

    // Image upload error massage
	const imageError = () => [selected.imageError = true, setTimeout(() => selected.imageError = false , 3000)];
    
    const uploadImage =  (e) => {
    	draggableAreaActive.value = false
    	let draggedMadiaCount = e.dataTransfer?.files?.length ?? 0;
    	let uploadMadiaCount = images.value.length;
    	if(selected.showPoll || selected.gif || draggedMadiaCount > 4 || uploadMadiaCount >= 4) return imageError();

    	let image = e.target.files || e.dataTransfer.files;
    	let isGif =  Array.from({length: image.length}, (_, index) => image[index].name.split('.').indexOf('gif')).includes(1)

    	if(uploadMadiaCount > 0 && isGif || draggedMadiaCount > 1 && isGif){
    		selected.image = true
    		return imageError();
    	}else if(uploadMadiaCount == 0 && isGif || draggedMadiaCount == 1 && isGif){
    		selected.gif = true
    		images.value.push((window.URL ? URL : webkitURL).createObjectURL(image[0]))
    	}else {
    		selected.image = true
    	    Array.from({length: image.length}, (_, index) => images.value.push(window.webkitURL.createObjectURL(image[index])));
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

    // Emit from poll component
	const pollData = (obj) => {
		selected.showPoll = obj.showPoll;
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

	watch(images.value, (oldValue, newValue) => oldValue == '' ? Object.keys(selected).map( v => v == 'whoCanReply' ? selected[v] : selected[v] = false): '' )

	const post = reactive({
    	user: null,
    	username: null,
    	massage: '',
    	whoCanReply: selected.whoCanReply,
    	date: null,
    	Schedule: null,
    	poll: null,
    	Image: null,

    });

</script>
