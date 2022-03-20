<template>
	  <div class="h-screen inline-flex justify-between flex-col pb-2.5 pr-6">
	    <div class="inline-flex flex-col px-3">
		    <div class="">
		    	<ul class="inline-flex w-full flex-col">
		    		<li class="listContent">
		    			<Logo class=""/>
		    		</li>
		    		<li class="listContent">
		    			<Home class=""/>
		    			<p class="navigationTextStyle">Home</p>
		    		</li>
		    		<li class="listContent">
		    		    <Explore class=""/>
		    			<p class="navigationTextStyle">Explore</p>
		    		</li>
		    		<li class="listContent">
		    		    <Notifications class=""/>
		    			<p class="navigationTextStyle">Notifications</p>
		    		</li>
		    		<li class="listContent">
		    		    <Massages class=""/>
		    			<p class="navigationTextStyle">Massages</p>
		    		</li>
		    		<li class="listContent">
		    		    <Bookmarks class=""/>
		    			<p class="navigationTextStyle">Bookmarks</p>
		    		</li>
		    		<li class="listContent">
		    		    <List class=""/>
		    			<p class="navigationTextStyle">Lists</p>
		    		</li>
		    		<li class="listContent">
		    		    <Profile class=""/>
		    			<p class="navigationTextStyle">Profile</p>
		    		</li>
		    		<li class="listContent">
		    		    <More class=""/>
		    			<p class="navigationTextStyle">More</p>
		    		</li>
		    	</ul>
		    </div>
		<div class="w-full h-[4.938rem] mt-4">
			<button class="w-[14.063rem] h-[3.25rem] bg-btn-bg-color text-white font-bold text-[0.938rem] rounded-full">Tweet</button>
		</div>
    </div>
    	<div class="w-[15.688rem] h-16">
        <div class="w-[15.688rem] rounded-[4rem] inline-flex items-center justify-around px-3 py-3.5 hoverEfect">
            <div class="w-10 h-10 bg-black rounded-full"></div>
            <div class="w-32 h-[2.313rem] leading-5">
              <p class="userCartTextStyle">Bradley Ortiz</p>
              <p class="userCartSubTextStyle">@bradley_</p>
            </div>
            <button>test</button>
        </div>
	    </div>
	  </div>
</template>

<script setup>
	import { ref } from 'vue'
 	  import Logo from './icons/Logo.vue';
		import Home from './icons/Home.vue';
		import Explore from './icons/Explore.vue';
		import Notifications from './icons/Notifications.vue';
		import Massages from './icons/Massages.vue';
		import Bookmarks from './icons/Bookmarks.vue';
		import List from './icons/List.vue';
		import Profile from './icons/Profile.vue';
		import More from './icons/More.vue';

		let newSet = ref(false)

		let chanceValue = () => {
			newSet.value = !newSet.value
			console.log(newSet.value )
		}

</script>