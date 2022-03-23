<template>
	<div class="w-[30px] h-[30px] relative flexCenter">
		<svg class="w-full h-full transform -rotate-90"  fill="transparent" v-if="!(post.length >= 290)">
			<circle cx="50%" cy="50%" :r="circleRadius" stroke-width="2" stroke="#eff3f4"></circle>
		    <circle cx="50%" cy="50%" :r="circleRadius" stroke-width="2"  stroke-linecap="round" 
			:style="{'stroke-dasharray': circleOffset, 'stroke-dashoffset': circleOffset - circleDashoffset, 'stroke': strokoColor }"></circle>
		</svg>
		<span class="absolute text-[10px]" :class="{'text-[#f4212e]': post.length >= 280}" 
		v-show="post.length >= 260">{{280 - post.length}}</span>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const post = ref('ddddddddddddddddddddddddddddddd')
  	const circleRadius = computed(() => post.value.length >= 260 ? 14: 9 );
  	const circleOffset = computed(() => 2 * Math.PI * circleRadius.value);
  	const strokoColor = computed(() => {
  		let postlength = post.value.length;
  		return postlength < 260 ? '#1d9bf0': postlength >= 279 ? '#f4212e': postlength >= 260 ? '#FFD400': '#0000'
  	})
  	const circleDashoffset = computed(() =>  post.value.length > 280 ? circleOffset.value: Math.floor((circleOffset.value * post.value.length) / 280 )); 
</script>