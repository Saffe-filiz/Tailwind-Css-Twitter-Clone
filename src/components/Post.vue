<template>
	<div class="w-full min-h-[88px] pb-[11px] px-4 inline-flex flex-row border-b border-min-border-color bg-white hoverEfect pt-[11px]">
		<!-- USER PROFILE IMAGE START -->
			<div class="w-[3.75rem] h-full">
				<div class="w-12 h-12 rounded-full bg-black"></div>
			</div>
	    <!-- USER PROFILE IMAGE END -->
			<div class="w-[31.625rem] min-h-[5.563rem] inline-flex flex-col justify-between">	
				<div class="w-full min-h-[2.688]">
					 <!-- NAME, USER NAME AND TIME START -->
					<div class="w-full h-[1.125rem] mb-0.5 inline-flex justify-between">
						<div class="inline inline-flex gap-x-[4px]">
							<!-- NAME START -->
							<span class="text-[#0f1419] text-base font-bold">Name</span>
							<!-- NAME END -->
							<!-- USERNAME START -->
						    <a href="#" class="mr-[7px] text-[#536471] text-[15px] font-normal">@UserName</a>
						    <!-- USERNAME END -->
						    <!-- TIME CALCULATER START -->
						    <TimeCalculator :date="post.date"/>
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
						<span class="text-[15px] font-normal text-[#0f1419]">test</span>
					</div>
					<!-- POST END -->	
				</div>
				<div class="w-full h-auto my-3 empty:hidden">
			     <ThePollChoceSection/>
				</div>
				 <!-- LIKA, COMMENT, SHARE, RETWEET ICONS START -->	
				<div class="w-full h-8.5 flex items-end">
					<div class="w-[425px] h-[29px] inline-flex justify-between ml-[-8px]">
						<!-- COMMENT ICON END -->
						<span>
							<Comment>
								<span class="w-auto h-auto overflow-hidden pl-0.5">
									<p>3</p>
								</span>
							</Comment>
						</span>
						<!-- COMMENT ICON END -->
						<!-- RETWEET ICON START -->
						<span @click="increase('retweet')">
							<ReTweet :isActive="item.retweet.isActive">
								<span class="w-auto h-auto overflow-hidden pl-0.5">
									<p :class="counterAnimationActiveClass" v-if="item.retweet.counter">{{formatingCounterNumber(item.retweet.counter)}}</p>
								</span>
							</ReTweet>
						</span>
						<!-- RETWEET ICON END -->	
						<!-- LIKA ICON START -->	
						<span @click="increase('like')">
							<Like :isActive="item.like.isActive">
								<span class="w-auto h-auto overflow-hidden pl-0.5">
									<p :class="counterAnimationActiveClass" v-if="item.like.counter">{{formatingCounterNumber(item.like.counter)}}</p>
								</span>
							</Like>
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

	import ReTweet from './icons/PostIcons/ReTweet.vue';
	import Like from './icons/PostIcons/Like.vue';
	import Share from './icons/PostIcons/Share.vue';
	import Comment from './icons/PostIcons/Comment.vue';
	import More from './icons//More.vue';
	import ThePollChoceSection from './ThePollChoceSection.vue'
	import TimeCalculator from './TimeCalculator.vue';


    let item = reactive({
    	'comment': {
    		'isActive': false,
    		'counter':  0,
    	},
    	'retweet': {
    		'isActive': false,
    		'counter':  0,
    	},
    	'like': {
    		'isActive': false,
    		'counter':  100,
    	},
    	'share': false,
    })

    let post = reactive({
    	date: 'Wed Apr 13 2022 04:04:43 GMT+0300 (GMT+03:00)',
    })

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