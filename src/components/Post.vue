<template>
	<div 
	class="w-full min-h-[113px] py-3 px-4 inline-flex flex-row border-b border-min-border-color bg-white hover:bg-[#f7f9f999] cursor-pointer hoverDuration">
			<div class="w-[3.75rem] h-full">
				<div class="w-12 h-12 rounded-full bg-black"></div>
			</div>
			<div class="w-[31.625rem] min-h-[5.563rem] inline-flex flex-col justify-between">
				<div class="w-full min-h-[2.688]">
					<div class="w-auto h-5 mb-0.5">
						<h3>Name</h3>
					</div>
					<div class="w-full h-auto break-words">
						<p>Post</p>
					</div>
				</div>
				<div class="w-full h-auto my-3 empty:hidden"></div>
				<div class="w-full h-8.5 flex items-end">
					<div class="w-[425px] h-auto inline-flex justify-between ml-[-8px]">
						<span @click="increase('comment')">
							<Comment :isActive="item.comment.isActive">
								<span class="w-auto h-auto overflow-hidden">
									<p :class="item.comment.currentClass" 
									v-if="item.comment.counter">{{item.comment.counter}}</p>
								</span>
							</Comment>
						</span>
						<span @click="increase('retweet')">
							<ReTweet :isActive="item.retweet.isActive">
								<span class="w-auto h-auto overflow-hidden">
									<p :class="item.retweet.currentClass" 
									v-if="item.retweet.counter">{{item.retweet.counter}}</p>
								</span>
							</ReTweet>
						</span>
						<span @click="increase('like')" class="overflow-hidden">
							<Like :isActive="item.like.isActive">
								<span class="w-auto h-auto overflow-hidden">
									<p :class="item.like.currentClass" 
									v-if="item.like.counter">{{item.like.counter}}</p>
								</span>
							</Like>
						</span>
					    <Share/>
					</div>
				</div>
			</div>
		</div>
</template>

<script setup>
	import { ref, reactive } from 'vue';

	import ReTweet from './icons/PostIcons/ReTweet.vue';
	import Like from './icons/PostIcons/Like.vue';
	import Share from './icons/PostIcons/Share.vue';
	import Comment from './icons/PostIcons/Comment.vue';


    let item = reactive({
    	'comment': {
    		'isActive': false,
    		'counter':  0,
    		'currentClass': '',
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

    let date = new Date()

    const dateCalculator = () => {
        let currentDate = new Date();
        let [_, month, day, year] = date.toString().split(' ')
        let second = Math.floor((currentDate - date) / 1000);
        let minute = Math.floor(second / 60);
        let hourse = Math.floor(minute / 60);
        let result;
        if(second >= 60){
            result = minute;
        }else if(minute >= 60 ){
            result = hourse;
        }else if(hourse >= 24) {
            result = `${month} ${day}`
        }else if (currentDate.getFullYear() > year){
            result = `${month} ${day} ${year}`
        }else {
            result = second
        }
        return result
      } 
</script>