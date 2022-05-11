<template>
	<div class="h-full w-full overflow-y-scroll ">
		<div class="w-full h-12 bg-[#ffffffa6] backdrop-blur-md px-3.5 inline-flex justify-between items-center">
			<span class="flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-[#0f14191a] hoverDuration cursor-pointer">
				<span class="text-[#0f1419]">&#10005</span>
			</span>
			<div class="w-[501px] relative h-9 border border-[#00000000] rounded-full inline-flex bg-white items-center" 
			@click="searchActive = true"  :class="{'justify-center': !searchActive}">
				<div class="inline-flex  bg-gray-100 items-center w-auto h-auto" :class="{'pl-3': searchActive}">
					<Search class="w-3.5 h-3.5 fill-[#536471]"/>
				</div>
				<div class="w-auto h-auto inline-flex" v-show="!searchActive">
				    <span class="text-sm text-[#536471] pl-1">Search for GIFs</span>
				</div>
				<div>
					v-show="!searchActive"
				</div>
				<div v-show="search">
					<span class="w-5 h-5 bg-black rounded-full cursor-pointer absolute right-2 flex items-center justify-center" @click="celarSearch">
					    <span class="text-white text-[10px]">&#10005</span>
				   </span>
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

    const serachArea = computed(() => search.value == '')
    const celarSearch = () => serach.value = ''
</script>