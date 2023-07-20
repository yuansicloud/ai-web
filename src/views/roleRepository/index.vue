<script setup lang="ts">
import { NButton, NGi, NGrid, NPagination, NTabPane, NTabs, NTag } from 'naive-ui'
import { computed, ref } from 'vue'

// 创建一个 ref 来存储当前选中的标签
const selectedTag = ref('')

const all = computed(() => selectedTag.value === 'all')
const translate = computed(() => selectedTag.value === 'translate')
const drawing = computed(() => selectedTag.value === 'drawing')
const copywriting = computed(() => selectedTag.value === 'copywriting')

const selectTag = (tag: string) => {
  selectedTag.value = tag
}
const page = ref(1)
const pageSize = ref(2)
</script>

<template>
  <div class="flex h-full w-full flex-col bg-white dark:bg-[#111114]">
    <div
      class="sticky left-0 right-0 top-0 z-40 border-b bg-white dark:border-b-neutral-800 dark:bg-[#111114]"
    >
      <div
        class="flex items-center justify-between px-4 m-auto h-14 max-w-screen-2xl"
      >
        <div
          class="flex items-center flex-1 min-w-0 pr-2 space-x-2 overflow-hidden"
        >
          <button class="flex">
            <svg
              aria-hidden="true"
              width="2em"
              height="2em"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 6l-6 6l6 6V6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 class="text-base font-bold" style="font-size: 20px;">
              角色仓库
            </h2>
          </button>
        </div>
      </div>
    </div>
    <main class="flex-1 overflow-hidden">
      <div class="relative m-auto h-full max-w-screen-2xl overflow-y-auto overflow-x-hidden p-4 pb-0">
        <div class="mb-4">
          <NTabs type="segment">
            <NTabPane name="chap1" tab="系统预设" />
          </NTabs>
          <div class="flex flex-wrap items-center gap-4">
            <NTag :checked="all" size="large" round checkable @click="selectTag('all')">
              全部
            </NTag>
            <NTag :checked="translate" size="large" round checkable @click="selectTag('translate')">
              翻译
            </NTag>
            <NTag :checked="drawing" size="large" round checkable @click="selectTag('drawing')">
              绘画提示词
            </NTag>
            <NTag :checked="copywriting" size="large" round checkable @click="selectTag('copywriting')">
              文案
            </NTag>
          </div>
        </div>
        <div>
          <div>
            <NGrid style="width: 100%; display: grid; grid-template-columns: repeat(12, minmax(0px, 1fr)); gap: 12px;">
              <NGi style="grid-column: span 4 / span 4;">
                <div class="relative overflow-hidden rounded-md border p-4 pt-8 transition-all hover:shadow dark:border-neutral-700">
                  <div class="mb-4 space-y-4 text-center">
                    <h2 class="text-ellipsis-1 text-xl font-bold">
                      小红书
                    </h2><div class="min-h-[75px] select-none text-neutral-700 dark:text-neutral-400">
                      小红书笔记生成器
                    </div>
                  </div>
                  <div class="-mx-4 -mb-4 flex items-center space-x-4 bg-[#fafafc] p-4 dark:bg-[#262629]">
                    <NButton>使用</NButton>
                  </div>
                  <div class="absolute right-1 top-1">
                    <NTag type="success" size="small" round>
                      系统预设
                    </NTag>
                  </div>
                </div>
              </NGi>
            </NGrid>
            <div class="sticky bottom-0 left-0 right-0 mt-4 bg-white py-4 dark:bg-[#111114]">
              <NPagination
                v-model:page="page"
                v-model:page-size="pageSize"
                :page-count="1"
                show-size-picker
                :page-sizes="[10, 20, 30, 40]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <main class="flex-1 overflow-hidden m-1">
      <div
        class="relative h-full p-4 pb-0 m-auto overflow-x-hidden overflow-y-auto max-w-screen-2xl"
      >
        <div class="mb-4">
          <div class="flex items-center justify-between space-x-4">
            <NButton type="success" @click="showModal = true">
              <span>
                <svg
                  aria-hidden="true"
                  width="1.5em"
                  height="1.5em"
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
              </span>
              <span> 添加角色 </span>
            </NButton>
            <div class="flex items-center space-x-2">
              <NInput type="text" placeholder="请输入名称" />
              <button>
                <span>
                  <svg
                    aria-hidden="true"
                    width="2em"
                    height="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 0 0 9.5 3C6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5C11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.47 10.82L4 13.29l-2.47-2.47l-.71.71L3.29 14L.82 16.47l.71.71L4 14.71l2.47 2.47l.71-.71L4.71 14l2.47-2.47z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button>
                <span>
                  <svg
                    aria-hidden="true"
                    width="2em"
                    height="2em"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                  >
                    <path
                      opacity=".3"
                      d="M13 9V5h-2v6H9.83L12 13.17L14.17 11H13z"
                      fill="currentColor"
                    />
                    <path
                      d="M15 9V3H9v6H5l7 7l7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <NEmpty description="暂无角色">
            <template #extra />
          </NEmpty>
        </div>
      </div>
    </main>
    <AddRole v-model:visible="showModal" /> -->
  </div>
</template>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
