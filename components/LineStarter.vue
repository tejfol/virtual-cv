<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="float-left mr-2 select-none">
    <span class="bg-gray-200 px-2">
      <svg
        class="w-2.5 inline"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#35bf5c" transform="scale(4)">
          <path d="m0 0v64h18v-46h23v-18z" />
          <path d="m23 23v41h18v-41z" />
          <path d="m46 0v64h18v-64z" />
        </g>
      </svg>
    </span>
    <span class="bg-cyan-600 px-2 rounded-r-full">
      <HomeIcon class="w-3 inline-block me-1 pb-[1px]" />~</span
    >
  </div>
</template>
