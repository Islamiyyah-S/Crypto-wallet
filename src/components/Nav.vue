<template>
  <Disclosure
    as="nav"
    class="bg-[#0e0e0e] border-b border-[#1a1a1a]"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
          >
            <Bars3Icon v-if="!open" class="block size-6" />
            <XMarkIcon v-else class="block size-6" />
          </DisclosureButton>
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="text-white font-bold text-xl">
            MCrypto<span class="text-[#e8b84b]">.</span>
          </div>

          <div class="hidden sm:ml-10 sm:flex sm:items-center sm:gap-6">
            <router-link
              to="/"
              class="text-gray-400 hover:text-[#e8b84b] text-sm"
              >Home</router-link
            >
            <router-link
              to="/market"
              class="text-gray-400 hover:text-[#e8b84b] text-sm"
              >Market</router-link
            >
            <a href="#" class="text-gray-400 hover:text-[#e8b84b] text-sm"
              >About</a
            >
            <a href="#" class="text-gray-400 hover:text-[#e8b84b] text-sm"
              >Features</a
            >
            <a href="#" class="text-gray-400 hover:text-[#e8b84b] text-sm"
              >How it Works</a
            >
          </div>
        </div>

        <button
          class="hidden sm:block bg-[#e8b84b] text-black font-bold px-5 py-2 rounded-full text-sm"
        >
          Sign in
        </button>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-4 pb-3 pt-2">
        <router-link
          to="/"
          class="block text-gray-400 hover:text-[#e8b84b] py-2 text-sm"
          >Home</router-link
        >
        <router-link
          to="/market"
          class="block text-gray-400 hover:text-[#e8b84b] py-2 text-sm"
          >Market</router-link
        >
        <a
          href="#"
          class="block text-gray-400 hover:text-[#e8b84b] py-2 text-sm"
          >About</a
        >
        <a
          href="#"
          class="block text-gray-400 hover:text-[#e8b84b] py-2 text-sm"
          >Features</a
        >
        <a
          href="#"
          class="block text-gray-400 hover:text-[#e8b84b] py-2 text-sm"
          >How it Works</a
        >
        <button
          class="mt-2 w-full bg-[#e8b84b] text-black font-bold px-5 py-2 rounded-full text-sm"
        >
          Sign in
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
