<template>
	<div class="flex justify-center items-center text-sm text-white w-[323px] h-10 bg-[#1da1f2] rounded fixed inset-x-[35%]  bottom-5 z-10" v-if="massage.error[0]">
        <span v-if="!massage.error[1]">Please choose either 1 GIF or up to 4 photos.</span>
        <span v-else>You can only have 1 type of attachment</span>
    </div>
</template>

<script setup>
	const massage = defineProps({error: Array})
</script>