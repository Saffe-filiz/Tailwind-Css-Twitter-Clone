<template>
	<div class="w-full h-12 px-3.5 bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between">
		<div class="w-[30px] h-[30px] rounded-full bg-black flexCenter cursor-pointer">
			<span class="text-white">&#10005</span>
		</div>
		<div class="w-[501px] h-9 bg-white rounded-full relative inline-flex items-center" 
		@click="$emit('active', true)" v-on:click.stop :class="{'justify-center': !searchArea.active}">
			<div class="w-[25px] h-full flexCenter" :class="{'ml-2': searchArea.active}">
				<Search class="w-3.5 h-3.5 fill-[#536471]"/>
		    </div>
		    <div class="w-auto h-3.5 flexCenter" v-if="!searchArea.active">
		    	<span class="text-[13px]">{{inputPlaceHolder}}</span>
		    </div>
		    <input type="text" class="w-[420px] text-[13px] bg-transparent outline-none"  v-if="searchArea.active" placeholder="Search for GIFs" v-model="search"/>
			<div class="w-9 h-full flexCenter justify-start absolute right-1" v-if="searchArea.active && search">
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
	const searchArea = defineProps({active: Boolean}) 
	const search = ref('')
	let searchInput = ref(null);
    const celarSearch = () => search.value = ''
    const inputPlaceHolder = computed(() => search.value == '' ? 'Search for GIFs' : search.value)
</script>