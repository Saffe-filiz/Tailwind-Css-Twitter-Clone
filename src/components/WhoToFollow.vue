<template>
	<div class="w-[21.875rem] h-[19.625rem] mt-4 rightSideMainStyle">
		<div class="rightSiteCartHeadarStyle">
			<h3>Who to follow</h3>
		</div>
		<UserCarts/>
		<UserCarts/>
		<UserCarts/>
		<div class="w-100 h-[3.125rem] p-4">
			<h4>Show more</h4>
		</div>
	</div>
</template>

<script setup>
	import UserCarts from './UserCarts.vue'
</script>