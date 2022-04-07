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
							<Comment>
								<p>0</p>
							</Comment>
							<ReTweet>
								<p>0</p>
							</ReTweet>
							<Like>
								<p>0</p>
							</Like>
					    	<Share/>
					    </div>
					</div>
				</div>
		</div>
</template>

<script setup>
	import ReTweet from './icons/PostIcons/ReTweet.vue';
	import Like from './icons/PostIcons/Like.vue';
	import Share from './icons/PostIcons/Share.vue';
	import Comment from './icons/PostIcons/Comment.vue';
</script>