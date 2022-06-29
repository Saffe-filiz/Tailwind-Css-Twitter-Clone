<template>
	<div 
        class="flexCenter text-sm text-white w-fit px-3 h-10 bg-[#1da1f2] rounded fixed left-2/4 -translate-x-2/4 bottom-5 z-50" 
        v-if="isActive">
        <span>
            <span v-if="toast.date">Your Tweet <TheScheduleInfo :time="toast.date" :isDate="!toast.Date"/></span>
            <span v-else>{{toast.massage}}</span>
            <span class="hover:underline ml-2 cursor-pointer" @click="OpenUnSendTweet" v-if="toast.date">View</span> 
        </span>
    </div>
</template>

<script setup>
    import TheScheduleInfo from './TheScheduleInfo.vue';
    import { inject, watch, ref } from 'vue';
	const toast = defineProps({isActive: Boolean, massage: String, date: Array})

    const modal = inject('modal')

    const OpenUnSendTweet = () => {
        modal.openUnsentTweets = true;
        modal.selectetUnSentTweetSection = 'openScheduleModal'
    };

    let isActive = ref(false)

    let isDate = ref(Array.isArray(toast.massage))

    watch(() => toast.isActive, (value) => {
        isActive.value = true;
        setTimeout(() => isActive.value = false, 3000)
    })
</script>