<template>
    <div class="sectionMainStyle focusInput relative group">
		<label class="text-[12px] text-[#536471] ml-2 " for="date">{{data.title}}</label>
		<DownArrow/>
		<select class="sectionStyle" v-model="selectenValue" id="date"  @change="$emit('setDate', +selectenValue)" >
			<option v-for="(num, index) in data.length" :key="index" >{{num - minusDate}}</option>
		</select> 
	</div>
</template>


<script setup>
	import DownArrow from './icons/DownArrow.vue';
	import { ref, computed, nextTick, onUpdated } from 'vue';

	const data = defineProps({title: String, length: [String, Number, Array], date: [String, Number, Array], minusDate: Number});

	let selectenValue = ref();
    onUpdated(() => selectenValue.value = +data.date)
	nextTick(() => selectenValue.value = +data.date)
</script>

