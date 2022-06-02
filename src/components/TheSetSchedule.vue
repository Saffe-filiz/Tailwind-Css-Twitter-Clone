<template>
	<div class="w-full h-12 inline-flex flex-row items-center justify-between px-2">
		<div class="flex items-center justify-between">
            <div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="modal.closePopUp()">
			    <CrossIcon :size="18" class="fill-[696c70]"/>
		    </div>
			<span class="ml-[1.7rem]">Schedule</span>
		</div>
		<div class="inline-flex justify-between items-center mr-1">
			<span  class="px-3.75 h-[1.875rem] rounded-3.75 cursor-pointer flex items-center hover:bg-[#0c14191a] mr-4 rounded-full" v-if="data.sending" 
			 @click="modal.closePopUp(), sendSchedule({})">
				<span class="h-[1.375rem] border-b-2 border-black text-base font-medium">Clear</span>
			</span>
			<button class="h-[1.875rem] px-3.75 bg-[#0f1419] text-sm font-bold text-white rounded-[2rem]"
			 :class="{'opacity-70 pointer-events-none': data.error}" @click="sendSchedule(data.scheduling), modal.closePopUp()">
			    <span v-if="!data.sending">Confirm</span>
			    <span v-else>Update</span>
		    </button>
		</div>
	</div>
</template>

<script setup>
	import { inject } from 'vue';
	import { useStore } from 'vuex';

	import CrossIcon from './icons/Cross.vue';

	const data = defineProps({sending: Boolean, scheduling: Object, error: String})
	const modal = inject('modal');

	const store = useStore();
	const sendSchedule = ( obj ) => store.commit('setSchedule', obj)
</script>