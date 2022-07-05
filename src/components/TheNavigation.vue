<template>
	<aside class="w-[88px] xl:w-[15.813rem] h-screen inline-flex justify-between flex-col justify-center pb-2.5 sticky top-0">
	    <nav class="w-full xl:inline-flex xl:flex-col">
		    	<ul class="inline-flex w-full flex-col">
		    		<li class="w-[2.813rem] h-[2.813rem] flex items-center justify-center rounded-full hover:bg-[#1d9bf01a] hoverDuration cursor-pointer mx-auto xl:mx-0">
		    			<Logo/>
		    		</li>
		    		<li class="w-fit p-2.5 flex items-center hover:bg-[#0f14191a] rounded-full cursor-pointer hoverDuration mx-auto xl:mx-0" 
		    		    v-for="(icon, index) in icons" 
		    		    :key="index" 
		    		    @click="selected = index">
		    			<component 
		    			    :is="icon" 
		    			    :active="index == selected" draggable="false">	
		    			</component>
		    			<span class="text-xl text-[#0f1419] hidden xl:block pl-[19px] pr-[1.125rem] truncate">{{iconsName[index]}}</span>
		    		</li>
		    	</ul>
		   <div class="w-full h-[4.938rem] mt-4">
			   <div 
			        class="w-11 h-11 xl:w-[14.063rem] xl:h-[3.25rem] bg-btn-bg-color text-white font-bold text-[0.938rem] rounded-full cursor-pointer flexCenter mx-auto xl:mx-0"
			        @click="openNewTweet">
			        <span class="hidden xl:block">Tweet</span>
			        <span class="block xl:hidden w-fit h-fit"><NewPostIcon/></span>
			    </div>
		   </div>
      </nav>
    	<div class="w-fit h-fit xl:w-[15.688rem] xl:h-[3.625rem] p-[11px] relative inline-flex hover:bg-[#0c14191a] rounded-full mx-auto xl:mx-0">
        <div class="w-auto xl:w-full rounded-[4rem] inline-flex">
            <UserProfileImage :size="9"/>
            <div class="w-[6.25rem] h-[2.313rem] leading-5 pl-2 hidden xl:inline">
              	<p class="h-5 text-sm font-bold text-[#0f1419] font-bold truncate">Bradley Ortiz</p>
                <p class="text-[15px] font-normal text-[#0f1419] font-normal truncate">@bradley_</p>
            </div>
        </div>
        <div class="hidden xl:inline w-[5.938rem] h-auto relative">
        	<ThreeDot class="pointer-events-none"/>
        </div>
	    </div>
	</aside>
</template>

<script setup>
	import { ref, inject } from 'vue';
	import { useStore } from 'vuex';

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
	import UserProfileImage from './UserProfileImage.vue';
	import NewPostIcon from './icons/NewPost/NewPost.vue';

	const selected = ref(0)
	const icons = [Home, Explore, Notifications, Massages, Bookmarks, List, Profile, More];
	const iconsName = ['Home', 'Explore', 'Notifications', 'Massages', 'Bookmarks', 'List', 'Profile', 'More'];
    

    const modal = inject('modal');

    let store = useStore();

    let openNewTweet =	() => {
    	modal.openNewTweetModal = true;
    	modal.newTweetModalIsActiv = true;
    	modal.scrollHidden(),
    	store.commit('setIsModal', true);
    	store.commit('setUpdataSchedule', {});
    }
</script>
