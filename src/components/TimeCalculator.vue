<template>
	<span class="relative text-[#536471] text-[15px] font-normal" id="timer">{{timer}}</span>
</template>

<script setup>
	import {ref, onMounted } from 'vue';
	const post = defineProps({date: String})
     
    onMounted(() => dataCalculete(post.date))
    
    document.addEventListener('visibilitychange', (e) => {
		if(document.visibilityState == 'hidden') return;
			dataCalculete(post.date);
	})

   let timer = ref()
    
   const dataCalculete = (postDate) => {
       // let timer = document.querySelector('#timer');
        let date = new Date(postDate);
        let currentDate = new Date();
        let [_, month, day, year] = date.toString().split(' ');
        let second = Math.ceil((currentDate - date) / 1000);
        let minute = Math.ceil(second / 60);
        let hourse = Math.ceil(minute / 60);
        let result;
        
        if (currentDate.getFullYear() > year){
           result = `${month} ${day} ${year}`;
        }else if(hourse >= 24) {
           result = `${month} ${day}`
        }else if(minute >= 60){
           result = `${hourse}h`;
        }else if(second >= 60){
           result = `${minute}m`;
        }else {
           result = `${second}s`
        }
        timer.value = result
    }


</script>