<template>
	<div class="w-full h-12 px-3.5 bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between">
		<div class="w-[30px] h-[30px] rounded-full bg-black flexCenter">
			<span class="text-white">&#10005</span>
		</div>
		<div class="w-[501px] h-9 bg-red-100  rounded-full relative inline-flex items-center" 
		@click="searchActive = true,  activeArea()" :class="{'justify-center': !searchActive}">
			<div class="w-[25px] h-full flexCenter" :class="{'ml-2': searchActive}">
				<Search class="w-3.5 h-3.5 fill-[#536471]"/>
		    </div>
		    <div class="w-auto h-3.5 flexCenter" v-if="!searchActive">
		    	<span class="text-[13px]">{{inputPlaceHolder}}</span>
		    </div>
		    <input type="text" name="" class="searchInput" v-if="searchActive" placeholder="Search for GIFs" v-model="search"/>
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
	let searchInput = ref(null);
	let searchActive = ref(false)
	let inputPlaceHolder = ref('Search for GIFs')
    const celarSearch = () => serach.value = ''

    const activeArea = () => {
    	let input = document.querySelector('.searchInput');
    	let label = document.querySelector('label');
    	console.log(input == document.activeElement)
    }
</script>