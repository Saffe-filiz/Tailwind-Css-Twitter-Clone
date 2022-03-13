<template>
	    <div class="w-[15.688rem] h-full flex flex-col box-content px-3">
			<div class="w-full h-[3.313rem] itemCenter pl-[1.100rem]">
				<Logo :width="28.38" :height="23.07"/>
			</div>
		    <div class="w-full h-[25rem]">
		    	<ul>
		    		<li class="listContent">
		    			<Home class="items-center"/>
		    			<p class="navigationTextStyle">Home</p>
		    		</li>
		    		<li class="listContent">
		    		    <Explore class="items-center"/>
		    			<p class="navigationTextStyle">Explore</p>
		    		</li>
		    		<li class="listContent">
		    		    <Notifications class="items-center"/>
		    			<p class="navigationTextStyle">Notifications</p>
		    		</li>
		    		<li class="listContent">
		    		    <Massages class="items-center"/>
		    			<p class="navigationTextStyle">Massages</p>
		    		</li>
		    		<li class="listContent">
		    		    <Bookmarks class="items-center"/>
		    			<p class="navigationTextStyle">Bookmarks</p>
		    		</li>
		    		<li class="listContent">
		    		    <List class="items-center"/>
		    			<p class="navigationTextStyle">Lists</p>
		    		</li>
		    		<li class="listContent">
		    		    <Profile class="items-center"/>
		    			<p class="navigationTextStyle">Profile</p>
		    		</li>
		    		<li class="listContent">
		    		    <More class="items-center"/>
		    			<p class="navigationTextStyle">More</p>
		    		</li>
		    	</ul>
		    </div>
		<div class="w-full h-[4.938rem] items-center">
			<button class="w-[14.063rem] h-[3.25rem] bg-[#1DA1F2] text-white font-bold text-[0.938rem] rounded-full">Tweet</button>
		</div>
		<div class="w-[15.688rem] h-16 absolute bottom-[0.75rem]">
        <div class="w-[15.688rem] h-16 rounded-[4rem] inline-flex items-center justify-around px-3 hoverEfect">
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