<template>
	<div class="w-[15.688rem] h-full flex fixed flex-col">
			<div class="w-full h-[3.313rem] bg-yellow-100"></div>
		    <div class="w-full h-[25rem]">
		    	<ul>
		    		<li class="listContent">
		    			<Home class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">Home</p>
		    		</li>
		    		<li class="listContent">
		    		    <Explore class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">Explore</p>
		    		</li>
		    		<li class="listContent">
		    		    <Notifications class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">Notifications</p>
		    		</li>
		    		<li class="listContent">
		    		    <Massages class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">Massages</p>
		    		</li>
		    		<li class="listContent">
		    		    <Bookmarks class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">Bookmarks</p>
		    		</li>
		    		<li class="listContent">
		    		    <List class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">List</p>
		    		</li>
		    		<li class="listContent">
		    		    <Profile class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">Profile</p>
		    		</li>
		    		<li class="listContent">
		    		    <More class="navigationIconStyle" :width="24" :height="24" />
		    			<p class="navigationTextStyle">More</p>
		    		</li>
		    	</ul>
		    </div>
		<div class="w-full h-[4.938rem] itemCenter">
			<button class="w-[14.125rem] h-[3.25rem] bg-[#1DA1F2] text-white font-bold text-[0.938rem] rounded-full">Tweet</button>
		</div>
		
	</div>
</template>

<script setup>
		import Home from '../assets/icons/Home.vue';
		import Explore from '../assets/icons/Explore.vue';
		import Notifications from '../assets/icons/Notifications.vue';
		import Massages from '../assets/icons/Massages.vue';
		import Bookmarks from '../assets/icons/Bookmarks.vue';
		import List from '../assets/icons/List.vue';
		import Profile from '../assets/icons/Profile.vue';
		import More from '../assets/icons/More.vue';
		import { ref } from 'vue';

		const navigation = ref(['Home', 'Explore', 'Notifications', 'Massages', 'Bookmarks', 'List', 'Profile', 'More'])

		

</script>