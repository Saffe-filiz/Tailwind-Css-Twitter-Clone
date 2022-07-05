<template>
	<div class="w-full h-full absolute left-0 top-0 flex items-center justify-center  bg-[#00000066]">
      	<div class="w-80 h-[236px] p-[29px] bg-white rounded-2xl flex flex-col gap-4 m-auto" v-on:click.stop>
      		<span>
      			<h2 class="text-lg font-bold" v-if="data.isSaveTweet">Save Tweet?</h2>
      			<h2 class="text-lg font-bold" v-else>Discard unsent Tweets</h2>
      			<p class="text-sm" v-if="data.isSaveTweet">You can save this to send later from your unsent Tweets. </p>
      			<p class="text-sm" v-else>This can’t be undone and you’ll lose your unsent Tweets.</p>
      		</span>
      		<span>
      			<slot/>
      		</span>
      	</div>
    </div>
</template>

<script setup>
	const data = defineProps({isSaveTweet: Boolean})
</script>