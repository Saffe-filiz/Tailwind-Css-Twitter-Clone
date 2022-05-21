<template>
	<div  class="inline-flex flex-row grow cursor-pointer" v-for="(madia, index) in list.gif" :key="index" >
		<div class="w-auto h-auto grow"  :style="{'background-image': `url(${madia})`}" :class="bgColor(index)">
			<img :src="madia" class="grow opacity-0" draggable="false">
		</div>
	</div>
</template>

<script setup>
	import {computed} from 'vue';
	const bgColor = computed(() => (i) => {
		return i % 3 == 0 ? 'bg-[#7856ff]': i % 2 == 0 ? 'bg-[#f91880]': i % 1 == 0 ? 'bg-[#ffd400]': 'bg-[#00ba7c]'
	})
	const list = defineProps({gif: Object})
</script>