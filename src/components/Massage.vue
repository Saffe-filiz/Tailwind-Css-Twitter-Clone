<template>
	<div class="flex justify-center items-center text-sm text-white w-fit px-3 h-10 bg-[#1da1f2] rounded fixed inset-x-[35%] bottom-5 z-50">
        <span >{{errorMassage[massage.index]}}<span @click="OpenUnSendTweet" class="hover:underline ml-2 cursor-pointer">View</span> </span>
    </div>
</template>

<script setup>
    import { inject } from 'vue';
	const massage = defineProps({index: Number})
    const errorMassage = ['Please choose either 1 GIF or up to 4 photos.', 'You can only have 1 type of attachment','Your Tweet will be sent on Sun, Jun 26, 2022 at 8:27 PM', 'Your selected unsent Tweets were deleted.']

    const modal = inject('modal')

    const OpenUnSendTweet = () => {
        modal.openUnsentTweets = true;
        modal.selectetUnSentTweetSection = 'openScheduleModal'
    }
</script>