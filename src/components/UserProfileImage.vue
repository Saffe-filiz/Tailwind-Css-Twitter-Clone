<template>
		<div class="w-auto h-auto">
			<div :class="`w-${userImage.size} h-${userImage.size} rounded-full bg-black`" draggable="false"></div>
		</div>
</template>

<script setup>
	const userImage = defineProps(['size'])
</script>