<template>
	<div class="w-full h-12 px-3.5 bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between sticky top-0 z-20">
		<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter">
			<CrossIcon v-if="!search" :size="18" class="fill-[696c70]" @click="scrollVisibil, showGifContent = false"/>
		    <ArrowIcon v-else :size="18" class="cursor-pointer" @click="celarSearch"/>
		</div>
		<div class="group" @click="inputFocus">
		    <label for="gifSearch" class="w-[501px]  relative h-9 bg-white rounded-full inline-flex items-center cursor-text border border-[#cfd9de] px-3 group-focus-within:border-2 group-focus-within:border-[#1d9bf0] group-focus-within:justify-start justify-center">
		    	<SearchIcon :size="14" class="flexCenter fill-[#536471] mr-1"/>
		        <div class="group-focus-within:w-[420px] inline h-full relative overflow-hidden" :class="[search.length ? 'w-auto': 'w-28']">
		          	<span class="span relative z-[-1]">{{search}}</span>
		        	<input type="text" class="w-full h-full absolute z-10 left-0 -top-[1px] outline-none gifSearch" @input="searchGif" v-model="search" placeholder="Search for GIFs" />
		        </div>
		    <div class="w-9 inline-flex justify-end items-center" v-if="search">
		    <CrossIcon tabindex="-1" :size="11" class="group-focus-within:visible invisible w-[1.219rem] h-[1.219rem] bg-black fill-white" @click="celarSearch"/>
		    </div>
		</label>
	</div>
	</div>
</template>

<script setup>
	import SearchIcon from './icons/Search.vue';
	import CrossIcon from './icons/Cross.vue';
	import ArrowIcon from './icons/Arrow.vue';

	import { ref, onMounted, watch, inject, computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore()


	const search = ref('');

	const getGanre = computed(() => store.getters.getGifGanre);
	const getNumberOfGif = computed(() => store.getters.getNumberOfGif);

	const searchGif = () => store.dispatch('getGifts', {ganre: search.value, number: getNumberOfGif.value});


    const celarSearch = () =>  {
    	store.commit('setGif', [])
    	store.commit('setGifOfNumber', 20)
    	store.state.gifGanre = '';
    	search.value = ''
    };

    onMounted(() => inputFocus())

    const inputFocus = () => document.querySelector('.gifSearch').focus();

    watch(() => getGanre.value, (ganre) => {
    	inputFocus();
        search.value = ganre;
    	searchGif();
    })

    const scrollVisibil = inject('scrollVisibil');
	const showGifContent = inject('showGifContent');

</script>