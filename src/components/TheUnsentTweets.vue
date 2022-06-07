<template>
	<div class="w-[37.5rem] h-24 bg-white rounded-2xl mx-auto">
		<div class="p-2">
			<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="closeUnsetTweets">
			    <ArrowIcon :size="18" class="cursor-pointer"/>
		    </div>
		</div>
	</div>
</template>

<script setup>
	import ArrowIcon from './icons/Arrow.vue';
	import { inject } from 'vue';

	const modal = inject('modal');

    const closeUnsetTweets = () => {
    	modal.openUnsentTweets = false;
    	modal.openScheduleModal = true;
    }

</script>