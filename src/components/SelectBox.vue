<template>
    <div class="sectionMainStyle focusInput relative group" :class="{'bg-[#eff3f4]': data.isDisable}">
		<label class="text-[12px] text-[#536471] ml-2  focus:text-red-100" for="date">{{data.title}}</label>
		<DownArrow/>
		<select class="sectionStyle" v-model="selectenValue" id="date"  @change="$emit('setDate', selectenValue)" :disabled="data.isDisable"> 
			<option v-for="(num, index) in data.length" :value="num" :key="index" >{{getMonths(num)}}</option>
		</select> 
	</div>
</template>


<script setup>
	import DownArrow from './icons/DownArrow.vue';
	import { ref, computed, nextTick, onUpdated } from 'vue';

	const data = defineProps({title: String, length: [String, Number, Array], date: [String, Number, Array], formatDate: Boolean, isMonth: Boolean, isDisable: Boolean});

	let selectenValue = ref();

	onUpdated(() => selectenValue.value = data.date)
	nextTick(() => selectenValue.value = data.date)


	const getMonths = computed(() => (index) => {
		return data.isMonth ? new Date(2022, index, 1).toLocaleString('en', { month: 'long' }): data.formatDate ? formatNumber.value(index): index;
	});

	const formatNumber = computed(() => num => data.formatDate && num < 10 ? '0' + num: num);
</script>

