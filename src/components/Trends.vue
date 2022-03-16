<template>
	<div>
		<TrendList/>
		<WhoToFollow/>
		<div class="w-[21.875rem] text-[0.813rem] flex flex-wrap px-4 gap-y-1 gap-x-3">
			<a href="#">Terms of Service</a>
			<a href="#">Privacy Policy</a>
			<a href="#">Cookie Policy</a>
			<a href="#">Imprint</a>
			<a href="#">Ads info</a>
			<a href="#">More ...</a>
			<a href="#">© 2021 Twitter, Inc.</a>
		</div>
	</div>
</template>

<script setup>
	import TrendList from './TrendList.vue'
	import WhoToFollow from './WhoToFollow.vue'
</script>