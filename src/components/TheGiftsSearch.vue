<template>
	<div class="w-full h-12 px-3.5 bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between sticky top-0 z-20">
		<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter">
			<CrossIcon v-if="!search" :size="18" class="fill-[696c70]"/>
		    <ArrowIcon v-else :size="18" class="cursor-pointer" @click="celarSearch"/>
		</div>
		<div class="group">
		<label for="gifSearch" class="w-[501px] group h-9 bg-white rounded-full inline-flex items-center cursor-text border border-[#cfd9de] px-3 group-focus-within:border-2 group-focus-within:border-[#1d9bf0] justify-center ">
			<SearchIcon :size="14" class="flexCenter fill-[#536471]"/>
		    <input type="text" class=" group-focus-within:w-[26.25rem]  h-9 text-[0.813rem] bg-transparent outline-none pl-1 pb-1 group-focus-within:mr-5" @input="searchGif(search)" 
		         id="gifSearch" v-model="search" placeholder="Search for GIFs"/>
		     <CrossIcon v-show="search"  tabindex="-1" :size="11" class="group-focus-within:visible invisible w-[1.219rem] h-[1.219rem] bg-black fill-white" @click="celarSearch"/>
		</label>
		</div>
	</div>
</template>

<script setup>
	import SearchIcon from './icons/Search.vue';
	import CrossIcon from './icons/Cross.vue';
	import ArrowIcon from './icons/Arrow.vue';

	import { ref, computed, onMounted, watch, inject } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore()

	const searchArea = defineProps({active: Boolean, ganre: String});
	const search = ref('');
    const celarSearch = () =>  {
    	store.commit('setClearGifState', [])
    	store.state.gifGanre = '';
    	search.value = ''
    };
    const inputPlaceHolder = computed(() => search.value == '' ? 'Search for GIFs' : search.value);
    const searchGif =  () => store.dispatch('getGifts', search.value);
   
    onMounted(() => inputFocus())

    const inputFocus = () => document.querySelector('#gifSearch').focus();

    watch(() => searchArea.ganre, (v) => [inputFocus(), search.value = v, searchGif(v)])

</script>