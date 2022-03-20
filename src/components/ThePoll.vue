<template>
	<div class="w-[505px] pt-3 border border-[#cfd9de] rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-[11px] pl-[11px]">
			<div class="w-full h-[53px] border border-[#cfd9de] rounded"></div>
		</div>
		<div class="w-[38px] relative">
			<span class="block w-[32px] h-[32px] bg-red-800 rounded-full absolute bottom-6"></span>
		</div>
	</div>
	<div class="w-full p-[11px] border-t-[1px] border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<div class="w-[142px] h-[55px] border border-[#cfd9de] rounded">
				<label class="ml-2">Days</label>
				<select class="w-full h-[38px] cursor-pointer p-2 bg-transparent mt-[-8px] outline-none appearance-none">
				<option>1</option>
			</select>
			</div>
		    <div class="w-[142px] h-[55px] border border-[#cfd9de] rounded">
				<label class="ml-2">Hours</label>
				<select class="w-full h-[38px] cursor-pointer p-2 bg-transparent mt-[-8px] outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
			<div class="w-[142px] h-[55px] border border-[#cfd9de] rounded">
				<label class="ml-2">Minutes</label>
				<select class="w-full h-[38px] p-2 cursor-pointer mt-[-8px] bg-transparent outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
		</div>
	</div>
	<div class="w-full h-[50px] rounded-b-2xl border-t-[1px] border-[#cfd9de] hover:bg-[#f4212e1a] hover:transition duration-200">
		<button class="w-full h-full bg-red ">Remove Poll</button>
	</div>
</div>
</template>