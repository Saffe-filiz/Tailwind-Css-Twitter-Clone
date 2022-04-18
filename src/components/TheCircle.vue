<template>
	<div class="w-[30px] h-[30px] relative flexCenter">
		<svg class="w-full h-full transform -rotate-90"  fill="transparent" v-if="!(num.post >= 290)">
			<circle cx="50%" cy="50%" :r="circleRadius" stroke-width="2" stroke="#eff3f4"></circle>
		    <circle cx="50%" cy="50%" :r="circleRadius" stroke-width="2"  stroke-linecap="round" 
			:style="{'stroke-dasharray': circleOffset, 'stroke-dashoffset': circleOffset - circleDashoffset, 'stroke': circleStrokoColor }"></circle>
		</svg>
		<!-- LETTER COUNTER START -->
		<span class="absolute text-[10px]" :class="{'text-[#f4212e]': num.post >= 280}" v-show="num.post >= 260">{{280 - num.post}}</span>
		<!-- LETTER COUNTER END -->
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	let num = defineProps({post: Number}) // Coming from NewPost component
	// Circle radius value
  	const circleRadius = computed(() => num.post >= 260 ? 14: 9 );
  	// Circle offset value
  	const circleOffset = computed(() => 2 * Math.PI * circleRadius.value);
  	// Circle background color
  	const circleStrokoColor = computed(() => { 
  		let length = num.post;
  	    if(length >= 280) {
  	    	return '#f4212e';
  	    }else if(length >= 260){
  	    	return '#FFD400';
  	    }else if(length < 260){
  	    	return '#1d9bf0';
  	    }else {
  	    	return '#0000'
  	    }
  	});
  	// Circle dash offset
  	const circleDashoffset = computed(() =>  {
  		return num.post > 280 ? circleOffset.value: Math.floor((circleOffset.value * num.post) / 280 )
  	}); 
</script>