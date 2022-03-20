<template>
	<div class="w-[583px] h-auto rounded-t-2xl rounded-r-2xl overflow-auto">
	<div class="w-full h-[50px] inline-flex flex-row justify-between px-[15px]">
		<div class="flex items-center justify-between">
		    <span class="w-[32px] h-[32px] rounded-full text-white hover:bg-[#0f14191a] transform cursor-pointer duration-200  flex items-center justify-center text-[#2d3136]">&#10005</span>
			<span class="ml-[20px]">Schedule</span>
		</div>
		<button>Confirm</button>
	</div>
			<div class="w-full h-auto bg-yellow py-[11px]">
		<div class="flex flex-col gap-[23px] px-[15px]">
				<div><span>Will send on Sun, Mar 5, 2023 at 4:16 PM</span></div>
			<div>
		<span>Date</span>
		<div class="flex flex-row justify-between">
			<div class="w-[264px] h-[53px] border border-[#cfd9de] rounded">
				<label class="ml-2">Mouth</label>
				<select class="w-full h-[38px] p-2 cursor-pointer mt-[-8px] bg-transparent outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
			<div class="w-[125px] h-[55px] border border-[#cfd9de] rounded">
				<label class="ml-2">Day</label>
				<select class="w-full h-[38px] p-2 cursor-pointer mt-[-8px] bg-transparent outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
			<div class="w-[145px] h-[55px] border border-[#cfd9de] rounded">
				<label class="ml-2">Year</label>
				<select class="w-full h-[38px] p-2 cursor-pointer mt-[-8px] bg-transparent outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
		</div>
		</div>
		<div>
			<span>Time</span>
			<div class="w-auto flex flex-row gap-[11px]">
			<div class="w-[182px] h-[53px] border border-[#cfd9de] rounded">
				<label class="ml-2">Mouth</label>
				<select class="w-full h-[38px] p-2 cursor-pointer mt-[-8px] bg-transparent outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
			<div class="w-[182px] h-[55px] border border-[#f2f5f6] rounded">
				<label class="ml-2">Day</label>
				<select class="w-full h-[38px] p-2 cursor-pointer mt-[-8px] bg-transparent outline-none appearance-none">
				<option>0</option>
			</select>
			</div>
		 </div>
		</div>
	
		<div class="w-full" >
			<p>Time zone</p>
			<h4>GMT+03:00</h4>
		</div>
		</div>
	</div>
<div class="w-full h-[45px] px-[15px] border-t-[1px]">	
</div>
</div>
</template>