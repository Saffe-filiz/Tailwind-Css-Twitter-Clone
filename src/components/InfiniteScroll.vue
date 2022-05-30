<template>
	<div ref="trigger" class=""></div>
</template>

<script  setup>
	import { ref, onMounted, defineEmits } from 'vue';
	const emit = defineEmits(['test'])

	let observer = ref(null);
	let trigger = ref(null)
   onMounted(() => {
   	   observer.value = new IntersectionObserver(([entery]) => {
   	   	if(entery && entery.isIntersecting){
   	   	    emit('test', 10)
   	   		
   	   	}
   	   })
   	   observer.value.observe(trigger.value)
   })

</script>