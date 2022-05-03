<template>
	<aside class="h-screen inline-flex justify-between flex-col pb-2.5 pr-6 sticky top-0">
	    <nav class="inline-flex flex-col px-3">
		    <div class="">
		    	<ul class="inline-flex w-full flex-col">
		    		<li class="listContent">
		    			<Logo/>
		    		</li>
		    		<li class="listContent" v-for="(_, index) in icons.length" :key="index" @click="selected = index">
		    			<component :is="icons[index]" :active="index == selected" ></component>
		    			<p class="navigationMainTextStyle">{{iconsName[index]}}</p>
		    		</li>
		    	</ul>
		    </div>
		    <div class="w-full h-[4.938rem] mt-4">
			    <button class="w-[14.063rem] h-[3.25rem] bg-btn-bg-color text-white font-bold text-[0.938rem] rounded-full" @click="showTheSchedule = true">Tweet</button>
		    </div>
        </nav>
    	<div class="w-[15.688rem] h-[3.625rem] p-[11px] relative inline-flex hover:bg-[#0c14191a] rounded-full ">
        <div class="w-full rounded-[4rem] inline-flex">
        	<!--USER IMAGE START -->
            <div class="w-9 h-9 bg-black rounded-full"></div>
            <!--USER IMAGE END -->
            <!-- NAME AND USERNAME START -->
            <div class="w-[6.25rem] h-[2.313rem] leading-5 pl-2">
              	<p class="userCartTextStyle">Bradley Ortiz</p>
                <p class="userCartSubTextStyle">@bradley_</p>
            </div>
             <!-- NAME AND USERNAME END -->
        </div>
        <!-- More BUTTON START -->
        <div class="w-[5.938rem] h-auto relative">
        	<ThreeDot class="pointer-events-none"/>
        </div>
        <!-- More BUTTON START -->
	    </div>
	</aside>
	<PopUp v-if="showTheSchedule" @click="showTheSchedule = false">
      
    </PopUp>
</template>

<script setup>
	import { ref, computed } from 'vue';

 	import Logo from './icons/NavIcons/Logo.vue';
	import Home from './icons/NavIcons/Home.vue';
	import Explore from './icons/NavIcons/Explore.vue';
	import Notifications from './icons/NavIcons/Notifications.vue';
	import Massages from './icons/NavIcons/Massages.vue';
	import Bookmarks from './icons/NavIcons/Bookmarks.vue';
	import List from './icons/NavIcons/List.vue';
	import Profile from './icons/NavIcons/Profile.vue';
	import More from './icons/NavIcons/More.vue';
	import ThreeDot from './icons/More.vue';
	import PopUp from './PopUp.vue';

	let showTheSchedule = ref(false)
	const selected = ref(0)
	const icons = [Home, Explore, Notifications, Massages, Bookmarks, List, Profile, More];
	const iconsName = ['Home', 'Explore', 'Notifications', 'Massages', 'Bookmarks', 'List', 'Profile', 'More'];

</script>