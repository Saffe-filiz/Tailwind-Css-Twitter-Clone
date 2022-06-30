<template>
	<article class="w-full  py-1 px-3.5 inline-flex flex-row">
	<UserProfileImage :size="10.75" class="mr-3"/>
	<div class="w-full flex flex-col justify-between"> 
		<div class="w-full h-auto">
			<TheScheduleInfo  
			    class="pl-2 hover:underline cursor-pointer"
			    :time="updataSchedule.date"
			    @click="modal.openScheduleModal = true" 
			    v-if="updataSchedule.date"/>
			<DragArea 
			    v-memo="[draggableAreaActive]" 
			    @dragover="draggableAreaActive = true" 
			    :permission="[selected.gif, selected.image, selected.poll]">
		        <TextArea 
		            @post="(text) => post.post = text" 
		            @click="selected.whoCanAnswer = true"/>
		        <ThePoll 
		            v-if="selected.poll" 
		            @removePoll="(pollObject) => setPollData(pollObject)" 
		            :pollData="pollData"/>
		    </DragArea>
		    <TheWhoCanReply 
		        v-show="hidden"
		        v-if="showWhoCanAwser" 
		        @whoCanReply="(value) => selected.whoCanReply = value" 
		        :active="updataSchedule.sending"/>  
		</div>
	    <div class="w-auto h-[45px] inline-flex justify-between items-center duration-100" v-show="hidden">
	    	<TheAttachments 
	    	    :active="[selected, images.length, updataSchedule.sending]" 
	    	    @showPoll="(value) => selected.poll = value"/>
            <TheNewPostCircleAndSend 
                :massage="post.post" 
                :date="!updataSchedule.date">
                <button 
                    class="w-auto h-8 px-3.75 bg-btn-bg-color text-white rounded-[2rem] disabled:opacity-50" 
                    :disabled="!post.post">
	                <span v-if="!updataSchedule.date" @click="hiddenA">Tweet</span>
	                <span v-else @click="sendSchedule">Schedule</span>
	            </button>
            </TheNewPostCircleAndSend>
	    </div>
	</div>
    </article>
    <Toast :isActive="showToast" :massage="toastMassage" :date="toastMassageDate"/> 
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
	import Toast from './Toast.vue';
	import TheNewPostCircleAndSend from './TheNewPostCircleAndSend.vue';
	
	const saveToDraft = defineProps({data: Boolean})
	const store = useStore();
    
    let toastMassageDate = ref()
	let toastMassage = ref('');
	let showToast = ref(false)
	let hidden = ref(true)

	const hiddenA = () => {
		hidden.value = false;
		setTimeout(() => hidden.value = true, 1500)
	}

   
	let pollData = ref();

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
		poll: false,
		whoCanAnswer: false,
		whoCanReply: 'Everyone',
	})

	const showWhoCanAwser = computed(() => Object.keys(selected).some( item => selected[item] == true ) );

	let draggableAreaActive = ref(false);

	let images = ref([]);
    
    const uploadImage =  ( e ) => {
    	draggableAreaActive.value = false
    	let draggedMadiaCount = e.dataTransfer?.files?.length ?? 0;
    	let madiaCount = images.value.length;
    	if(selected.poll || selected.gif || draggedMadiaCount > 4 || madiaCount >= 4){
    		showToast.value = !showToast.value;
    		toastMassage.value = 'Please choose either 1 GIF or up to 4 photos.'
    		return;
    	}

    	let image = e.target.files || e.dataTransfer.files;
    	let isGif =  Array.from({length: image.length}, (_, index) => image[index].name.split('.').indexOf('gif')).includes(1)

    	if(madiaCount > 0 && isGif || draggedMadiaCount > 1 && isGif){
    		selected.image = true
    		showToast.value = !showToast.value;
    		toastMassage.value = 'Please choose either 1 GIF or up to 4 photos.'
    		return;
    	}else if(madiaCount == 0 && isGif || draggedMadiaCount == 1 && isGif){
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
    
    const updataSchedule = computed(() => store.getters.getUpdataSchedule);
   

    let post = reactive({
    	user: null,
    	username: null,
    	post: '',
    	whoCanReply: null,
    	date: null,
    	Schedule: null,
    	poll: null,
    	Image: null,

    });

    const sendSchedule = () => {
    	if(!updataSchedule.data){
    		showToast.value = !showToast.value;
    	    toastMassageDate.value =  updataSchedule.value.date
    		post.date = updataSchedule.value.date;
    		store.commit('setUnSendScheduled', post);
    		store.commit('setUpdataSchedule', {});
    		hiddenA()
    	}
    }

    const modal = inject('modal'); // Coming from app vue

    const sendTweet = () => {
    	showToast.value = !showToast.value;
    	toastMassage.value = 'Your draft was saved.'
    	store.commit('setUnSendDraft', post);
    	setTimeout(() => modal.openNewTweetModal = false, 800)
    }

	watch(images.value, (oldValue, newValue) => {
		oldValue == '' ? Object.keys(selected).map( v => v == 'whoCanReply' ? selected[v] : selected[v] = false): ''
	});

	watch(() => saveToDraft.data, (value) => sendTweet())

</script>
