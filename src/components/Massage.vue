<template>
	<div class="flex justify-center items-center text-sm text-white w-[323px] h-10 bg-[#1da1f2] rounded fixed inset-x-[35%]  bottom-5 z-10">
        <span >{{errorMassage[massage.error]}} </span>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
	const massage = defineProps({error: Number})
    const errorMassage = ['Please choose either 1 GIF or up to 4 photos.', 'You can only have 1 type of attachment']
</script>