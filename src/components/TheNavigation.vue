<template>
	  <aside class="h-screen inline-flex justify-between flex-col pb-2.5 pr-6 sticky top-0">
	    <nav class="inline-flex flex-col px-3">
		    <div class="">
		    	<ul class="inline-flex w-full flex-col">
		    		<li class="listContent">
		    			<Logo/>
		    		</li>
		    		<li class="listContent">
		    			<Home :active="true"/>
		    			<p class="navigationTextStyle">Home</p>
		    		</li>
		    		<li class="listContent">
		    		    <Explore :active="false"/>
		    			<p class="navigationTextStyle">Explore</p>
		    		</li>
		    		<li class="listContent">
		    		    <Notifications :active="false"/>
		    			<p class="navigationTextStyle">Notifications</p>
		    		</li>
		    		<li class="listContent">
		    		    <Massages :active="false"/>
		    			<p class="navigationTextStyle">Massages</p>
		    		</li>
		    		<li class="listContent">
		    		    <Bookmarks :active="false"/>
		    			<p class="navigationTextStyle">Bookmarks</p>
		    		</li>
		    		<li class="listContent">
		    		    <List :active="false"/>
		    			<p class="navigationTextStyle">Lists</p>
		    		</li>
		    		<li class="listContent">
		    		    <Profile :active="false"/>
		    			<p class="navigationTextStyle">Profile</p>
		    		</li>
		    		<li class="listContent">
		    		    <More :active="false"/>
		    			<p class="navigationTextStyle">More</p>
		    		</li>
		    	</ul>
		    </div>
		<div class="w-full h-[4.938rem] mt-4">
			<button class="w-[14.063rem] h-[3.25rem] bg-btn-bg-color text-white font-bold text-[0.938rem] rounded-full" @click="showTheSchedule = true">Tweet</button>
		</div>
    </nav>
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
	  </aside>
	       <PopUp v-if="showTheSchedule" @click="showTheSchedule = false">
      	    <TheSchedule v-on:click.stop 
      	    @showTheSchedule="( hidden ) => showTheSchedule = hidden"/>
      </PopUp>
</template>

<script setup>
	import { ref, computed } from 'vue';

 	import Logo from './icons/Logo.vue';
	import Home from './icons/Home.vue';
	import Explore from './icons/Explore.vue';
	import Notifications from './icons/Notifications.vue';
	import Massages from './icons/Massages.vue';
	import Bookmarks from './icons/Bookmarks.vue';
	import List from './icons/List.vue';
	import Profile from './icons/Profile.vue';
	import More from './icons/More.vue';
	import PopUp from './PopUp.vue';
	import TheSchedule from './TheSchedule.vue';

	let showTheSchedule = ref(false)

	const owerFlowHidden = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'hidden';	
	}
</script>