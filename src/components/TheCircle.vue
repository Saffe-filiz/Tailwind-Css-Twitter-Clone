<template>
	<div class="w-[30px] h-[30px] relative flexCenter">
		<svg class="w-full h-full transform -rotate-90"  fill="transparent" v-if="!(num.post >= 290)">
			<circle cx="50%" cy="50%" :r="circleRadius" stroke-width="2" stroke="#eff3f4"></circle>
		    <circle cx="50%" cy="50%" :r="circleRadius" stroke-width="2"  stroke-linecap="round" 
			:style="{'stroke-dasharray': circleOffset, 'stroke-dashoffset': circleOffset - circleDashoffset, 'stroke': strokoColor }"></circle>
		</svg>
		<span class="absolute text-[10px]" :class="{'text-[#f4212e]': num.post >= 280}" 
		v-show="num.post >= 260">{{280 - num.post}}</span>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	let num = defineProps({post: Number})
  	const circleRadius = computed(() => num.post >= 260 ? 14: 9 );
  	const circleOffset = computed(() => 2 * Math.PI * circleRadius.value);
  	const strokoColor = computed(() => { 
  	    return num.post < 260 ? '#1d9bf0': num.post >= 279 ? '#f4212e': num.post >= 260 ? 
  	    '#FFD400': '#0000';
  	})
  	const circleDashoffset = computed(() =>  {
  		return num.post > 280 ? circleOffset.value: Math.floor((circleOffset.value * num.post) / 280 )
  	}); 
</script>