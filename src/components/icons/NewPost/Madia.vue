<template>
    <label for="image" :class="{'pointer-events-none': active.isActive}">
	<span  class="group tooltipContainer">
        <span class="w-8.5 h-8.5 flexCenter rounded-full hover:bg-[#1d9bf01a] cursor-pointer fill-[#1DA1F2]" 
        :class="{'fill-[#8ecdf8] hover:bg-white cursor-auto pointer-events-none' : active.isActive}">		
            <svg class="w-[1.188rem] h-[1.188rem]" viewBox="0 0 24 24">
            <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25V19.75C2 20.99 3.01 22 4.25 22H19.75C20.99 22 22 20.99 22 19.75V4.25C22 3.01 20.99 2 19.75 2ZM4.25 3.5H19.75C20.163 3.5 20.5 3.837 20.5 4.25V13.926L16.642 10.068C16.502 9.928 16.312 9.848 16.112 9.848H16.109C15.909 9.848 15.716 9.928 15.577 10.072L11.26 14.456L9.447 12.65C9.307 12.51 9.117 12.43 8.917 12.43C8.724 12.4 8.522 12.51 8.382 12.657L3.5 17.642V4.25C3.5 3.837 3.837 3.5 4.25 3.5ZM3.506 19.78L8.924 14.246L15.206 20.5H4.25C3.848 20.5 3.523 20.178 3.506 19.78ZM19.75 20.5H17.33L12.323 15.513L16.115 11.663L20.5 16.047V19.75C20.5 20.163 20.163 20.5 19.75 20.5Z"/>
            <path d="M8.86799 9.851C9.71961 9.851 10.41 9.16062 10.41 8.309C10.41 7.45738 9.71961 6.767 8.86799 6.767C8.01637 6.767 7.32599 7.45738 7.32599 8.309C7.32599 9.16062 8.01637 9.851 8.86799 9.851Z"/></svg>
        </span>
        <span class="tooltip">Image</span>
    </span>
     <input  type="file" id="image" class="hidden" @change="uploadImage" multiple="multiple" :accept="[active.madiaType ? 'image/png,image/jpeg':'']">
    </label>
</template>

<script setup>
    import { inject } from 'vue';
	const active = defineProps({isActive: Boolean, madiaType: Boolean})
    const uploadImage = inject('uploadImage'); // Image prevew function 
</script>