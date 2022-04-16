<template>
	<div 
	class="w-full min-h-[88px] pb-[11px] px-4 inline-flex flex-row border-b border-min-border-color bg-white hover:bg-[#f7f9f999] cursor-pointer hoverDuration">
			<div class="w-[3.75rem] h-full">
				<div class="w-12 h-12 rounded-full bg-black"></div>
			</div>
			<div class="w-[31.625rem] min-h-[5.563rem] inline-flex flex-col justify-between">	
				<div class="w-full min-h-[2.688]">
					 <!-- NAME, USER NAME AND TIME START -->
					<div class="w-auto h-5 mb-0.5 inline inline-flex gap-x-[4px]">
						<span>Name</span>
						<a href="#" class="mr-[7px]">@UserName</a>
						<!-- TIME CALCULATER START -->
						<TimeCalculteter :date="post.date"/>
						<!-- TIME CALCULATER END -->
					</div>
						<!-- NAME AND USER NAME END -->	
						<!-- POST START -->	
					<div class="w-full h-auto break-words">
						<p>Post</p>
					</div>
					<!-- POST END -->	
				</div>
			   <!-- POST IMAGE AND ANHOTER CONTENT START -->	 
				<div class="w-full h-auto my-3 empty:hidden">
			     <!-- <ThePollChoceSection/>-->
				</div>
				 <!-- POST IMAGE AND ANHOTER CONTENT AND -->	
				 <!-- LIKA, COMMENT, SHARE, RETWEET START -->	
				<div class="w-full h-8.5 flex items-end">
					<div class="w-[425px] h-[29px] inline-flex justify-between ml-[-8px]">
						<!-- LIKA COMMENT END -->
						<span>
							<Comment>
								<span class="w-auto h-auto overflow-hidden">
									<p :class="item.comment.currentClass">3</p>
								</span>
							</Comment>
						</span>
						<!-- LIKA COMMENT END -->
						<!-- LIKA RETWEET START -->
						<span @click="increase('retweet')">
							<ReTweet :isActive="item.retweet.isActive">
								<span class="w-auto h-auto overflow-hidden">
									<p :class="item.retweet.currentClass" 
									v-if="item.retweet.counter">{{item.retweet.counter}}</p>
								</span>
							</ReTweet>
						
						</span>
						<!-- LIKA RETWEET END -->	
						<!-- LIKA CHOCE START -->	
						<span @click="increase('like')">
							<Like :isActive="item.like.isActive">
								<span class="w-auto h-auto overflow-hidden">
									<p :class="item.like.currentClass" 
									v-if="item.like.counter">{{item.like.counter}}</p>
								</span>
							</Like>
						</span>
						<!-- LIKA CHOCE END -->	
						<!-- SHARE CHOCE START -->	
					   <Share/>
					   <!-- SHARE CHOCE END -->	
					</div>
				</div>
				<!-- LIKA, COMMENT, SHARE, RETWEET END -->	
			</div>
		</div>
</template>

<script setup>
	import { reactive } from 'vue';

	import ReTweet from './icons/PostIcons/ReTweet.vue';
	import Like from './icons/PostIcons/Like.vue';
	import Share from './icons/PostIcons/Share.vue';
	import Comment from './icons/PostIcons/Comment.vue';
	import ThePollChoceSection from './ThePollChoceSection.vue'
	import TimeCalculteter from './TimeCalculteter.vue';


    let item = reactive({
    	'comment': {
    		'isActive': false,
    		'counter':  0,
    	},
    	'retweet': {
    		'isActive': false,
    		'counter':  0,
    		'currentClass': '',
    	},
    	'like': {
    		'isActive': false,
    		'counter':  0,
    		'currentClass': '',
    	},
    	'share': false,
    })

    const increase = ( str ) =>  {
        if(!item[str].isActive){
            item[str].isActive = true;
            item[str].isActive = true;
            item[str].currentClass = 'animate-increaseAnimation';
            item[str].counter++;
        }else {
            item[str].isActive = false
            item[str].currentClass = 'animate-decreaseAnimation';
            item[str].counter--;
         }
    };


    let post = reactive({
    	date: 'Wed Apr 13 2022 04:04:43 GMT+0300 (GMT+03:00)',
    })
</script>