<template>
	<div class="w-[31.563rem] pt-3 border border-[#cfd9de] rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75">
			<div class="w-full h-[53px] border border-[#cfd9de] rounded"></div>
		</div>
		<div class="w-[2.375rem] pl-1 relative">
			<span class="block w-[2rem] h-[2rem] flexCenter rounded-full absolute bottom-6">+</span>
		</div>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Days</label>
				<select class="sectionStyle">
				<option>1</option>
			</select>
			</div>
		    <div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Hours</label>
				<select class="sectionStyle">
				<option>0</option>
			</select>
			</div>
			<div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Minutes</label>
				<select class="sectionStyle">
				<option>0</option>
			</select>
			</div>
		</div>
	</div>
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red ">Remove Poll</button>
	</div>
</div>
</template>