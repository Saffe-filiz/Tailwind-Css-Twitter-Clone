<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 px-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-[46px] h-[46px] bg-black rounded-full"></div>
	</div>
	<div class="w-full flex flex-col">
		<div class="w-full">
			<!-- TextArea Start -->
		    <TextArea @post="(text) => post = text" >
		        <div class="w-[507px] ml-2 rounded-2xl overflow-hidden">
		      	    <div v-if="media"><img :src="media"></div>
		    	    <ThePoll v-if="showThePoll" @hiddePoll="(hidde) => showThePoll = hidde"/>
		        </div>
		    </TextArea>
		    <!-- TestArea End -->
	      </div>
	      <div class="w-auto h-[45px] inline-flex justify-between items-center px-0.5">
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    		<label for="image">
	    			<Madia/>
	    			<input type="file" class="hidden" id="image" @change="takeMadie">
	    		</label>
	    		<Gift/>
	    		<Emoji/>
			    <Poll @click="showThePoll = true"/>
	    		<Schedule 
	    		@click="owerFlowHidden(), showTheSchedule = true"/>
	    		<Mark/>
	    	</div>
	    	<div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    		<div class="w-auto h-auto inline-flex mr-2.75" v-show="showContent">
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
      <PopUp v-if="showTheSchedule" @click="showTheSchedule = false, owerFlowAuto()" >
      	    <TheSchedule v-on:click.stop/>
      </PopUp>
</template>

<script setup>
	import { ref, computed, provide } from 'vue';
	// Component
 	import ThePoll from './ThePoll.vue'
	import PopUp from './PopUp.vue'
	import TheCircle from './TheCircle.vue';
	import TheSchedule from './TheSchedule.vue';
	import TextArea from './TextArea.vue';
    // Icons 	
	import Madia from './icons/NewPostIcons/Madia.vue';
	import Gift from './icons/NewPostIcons/Gift.vue';
	import Emoji from './icons/NewPostIcons/Emoji.vue';
	import Poll from './icons/NewPostIcons/Poll.vue';
	import Schedule from './icons/NewPostIcons/Schedule.vue';
	import Mark from './icons/NewPostIcons/Mark.vue';
	import Plus from './icons/Plus.vue';


    
    let showThePoll = ref(false);
    let showTheSchedule = ref(false);
    let media = ref(null)
    let post = ref('');
	let showContent = computed(() => post.value.length > 0);

	const owerFlowHidden = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'hidden';	
	}

	const owerFlowAuto = () => {
		let body = document.querySelector('body')
		body.style.overflow = 'auto'
		showTheSchedule.value = false
	}

	const takeMadie = (e) => {
		let image = e.target.files || e.dataTransfer.files
		if(!image.length) return;
		media.value = URL.createObjectURL(image[0]);
	}

    provide('mediaUpdate', takeMadie)
	provide('owerFlowAuto', owerFlowAuto)

</script>
