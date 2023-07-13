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
  <div class="flex flex-col w-full ">
    <footer v-if="isMobile" class="bg-white dark:bg-[#25272c]">
      <div class="grid py-2 border-t dark:border-t-neutral-800 grid-cols-4">
        <a
          class="leading-4 text-center cursor-pointer text-[#4b9e5f] dark:text-[#86dfba]"
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
          class="leading-4 text-center cursor-pointer text-[#4b9e5f] dark:text-[#86dfba]"
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
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </span>
          <p>工作台</p>
        </a>
        <a
          class="leading-4 text-center cursor-pointer text-[#4b9e5f] dark:text-[#86dfba]"
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
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </span>
          <p>消息</p>
        </a>
        <a
          class="leading-4 text-center cursor-pointer text-[#4b9e5f] dark:text-[#86dfba]"
          :class="{ 'is-active': activePage === 'setting' }"
          @click="goToPage('setting')"
        >
          <span class="inline-block text-xl">
            <NIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
              >
                <path
                  d="M26 30H6a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v24a2.002 2.002 0 0 1-2 2zM6 4v24h20V4z"
                  fill="currentColor"
                />
                <path d="M22 20H10v-2h12z" fill="currentColor" />
                <path d="M20 25h-8v-2h8z" fill="currentColor" />
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
