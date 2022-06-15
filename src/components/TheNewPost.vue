<template>
	<article class="w-full  py-1 px-3.5 inline-flex flex-row">
	<UserProfileImage :size="10.75" class="mr-3"/>
	<div class="w-full flex flex-col justify-between"> 
		<div class="w-full h-auto">
			<TheScheduleInfo :time="updataSchedule.date" @click="modal.openScheduleModal = true" class="pl-2 hover:underline cursor-pointer" v-if="updataSchedule.date"/>
			<DragArea v-memo="[draggableAreaActive]" @dragover="draggableAreaActive = true" :permission="[selected.gif, selected.image, selected.poll]">
		        <TextArea @post="(text) => post.post = text" @click="selected.whoCanAnswer = true"/>
		        <ThePoll v-if="selected.poll" @removePoll="(pollObject) => setPollData(pollObject)" :pollData="pollData"/>
		    </DragArea>
		    <TheWhoCanReply v-if="showWhoCanAwser" @whoCanReply="(value) => selected.whoCanReply = value" :active="updataSchedule.sending"/>
		</div>
	    <div class="w-auto h-[45px] inline-flex justify-between items-center">
	    	<TheAttachments :active="[selected, images.length, updataSchedule.sending]" @showPoll="(value) => selected.poll = value"/>
            <TheNewPostCircleAndSend :massage="post.massage" :date="!updataSchedule.date">
                <button class="w-auto h-8 px-3.75 bg-btn-bg-color text-white rounded-[2rem]" :class="{'opacity-50': !post.post}" :disabled="!post.post">
	                <span v-if="!updataSchedule.date" @click="sendNeWTweet">Tweet</span>
	                <span v-else @click="goToSendNewTweet">Schedule</span>
	            </button>
            </TheNewPostCircleAndSend>
	    </div>
	</div>
    </article>
    <TheDragAreaErorrMassage :error="[selected.imageError, selected.showPoll]"/> 
</template>

<script setup>
	import { ref, computed, inject, provide, reactive, watch } from 'vue';
	import { useStore } from 'vuex';
  
 	import ThePoll from './ThePoll.vue'
	import TextArea from './TextArea.vue';
	import DragArea from './DragArea.vue';
	import TheWhoCanReply from './TheWhoCanReply.vue';
	import TheAttachments from './TheAttachments.vue';
	import TheScheduleInfo from './TheScheduleInfo.vue';
	import UserProfileImage from './UserProfileImage.vue';
	import TheDragAreaErorrMassage from './TheDragAreaErorrMassage.vue';
	import TheNewPostCircleAndSend from './TheNewPostCircleAndSend.vue';
	
    let images = ref([]);
	let draggableAreaActive = ref(false);

	let store = useStore();
    
   

	let pollData = ref(); // Poll form data

	const setPollData = ( obj ) => {
		selected.poll = obj.showPoll;
		pollData.value = obj.data;
	};

	const setPollLength = computed(() => {
		if(!pollData.value) return;
		let date = new Date();
		let [day, hours, minute] =  [...pollData.value.pollLength].map(Number)
		date.setDate(date.getDate() + day); 
		date.setHours(date.getHours() + hours);
		date.setMinutes(date.getMinutes() + minute);
        return date
	})

    let selected = reactive({
		gif: false,
		image: false,
		imageError: false,
		poll: false,
		whoCanAnswer: false,
		whoCanReply: 'Everyone',
	})

	const showWhoCanAwser = computed(() => Object.keys(selected).some( item => selected[item] == true ) )

    // Image upload error massage
	const imageError = () => [selected.imageError = true, setTimeout(() => selected.imageError = false , 3000)];
    
    const uploadImage =  ( e ) => {
    	draggableAreaActive.value = false
    	let draggedMadiaCount = e.dataTransfer?.files?.length ?? 0;
    	let uploadMadiaCount = images.value.length;
    	if(selected.poll || selected.gif || draggedMadiaCount > 4 || uploadMadiaCount >= 4) return imageError();

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
    

    
    const updataSchedule = computed(() => store.getters.getUpdataSchedule);
   
    const goToSendNewTweet = () => {
    	if(!updataSchedule.data){
    		post.date = updataSchedule.value.date;
    		store.commit('setUnSendScheduled', post);
    	}
    }

    const post = reactive({
    	user: null,
    	username: null,
    	post: '',
    	whoCanReply: null,
    	date: null,
    	Schedule: null,
    	poll: null,
    	Image: null,

    });

	provide('uploadImage', uploadImage); // Going to image drag area component
	provide('images', images); // Going to image drag area component
	provide('draggableAreaActive', draggableAreaActive); // Going to image drag area component

	const modal = inject('modal'); // Coming from app vue
    

	watch(images.value, (oldValue, newValue) => oldValue == '' ? Object.keys(selected).map( v => v == 'whoCanReply' ? selected[v] : selected[v] = false): '' )

</script>
