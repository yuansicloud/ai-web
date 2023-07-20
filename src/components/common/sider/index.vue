<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NAvatar, NTooltip } from 'naive-ui'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useUserStore } from '@/store'
import defaultAvatar from '@/assets/avatar.jpg'

const store = useUserStore()

const userAvatar = computed(() => store.getUserInfo.extraProperties?.Avatar)

const router = useRouter()
const { isMobile } = useBasicLayout()

// 返回chatGPT
const activePage = ref('')

const goToPage = (page: string) => {
  activePage.value = page
  router.push(`/${page}`)
}
// 默认页面为chat
onMounted(() => {
  goToPage('chat')
})
</script>

<template>
  <aside v-if="!isMobile" style="width: 72px; max-width: 72px">
    <div
      class="flex h-full flex-col items-center justify-between bg-[#e8eaf1] px-2 py-7 dark:bg-[#25272d]"
    >
      <div class="flex flex-col space-y-4">
        <NTooltip :show-arrow="false" placement="left-start" trigger="hover">
          <template #trigger>
            <a
              class="menu h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c]"
              :class="{ 'is-active': activePage === 'chat' }"
              @click="goToPage('chat')"
            >
              <div class="flex h-full">
                <div class="m-auto text-center">
                  <svg
                    aria-hidden="true"
                    width="2em"
                    height="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </template>
          Ai聊天
        </NTooltip>
        <NTooltip :show-arrow="false" placement="left-start" trigger="hover">
          <template #trigger>
            <a
              class="menu h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c]"
              :class="{ 'is-active': activePage === 'roleRepository' }"
              @click="goToPage('roleRepository')"
            >
              <div class="flex h-full">
                <div class="m-auto text-center">
                  <svg
                    aria-hidden="true"
                    width="2em"
                    height="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="9"
                      cy="8.5"
                      opacity=".3"
                      r="1.5"
                      fill="currentColor"
                    />
                    <path
                      opacity=".3"
                      d="M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"
                      fill="currentColor"
                    />
                    <path
                      d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5S5.5 6.57 5.5 8.5S7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35c.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </template>
          角色仓库
        </NTooltip>
        <!-- <a
            class="menu h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c]"
            :class="{ 'is-active': activePage === 'setting' }"
            @click="goToPage('setting')"
          >
            <div class="flex h-full">
              <div class="m-auto text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                >
                  <path
                    d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                    fill="currentColor"
                  />
                  <use fill="currentColor" />
                </svg>
              </div>
            </div>
          </a> -->
      </div>
      <div class="flex select-none flex-col items-center space-y-2">
        <a
          class="!hover:text-green-500 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-black dark:text-white"
          @click="goToPage('message')"
        >
          <div class="flex h-full">
            <div class="m-auto text-center">
              <svg
                aria-hidden="true"
                width="2em"
                height="2em"
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
            </div>
          </div>
        </a>
        <a
          class="!hover:text-green-500 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-black dark:text-white"
        >
          <div
            class="h-full w-full cursor-pointer overflow-hidden rounded-full"
          >
            <NAvatar
              size="large"
              round
              :src="userAvatar"
              :fallback-src="defaultAvatar"
              @click="goToPage('setting')"
            />
          </div>
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.menu {
  color: white; /* Default icon color */
}
.menu.is-active {
  color: #86dfba; /* Icon color when active */
}
</style>
