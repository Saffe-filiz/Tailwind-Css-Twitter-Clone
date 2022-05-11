<template>
	<div class="w-full h-12 px-3.5 bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between">
		<div class="w-[30px] h-[30px] rounded-full bg-black flexCenter">
			<span class="text-white">&#10005</span>
		</div>
		<div class="w-[501px] h-9 bg-red-100  rounded-full relative inline-flex items-center" 
		@click="searchActive = true" :class="{'justify-center': !searchActive}">
			<div class="w-[25px] h-full flexCenter ml-2">
				<Search class="w-3.5 h-3.5 fill-[#536471]"/>
		    </div>
		    <div class="w-auto h-3.5 flexCenter" v-if="!searchActive">
		    	<span class="text-[13px]">{{inputPlaceHolder}}</span>
		    </div>
			<div class="w-9 h-full flexCenter justify-start absolute right-1" v-if="search">
				<div class="w-5 h-5 rounded-full bg-black flexCenter cursor-pointer" @click="celarSearch">
					<span class="text-white">&#10005</span>
				</div>
		    </div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';
	import Search from './icons/Search.vue';

	const search = ref('')
	const searchActive = ref(false)
	const inputPlaceHolder = ref('Search for GIFs')
    const serachArea = computed(() => search.value == '')
    const celarSearch = () => serach.value = ''
</script>