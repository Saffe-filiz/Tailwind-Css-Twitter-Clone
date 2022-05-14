<template>
	<div class="w-full min-h-[88px] pt-[8px] px-3.5 inline-flex flex-row border-b border-min-border-color bg-white hoverEfect">			<UserProfileImage :size="10.75" class="w-[2.688rem] h-full mr-[0.688rem]"/>
			<div class="w-full min-h-[5.563rem] inline-flex flex-col justify-between">	
				<div class="w-full min-h-[2.688]">
					 <!-- NAME, USER NAME AND TIME START -->
					<div class="w-full h-[1.125rem] mb-0.5 inline-flex justify-between">
						<div class="inline inline-flex items-center gap-x-[4px]">
							<!-- NAME START -->
							<span class="text-[#0f1419] text-[16px] font-bold">Name</span>
							<!-- NAME END -->
							<!-- USERNAME START -->
						    <a href="#" class="mr-[7px] text-[#536471] text-[14px] font-normal">@UserName</a>
						    <!-- USERNAME END -->
						    <!-- TIME CALCULATER START -->
						    <ThePostDate :date="post.date"/>
						    <!-- TIME CALCULATER END -->
						</div>
						<!--MORE ICON START -->
					    <div class="relative flexCenter">
				             <More/>	
			            </div>
			            <!--MORE ICON END -->
					</div>
						<!-- NAME AND USER NAME END -->	
						<!-- POST START -->	
					<div class="w-full h-auto break-words">
						<span class="text-[16px] font-normal text-[#0f1419]">test</span>
					</div>
					<!-- POST END -->	
				</div>
				<div class="w-full mt-[11px] empty:hidden">
			     <component :is="ThePollChoceSection" :image="images" :isPost="true"/>
				</div>
				 <!-- LIKA, COMMENT, SHARE, RETWEET ICONS START -->	
				<div class="max-w-[425px]  mb-1 flex items-end mt-[11px]">
					<div class="w-full inline-flex justify-between ml-[-8px]">
						<!-- COMMENT ICON END -->
						<span class="inline-flex items-center group hoverDuration">
							<Comment/>
							<span class="w-auto h-auto overflow-hidden pl-0.5 group-hover:text-[#1d9bf0]">3</span>
						</span>
						<!-- COMMENT ICON END -->
						<!-- RETWEET ICON START --> 
					    <span class="inline-flex items-center group hoverDuration" @click="increase('retweet')">
							<ReTweet :isActive="item.retweet.isActive"/>
							<span class="h-auto overflow-hidden pl-0.5 group-hover:text-[#00ba7c]" v-if="item.retweet.counter">
							    {{formatingCounterNumber(item.retweet.counter)}}
						    </span>
						</span>
						<!-- RETWEET ICON END -->	
						<!-- LIKA ICON START -->	
						<span @click="increase('like')" class="inline-flex items-center group hoverDuration">
							<Like :isActive="item.like.isActive"/>
							<span class="w-auto h-auto overflow-hidden pl-0.5 group-hover:text-[#f9189e]" v-if="item.like.counter">
							    {{formatingCounterNumber(item.like.counter)}}
						    </span>
						</span>
						<!-- LIKA ICON END -->	
						<!-- SHARE ICON START -->	
					   <Share/>
					   <!-- SHARE ICON END -->	
					</div>
				</div>
				<!-- LIKA, COMMENT, SHARE, RETWEET ICONS END -->	
			</div>
		</div>
</template>

<script setup>
	import { reactive, watch, computed, ref } from 'vue';
	import { useStore } from 'vuex'

	import ReTweet from './icons/PostIcons/ReTweet.vue';
	import Like from './icons/PostIcons/Like.vue';
	import Share from './icons/PostIcons/Share.vue';
	import Comment from './icons/PostIcons/Comment.vue';
	import More from './icons//More.vue';
	import ThePollChoceSection from './ThePollChoceSection.vue'
	import ThePostDate from './ThePostDate.vue';
	import ImageGallery from './ImageGallery.vue';
	import UserProfileImage from './UserProfileImage.vue';

	let attachments = [ThePollChoceSection, ImageGallery]

    let item = reactive({
    	'comment': {
    		'isActive': false,
    		'counter':  0,
    	},
    	'retweet': {
    		'isActive': false,
    		'counter':  99,
    	},
    	'like': {
    		'isActive': false,
    		'counter':  9,
    	},
    	'share': false,
    })

    let post = reactive({
    	date: 'Wed Apr 13 2022 04:04:43 GMT+0300 (GMT+03:00)',
    })

    let images = ref(["blob:http://localhost:3000/01470f82-2a24-4799-99c5-9179897cf08e"])

    const increase = ( str ) =>  {
        if(!item[str].isActive){
            item[str].isActive = true;
            item[str].isActive = true;
            item[str].counter++;
        }else {
            item[str].isActive = false
            item[str].counter--;
        }
    };

    let counterAnimationActiveClass = ref('');

    const counterIncressAimation = () => {
    	counterAnimationActiveClass.value = 'animate-increaseAnimation'
    	setTimeout(() => counterAnimationActiveClass.value = '', 400)
    }

    const counterDecreaseAimation = () => {
    	counterAnimationActiveClass.value = 'animate-decreaseAnimation'
    	setTimeout(() => counterAnimationActiveClass.value = '', 400)
    }

    watch(()=>[item.retweet.counter, item.like.counter], (previousValue, newValue) => {
    	if(previousValue >= newValue){
    		counterIncressAimation()
    	}else {
    		counterDecreaseAimation()
    	}
    })

    const formatingCounterNumber = computed(() => ( num ) =>  {
    	let number = ('' + (num / 1000)).split('.')

        if(num > 1000){
        	return number[0] + (number[1] > 0 ? `.${number[1].slice(0,1)}k`: 'k')
        }else if(num > 1000) {
        	return `${number[0]}` + (number[1] >= 1 ? `${number[1].slice(0,1)}.${number[1].slice(-1)}k`: 'k' )
        }else {
        	return num
        }
    })
</script>