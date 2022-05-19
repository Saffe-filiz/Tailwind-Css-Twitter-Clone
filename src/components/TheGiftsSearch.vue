<template>
	<label for="gifSearch"  class="w-full h-12 px-3.5 bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between sticky top-0 z-20">
		<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter">
			<Cross v-if="!search" :size="18" class="fill-[696c70]"/>
		    <Arrow v-else :size="18" class="cursor-pointer" @click="celarSearch"/>
		</div>
		<div class="w-[501px] h-9 bg-white rounded-full relative inline-flex items-center cursor-text" @click="$emit('active', true)" 
		v-on:click.stop :class="[!searchArea.active ? 'justify-center border border-[#cfd9de]': 'border-2 border-[#1d9bf0]']">
			<Search :size="14"  class="flexCenter fill-[#536471]" :class="{'ml-[0.688rem]':  searchArea.active}"/>
		    <div class="w-auto h-3.5 flexCenter" v-show="!searchArea.active">
		    	<span class="text-[0.813rem]">{{inputPlaceHolder}}</span>
		    </div> 
		    <input type="text" class="w-[26.25rem] h-3.5 text-[0.813rem] bg-transparent outline-none indent-0.5" @input="searchGif(search = $event.target.value)" id="gifSearch" v-show="searchArea.active" v-model="search" placeholder="Search for GIFs"/>
			<div class="w-9 h-full flexCenter justify-start absolute right-1" v-if="searchArea.active && search">
			    <Cross :size="11" class="w-[1.219rem] h-[1.219rem]  bg-black fill-white" @click="celarSearch"/>
		    </div>
		</div>
	</label>
</template>

<script setup>
	import Search from './icons/Search.vue';
	import Cross from './icons/Cross.vue';
	import Arrow from './icons/Arrow.vue';

	import { ref, computed, onMounted, watch } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore()

	const searchArea = defineProps({active: Boolean, ganre: String});
	const search = ref('');
    const celarSearch = () => search.value = '';
    const inputPlaceHolder = computed(() => search.value == '' ? 'Search for GIFs' : search.value);

    const searchGif = async () => await  store.dispatch('getGifts', search.value).then(() => console.log('testtt'))
   
    onMounted(() => document.querySelector('#gifSearch').focus())

</script>