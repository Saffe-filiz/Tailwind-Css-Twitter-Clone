<template>
	    <div class="w-[15.688rem] h-full flex flex-col box-content px-3">
			<div class="w-full h-[3.313rem] itemCenter pl-[1.100rem]">
				<Logo :width="28.38" :height="23.07"/>
			</div>
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
		    			<p class="navigationTextStyle">Lists</p>
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
			<button class="w-[14.063rem] h-[3.25rem] bg-[#1DA1F2] text-white font-bold text-[0.938rem] rounded-full">Tweet</button>
		</div>
		<ProfileSetting/>
    </div>
</template>

<script setup>
	    import Logo from './icons/Logo.vue';
		import Home from './icons/Home.vue';
		import Explore from './icons/Explore.vue';
		import Notifications from './icons/Notifications.vue';
		import Massages from './icons/Massages.vue';
		import Bookmarks from './icons/Bookmarks.vue';
		import List from './icons/List.vue';
		import Profile from './icons/Profile.vue';
		import More from './icons/More.vue';
		import ProfileSetting from './ProfileSetting.vue'
</script>