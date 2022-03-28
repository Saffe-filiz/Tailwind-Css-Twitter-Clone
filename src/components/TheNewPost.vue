<template>
	<article class="w-full min-h-[6.375rem] h-auto py-1 px-3.75 inline-flex flex-row justify-betweenr">
	<div class="w-[3.563rem]">
		<div class="w-[46px] h-[46px] bg-black rounded-full"></div>
	</div>
	<div class="w-full flex flex-col">
		<div class="w-full">
		    <div class="w-full min-h-[49px] h-auto py-2" @click="whoCanAnswer = true">
		     <div class="w-[507px] relative">
		     <div class="w-full pl-2.75 outline-none bg-transparent text-transparent z-10 relative"
		      contenteditable  @input="takePost"></div>
		     <div class="w-full pl-2.75 whitespace-normal text-black outline-none bg-transparent absolute top-0 left-0 z-1" contenteditable v-html="post"></div>
		     </div>
		    </div>
		    <div class="w-full h-auto">
		    	<ThePoll v-if="showThePoll" @hiddePoll="(hidde) => showThePoll = hidde"/>
		    </div>
		        <div class="w-full h-[35px] border-b border-min-border-color pl-2" v-if="whoCanAnswer">
		    	<span class="w-auto h-auto inline-flex items-center flex-row">
		    		<svg viewBox="0 0 24 24" class="w-[15px] h-[15px] mr-1" fill="#1d9bf0" 
		    		><g><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z"></path></g></svg>
		    		<p class="text-[#1d9bf0]">Everyone can replay</p>
		    	</span>
		    </div>
	    </div>
	    <div class="w-auto h-[45px] inline-flex justify-between items-center px-0.5">
	    	<div class="w-auto h-full inline-flex flex-row items-end justify-between">
	    		<Madia/>
	    		<Gift/>
	    		<Emoji/>
				<Poll @click="showThePoll = true"/>
	    		<Schedule/>
	    		<Mark/>
	    	</div>
	    	<div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    		<div class="w-auto h-auto inline-flex mr-2.75" v-show="showContent">
	    		   <TheCircle :post="postResult.length"/>
	    		   <div class="w-px h-[29px] ml-[9px] mr-2.75 bg-[#c0d0d8]"></div>
	    		   <Plus/>
	    		</div>
	    		<button class="w-[4.563rem] h-8 bg-btn-bg-color text-white rounded-[2rem]">Tweet</button>
	    	</div>
	    </div>
	</div>
    </article>
</template>

<script setup>
	import { ref, computed } from 'vue';
 	import ThePoll from './ThePoll.vue'
	//import TheSchedule from './TheSchedule.vue'
	import TheCircle from './TheCircle.vue';
	import Madia from './icons/Madia.vue';
	import Gift from './icons/Gift.vue';
	import Emoji from './icons/Emoji.vue';
	import Poll from './icons/Poll.vue';
	import Schedule from './icons/Schedule.vue';
	import Plus from './icons/Plus.vue';
	import Mark from './icons/Mark.vue';




    let postResult = ref('');
    let showThePoll = ref(false);
    let whoCanAnswer = ref(false);
	let showCircle = ref(false);
	let showContent = computed(() => postResult.value.length > 0)

	const takePost = (e) =>  postResult.value = e.target.innerText;

	const post = computed(() => {
		let text = postResult.value
        let owerWrite = new RegExp(`(.\{${text.length - 280}\})\n*\$`, 'gi');
        let hashTag = new RegExp(/\#\w+|\@\w+/, 'gi');
        return text.replace(owerWrite, e => {
           return `<span class="owerWriteBg">${e.replace(hashTag, x => `<span class="hastag">${x}</span>`)}</span>`
        }).replace(hashTag, x => `<span class="hastag">${x}</span>`)
	})



</script>

