<template>
	<article class="w-full h-[4.5rem] px-4 py-3 inline-flex flex-row justify-between hoverEfect">
       <UserProfileImage :size="10.75"/>
       <div class="xl:w-[16.125rem] lg:w-[12.563rem] h-12 inline-flex flex-row justify-between items-center">
          <div class="xl:w-[10.5rem] lg:w-[7.25rem] inline-flex flex-col justify-center">
              <span class="h-5 text-base text-[#0f1419] font-bold truncate">The New York Times</span>
              <span class="text-sm text-[#0f1419] font-normal truncate">@nytimes</span>
         </div>
         <button class="w-[4.563rem] h-[1.938rem] bg-[#0f1419] text-white rounded-[2rem]">Follow</button>
      </div>
  </article>
</template>

<script setup>
  import UserProfileImage from './UserProfileImage.vue';
</script>