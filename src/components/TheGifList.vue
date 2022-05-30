<template>
	<div  class="inline-flex flex-row grow cursor-pointer" v-for="(madia, index) in list.gif" :key="index" >
		<div class="w-full grow" :class="bgColor(index)">
			<img :src="madia" class="w-full h-full grow  " draggable="false">
		</div>
	</div>
</template>

<script setup>
	import {ref, computed} from 'vue';

	const bgColor = computed(() => (i) => {
		return i % 3 == 0 ? 'bg-[#7856ff]': i % 2 == 0 ? 'bg-[#f91880]': i % 1 == 0 ? 'bg-[#ffd400]': 'bg-[#00ba7c]'
	})

	const list = defineProps({gif: Object})
</script>