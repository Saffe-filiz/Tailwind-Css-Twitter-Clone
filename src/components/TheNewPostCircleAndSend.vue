<template>
    <div class="w-auto h-auto inline-flex items-center mt-2.75 justify-between">
	    <div class="w-auto h-auto inline-flex mr-2.75" v-if="post.massage">
	    	<TheCircle :post="post.massage.length"/>
	        <div class="w-px h-[29px] ml-[9px] mr-2.75 bg-[#c0d0d8]"></div>
	    	<div class="w-[23px] flexCenter ">
	    		<div class="w-full h-[23px] flexCenter rounded-full border border-b border-min-border-color">
	    		   	<Plus class="w-3.75 h-3.75"/>
	    		</div>
	    	</div>
	    </div>
	    <slot/>
	 </div>
</template>

<script setup>
	import Plus from './icons/Plus.vue';
	import TheCircle from './TheCircle.vue';

	const post = defineProps({massage: String, date: Boolean })
</script>