<template>
	<div 
        class="flex justify-center items-center text-sm text-white w-fit px-3 h-10 bg-[#1da1f2] rounded fixed inset-x-[35%] bottom-5 z-50" 
        v-if="isActive">
        <span>{{info.massage}}
            <span class="hover:underline ml-2 cursor-pointer" @click="OpenUnSendTweet">View</span> 
        </span>
    </div>
</template>

<script setup>
    import { inject, watch, ref } from 'vue';
	const info = defineProps({isActive: Boolean, massage: String})
    const errorMassage = ['Please choose either 1 GIF or up to 4 photos.', 'You can only have 1 type of attachment','Your Tweet will be sent on Sun, Jun 26, 2022 at 8:27 PM']

    const modal = inject('modal')

    const OpenUnSendTweet = () => {
        modal.openUnsentTweets = true;
        modal.selectetUnSentTweetSection = 'openScheduleModal'
    };

    let isActive = ref(false)

    watch(() => info.isActive, (value) => {
        isActive.value = true;
        setTimeout(() => isActive.value = false, 3000)
    })
</script>