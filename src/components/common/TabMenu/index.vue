<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const router = useRouter()
const activePage = ref('')
const goToPage = (page: string) => {
  activePage.value = page
  router.push(`/${page}`)
}
const { isMobile } = useBasicLayout()
</script>

<template>
  <div class="flex flex-col w-full">
    <footer v-if="isMobile" class="bg-white dark:bg-[#25272c]">
      <div class="grid py-2 border-t dark:border-t-neutral-800 grid-cols-4">
        <a
          class="cursor-pointer text-center leading-4 text-slate-500 menu"
          :class="{ 'is-active': activePage === 'chat' }"
          @click="goToPage('chat')"
        >
          <span class="inline-block text-xl">
            <NIcon>
              <svg
                aria-hidden="true"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </span>
          <p>Ai聊天</p>
        </a>
        <a
          class="cursor-pointer text-center leading-4 text-slate-500 menu"
          :class="{ 'is-active': activePage === 'setting' }"
          @click="goToPage('setting')"
        >
          <span class="inline-block text-xl">
            <NIcon>

              <svg
                aria-hidden="true"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
              >
                <circle
                  cx="22.406"
                  cy="9.594"
                  r="1.44"
                  fill="currentColor"
                />
                <path
                  d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838zM16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4z"
                  fill="currentColor"
                />
                <path
                  d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </span>
          <p>工作台</p>
        </a>
        <a
          class="cursor-pointer text-center leading-4 text-slate-500 menu"
          :class="{ 'is-active': activePage === 'message' }"
          @click="goToPage('message')"
        >
          <span class="inline-block text-xl">
            <NIcon>
              <svg
                aria-hidden="true"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
              >
                <path
                  d="M17 22v-8h-4v2h2v6h-3v2h8v-2h-3z"
                  fill="currentColor"
                />
                <path
                  d="M16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"
                  fill="currentColor"
                />
                <path
                  d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </span>
          <p>消息</p>
        </a>
        <a
          class="cursor-pointer text-center leading-4 text-slate-500 menu"
          :class="{ 'is-active': activePage === 'setting' }"
          @click="goToPage('setting')"
        >
          <span class="inline-block text-xl">
            <NIcon>
              <svg
                aria-hidden="true"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </span>
          <p>个人中心</p>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.menu {
  color: white; /* Default icon color */
}
.menu.is-active {
  color: #86dfba; /* Icon color when active */
}
</style>
