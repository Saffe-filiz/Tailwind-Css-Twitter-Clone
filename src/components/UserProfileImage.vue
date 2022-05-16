<template>
		<div class="w-auto h-auto">
			<div :class="`w-${userImage.size} h-${userImage.size} rounded-full bg-black`"></div>
		</div>
</template>

<script setup>
	const userImage = defineProps(['size'])
</script>