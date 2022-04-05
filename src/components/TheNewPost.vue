<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 px-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-[46px] h-[46px] bg-black rounded-full hi"></div>
	</div>
	<div class="w-full flex flex-col"> 
		<div class="w-full h-auto">
			<!-- TextArea Start -->
			<TheImageDragArea @dragover="draggableAreaActive = true">
		        <TextArea @post="(text) => post = text" @click="whoCanAnswer = true"/>
		    </TheImageDragArea>
		    <!-- Poll Form Start --> 
		     <div>
		    	<ThePoll v-if="showThePollForm" @hiddePoll="(hidde) => showThePollForm = hidde"/>
		    </div>
		    <!-- Poll Form End --> 
		    <div class="w-full h-[35px] border-b border-min-border-color pl-2" v-if="whoCanAnswer">
		        <span class="w-auto h-auto inline-flex items-center flex-row">
		            <World class="w-[15px] h-[15px] mr-1"/>
		            <p class="text-[#1d9bf0]">Everyone can replay</p>
		        </span>
            </div>
		 </div>
		    <!-- TestArea End -->
	    <div class="w-auto h-[45px] inline-flex justify-between items-center px-0.5">
	        <!-- Icons Area Start -->	
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    		<label for="image">
	    			<Madia/>
	    			<input type="file" class="hidden" id="image" @change="imagePrevew"  multiple="multiple" 
	    			accept="image/png, image/gif, image/jpeg">
	    		</label>
	    		<Gift/>
	    		<Emoji/>
			    <Poll @click="showThePollForm = true"/>
	    		<Schedule @click="scrollHidden(), showTheScheduleForm = true"/>
	    		<Mark/>
	    	</div>
	    	<!-- Icons Area End -->
	    	<div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    		<div class="w-auto h-auto inline-flex mr-2.75" v-show="post">
	    		    <TheCircle :post="post.length"/>
	    		    <div class="w-px h-[29px] ml-[9px] mr-2.75 bg-[#c0d0d8]"></div>
	    		    <div class="w-[23px] flexCenter ">
	    		   	    <div class="w-full h-[23px] flexCenter rounded-full border border-b border-min-border-color">
	    		   	        <Plus class="w-3.75 h-3.75"/>
	    		        </div>
	    		   </div>
	    		</div>
	    		<button class="w-[4.563rem] h-8 bg-btn-bg-color text-white rounded-[2rem]">Tweet</button>
	    	</div>
	    </div>
	</div>
    </article>
    <PopUp v-if="showTheScheduleForm" @click="showTheScheduleForm = false, scrollVisibil()" >
      	<TheSchedule v-on:click.stop/>
    </PopUp>
</template>

<script setup>
	import { ref, computed, inject, provide } from 'vue';
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
	import Plus from './icons/Plus.vue';

	let whoCanAnswer = ref(false);

    
    let post = ref(''); // Take Post Text

    let showThePollForm = ref(false); // Show Poll Form
	

	const draggableAreaActive = ref(false);
	const images = ref([]); // Take image.

    const imagePrevew = (e) => {
		let image = e.target.files || e.dataTransfer.files
		for(let index = 0; index < image.length; index++){
			images.value.push(URL.createObjectURL(image[index]))
		}
		draggableAreaActive.value = false
	}

	provide('imagePrevew', imagePrevew);
	provide('images', images);
	provide('draggableAreaActive', draggableAreaActive);

	const scrollHidden = inject('scrollHidden');
	const scrollVisibil = inject('scrollVisibil');
	const showTheScheduleForm = inject('showTheScheduleForm');

</script>
