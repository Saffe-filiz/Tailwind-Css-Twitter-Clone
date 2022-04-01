<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 px-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-[46px] h-[46px] bg-black rounded-full"></div>
	</div>
	<div class="w-full flex flex-col">
		<div class="w-full">
			<!-- TextArea Start -->
		      <div class="w-full min-h-[49px] h-auto py-2"  
		      :class="{dragArea}" 
		      @dragover="dragArea = true"
		      @dragleave="dragArea = false" 
		      @click="whoCanAnswer = true, showPlaceHolder = false">
		            <div class="w-[507px] relative">
		                 <div class="w-full pl-2.75 outline-none relative z-10 " 
		                 contenteditable="true" 
		                 @input="takePost"></div>
		                 <span class="top-0 left-2.5 absolute text-[#71767b] pointer-events-none" 
		                 v-if="showPlaceHolder">What's happening</span>
		            </div>
		      <!-- TextArea Start -->
		      </div>
		      <div class="w-full h-auto">
		    	      <ThePoll v-if="showThePoll" @hiddePoll="(hidde) => showThePoll = hidde"/>
		      </div>
		      <div class="w-full h-[35px] border-b border-min-border-color pl-2" v-if="whoCanAnswer">
		    	<span class="w-auto h-auto inline-flex items-center flex-row">
		    		<World class="w-[15px] h-[15px] mr-1"/>
		    		<p class="text-[#1d9bf0]">Everyone can replay</p>
		    	</span>
		    </div>
	      </div>
	      <div class="w-auto h-[45px] inline-flex justify-between items-center px-0.5">
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    		<label for="image">
	    			<Madia/>
	    			<input type="file" class="hidden" id="image">
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
      	    <TheSchedule v-on:click.stop 
      	    @showTheSchedule="( hidden ) => showTheSchedule = hidden"/>
      </PopUp>
</template>

<script setup>
	import { ref, computed, provide } from 'vue';
 	import ThePoll from './ThePoll.vue'
	import PopUp from './PopUp.vue'
	import TheCircle from './TheCircle.vue';
	import TheSchedule from './TheSchedule.vue'
	import Madia from './icons/NewPostIcons/Madia.vue';
	import Gift from './icons/NewPostIcons/Gift.vue';
	import Emoji from './icons/NewPostIcons/Emoji.vue';
	import Poll from './icons/NewPostIcons/Poll.vue';
	import Schedule from './icons/NewPostIcons/Schedule.vue';
	import World from './icons/NewPostIcons/World.vue';
	import Mark from './icons/NewPostIcons/Mark.vue';
	import Plus from './icons/Plus.vue';




    let post = ref('');
    let showPlaceHolder = ref(true);
    let showThePoll = ref(false);
    let showTheSchedule = ref(false);
    let whoCanAnswer = ref(false);
    let showCircle = ref(false);
    let dragArea = ref(false);

	let showContent = computed(() => post.value.length > 0);

	const takePost = (e) =>  post.value = e.target.innerText;

	const owerFlowHidden = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'hidden';	
	}

	const owerFlowAuto = () => {
		let body = document.querySelector('body')
		body.style.overflow = 'auto'
		showTheSchedule.value = false
	}

	provide('owerFlowAuto', owerFlowAuto)

</script>
