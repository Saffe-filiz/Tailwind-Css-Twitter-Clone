<template>
	<section class="w-[600px] h-[591px] h-auto bg-red-100 m-auto mt-[33px] rounded-2xl overflow-auto">
		<div class="h-full w-full overflow-y-scroll">
			<div class="w-full h-12 bg-blue-100 px-3.5 inline-flex justify-between items-center">
			<span class="flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-[#0f14191a] hoverDuration cursor-pointer">
				<span class="text-[#0f1419]">&#10005</span>
			</span>
			<span class="w-[501px] h-9  border border-[#00000000] rounded-full inline-flex bg-white items-center justify-center" @click="serachAreaIsActive = true">
				<span class="inline-flex items-center w-auto h-auto">
					<span  :class="{'pl-3': serachAreaIsActive}">
					    <Search class="w-3.5 h-3.5 fill-[#536471]"/>
					</span>
				    <span v-show="!serachAreaIsActive" class="text-sm text-[#536471] pl-1">Search for GIFs</span>
				</span>
				<input type="serach" class="max-w-[427px] w-full h-3.75 outline-none text-sm py-1 placeholder:text-[#536471]" v-model="serach" v-show="serachAreaIsActive" placeholder="Search for GIFs">
				<span class="w-5 h-5 flex items-center justify-center bg-black rounded-full mr-3 cursor-pointer" v-if="serach" @click="celarSerachArea">
					<span class="text-white text-[8px]">&#10005</span>
				</span>
			</span>
		    </div>
		</div>
	</section>
</template>

<script setup>
	import { ref, computed } from 'vue';
	import Search from './icons/Search.vue';

	const serach = ref('')
	const serachAreaIsActive = ref(false)

    const serachArea = computed(() => search.value == '')
    const celarSerachArea = () => serach.value = ''

</script>