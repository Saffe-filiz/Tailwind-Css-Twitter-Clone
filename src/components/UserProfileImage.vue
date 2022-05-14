<template>
	<div class="w-[2.688rem] h-full">
		<div :class="`w-${userImage.size} h-${userImage.size} rounded-full bg-black`"></div>
	</div>
</template>

<script setup>
	const userImage = defineProps(['size'])
</script>