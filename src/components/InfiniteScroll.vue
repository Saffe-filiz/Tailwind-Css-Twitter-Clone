<template>
	<div ref="trigger" class=""></div>
</template>

<script  setup>
	import { ref, onMounted } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore()

	let observer = ref(null);
	let trigger = ref(null)
	let increase = ref(20)

    onMounted(() => {
   	   observer.value = new IntersectionObserver(([entery]) => {
   	   	if(entery && entery.isIntersecting){
   	   		   increase.value += 10
   	   	       store.commit('setGifOfNumber', increase.value)

   	   	    }
   	    })
   	   observer.value.observe(trigger.value)
   })

</script>