<template>
	<aside class="max-w-[15.813rem] h-screen inline-flex justify-between flex-col pb-2.5 sticky top-0">
	    <nav class="w-full inline-flex flex-col">
		    <div class="">
		    	<ul class="inline-flex w-full flex-col">
		    		<li class="w-[2.813rem] h-[2.813rem] flex items-center justify-center rounded-full hover:bg-[#1d9bf01a] hoverDuration cursor-pointer">
		    			<Logo/>
		    		</li>
		    		<li class="w-fit p-2.5 flex items-center hover:bg-[#0f14191a] rounded-full cursor-pointer hoverDuration" 
		    		v-for="(icon, index) in icons" :key="index" @click="selected = index">
		    			<component :is="icon" :active="index == selected" ></component>
		    			<span class="text-xl text-[#0f1419]  hidden xl:block pl-[19px] pr-[1.125rem] truncate">{{iconsName[index]}}</span>
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
         <!--   <div class="w-9 h-9 bg-black rounded-full"></div>-->
            <UserProfileImage :size="9" class="bg-red-100 rounded-full"/>
            <!--USER IMAGE END -->
            <!-- NAME AND USERNAME START -->
            <div class="w-[6.25rem] h-[2.313rem] leading-5 pl-2">
              	<p class="h-5 text-sm font-bold text-[#0f1419] font-bold truncate">Bradley Ortiz</p>
                <p class="text-[15px] font-normal text-[#0f1419] font-normal truncate">@bradley_</p>
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

 	import Logo from './icons/NavigationIcons/Logo.vue';
	import Home from './icons/NavigationIcons/Home.vue';
	import Explore from './icons/NavigationIcons/Explore.vue';
	import Notifications from './icons/NavigationIcons/Notifications.vue';
	import Massages from './icons/NavigationIcons/Massages.vue';
	import Bookmarks from './icons/NavigationIcons/Bookmarks.vue';
	import List from './icons/NavigationIcons/List.vue';
	import Profile from './icons/NavigationIcons/Profile.vue';
	import More from './icons/NavigationIcons/More.vue';
	import ThreeDot from './icons/More.vue';
	import PopUp from './PopUp.vue';
	import UserProfileImage from './UserProfileImage.vue';

	let showTheSchedule = ref(false)
	const selected = ref(0)
	const icons = [Home, Explore, Notifications, Massages, Bookmarks, List, Profile, More];
	const iconsName = ['Home', 'Explore', 'Notifications', 'Massages', 'Bookmarks', 'List', 'Profile', 'More'];

</script>
