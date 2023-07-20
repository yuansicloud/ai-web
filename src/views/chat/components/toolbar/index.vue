<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

const goRoleRepository = () => {
  router.push('/roleRepository')
}
function clearData(): void {
  localStorage.removeItem('chatStorage')
  location.reload()
}
</script>

<template>
  <div class="mt-2 space-y-2 border-t p-4 dark:border-t-neutral-800">
    <div class="flex space-x-2">
      <div class="flex-1">
        <NButton>
          <template #icon>
            <svg
              aria-hidden="true"
              width="2em"
              height="2em"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
                fill="currentColor"
              />
            </svg>
          </template>
          公告栏
        </NButton>
      </div>
      <div class="flex space-x-2">
        <NButton @click="goRoleRepository()">
          <template #icon>
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
          </template>
          角色仓库
        </NButton>
      </div>
    </div>
    <NButton style="width: 100%" @click="clearData">
      清空对话
    </NButton>
  </div>
</template>
