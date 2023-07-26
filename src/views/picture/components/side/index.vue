<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NInputNumber, NLayoutSider, NPopover, NSelect, NSwitch } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore } from '@/components/common'

const router = useRouter()
// 图像比例
const buttons = ref([
  { label: '1:1', isActive: false },
  { label: '4:3', isActive: false },
  { label: '3:4', isActive: false },
  { label: '16:9', isActive: false },
  { label: '9:16', isActive: false },
])
const setActive = (button) => {
  buttons.value.forEach(btn => (btn.isActive = false))
  button.isActive = true
}
// 模型选择
const items = ref([
  {
    label: 'MJ',
    src: 'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230724/8e29ca65ee3c81f126638cb8988825b2mj.jpg',
    isActive: false,
  },
  {
    label: 'NIJI',
    src: 'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230724/8e29ca65ee3c81f126638cb8988825b2mj.jpg',
    isActive: false,
  },
])

const selectItem = (selectedItem) => {
  for (const item of items.value) item.isActive = item === selectedItem
}
// 版本
const value = ref('song0')
const options = ref([
  {
    label: '5.1',
    value: 'song0',
    disabled: true,
  },
  {
    label: '6',
    value: 'song1',
    disabled: true,
  },
  {
    label: '2.3',
    value: 'song2',
    disabled: true,
  },
])
// 风格
const styleOptions = ref([
  {
    label: '默认',
    value: 'song0',
    disabled: true,
  },
  {
    label: '可爱',
    value: 'song1',
    disabled: true,
  },
  {
    label: '风景',
    value: 'song2',
    disabled: true,
  },
  {
    label: '富有表现力',
    value: 'song3',
    disabled: true,
  },
])
// 参数
const qualityOptions = ref([
  {
    label: '一般',
    value: 'song0',
    disabled: true,
  },
  {
    label: '清晰',
    value: 'song1',
    disabled: true,
  },
  {
    label: '高清',
    value: 'song2',
    disabled: true,
  },
  {
    label: '超高清',
    value: 'song2',
    disabled: true,
  },
])
const numberValue = ref('1')
// 设定
const active = ref(false)
const appStore = useAppStore()

const { isMobile } = useBasicLayout()
const show = ref(false)
const refresh = ref(false)

const collapsed = computed(() => appStore.siderCollapsed)

function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}

const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      position: 'fixed',
      zIndex: 50,
    }
  }
  return {}
})

const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }
  }
  return {}
})

watch(
  isMobile,
  (val) => {
    appStore.setSiderCollapsed(val)
  },
  {
    immediate: true,
    flush: 'post',
  },
)
</script>

<template>
  <NLayoutSider
    has-sider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    position="absolute"
    bordered
    :style="getMobileClass"
    :hide-trigger="false"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="h-full overflow-y-auto bg-[#fafbfc] p-4 dark:bg-[#18181c]" :style="mobileSafeArea">
      <div class="space-y-4">
        <div>
          <div class="mb-4 flex items-center text-sm">
            <div class="mr-1 text-sm">
              图像比列
            </div>
            <span class="text-base text-neutral-400">
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
                /></svg></span>
          </div>
          <div class="aspect flex items-center justify-between space-x-1">
            <button
              v-for="(button, index) in buttons"
              :key="index"
              class="aspect-item flex-1 rounded border-2 dark:border-neutral-700 active"
              :class="{ selected: button.isActive }"
              @click="setActive(button)"
            >
              <div
                class="aspect-box-wrapper mx-auto my-2 flex h-5 w-5 items-center justify-center"
              >
                <div
                  class="aspect-box rounded border-2 dark:border-neutral-700"
                  style="width: 100%; height: 100%"
                />
              </div>
              <p class="mb-1 text-center text-sm">
                {{ button.label }}
              </p>
            </button>
          </div>
        </div>
        <div>
          <div class="mb-4 flex items-center text-sm">
            <div class="mr-1 text-sm">
              模型选择
            </div>
            <span class="text-base text-neutral-400">
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
            </span>
          </div>
          <ul class="version space-x-2 flex">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="version-item"
            >
              <button
                class="relative overflow-hidden rounded-md border-4 dark:border-neutral-700"
                :class="{ 'active-item': item.isActive }"
                @click="selectItem(item)"
              >
                <span
                  class="absolute flex h-full w-full items-center justify-center bg-black/20"
                >
                  <span class="text-lg font-bold text-white">{{
                    item.label
                  }}</span>
                </span>
                <img
                  :src="item.src"
                  class="h-full w-full object-cover"
                  alt=""
                >
              </button>
            </li>
          </ul>
          <div class="mt-2 space-y-2">
            <div class="flex items-center justify-between space-x-2">
              <span class="w-[70px]">版本</span>
              <div class="flex-1">
                <NSelect
                  v-model:value="value"
                  :options="options"
                  size="small"
                />
              </div>
            </div>
          </div>
          <div class="mt-2 space-y-2">
            <div class="flex items-center justify-between space-x-2">
              <span class="w-[70px]">风格</span>
              <div class="flex-1">
                <NSelect
                  v-model:value="value"
                  :options="styleOptions"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4 flex items-center text-sm">
            <div class="mr-1 text-sm">
              参数
            </div>
            <span class="text-base text-neutral-400">
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
            </span>
          </div>
          <div class="mt-2 space-y-2">
            <div class="flex items-center justify-between space-x-2">
              <span class="w-[70px]">画质</span>
              <div class="flex-1">
                <NSelect
                  v-model:value="value"
                  :options="qualityOptions"
                  size="small"
                />
              </div>
              <div class="text-base text-neutral-400">
                <NPopover trigger="hover">
                  <template #trigger>
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
                  </template>
                  <span>画质：--quality 或 --q

                    参数释义：更高质量需要更长的时间处理更多细节</span>
                </NPopover>
              </div>
            </div>
          </div>
          <div class="mt-2 space-y-2">
            <div class="flex items-center justify-between space-x-2">
              <span class="w-[70px]">混乱</span>
              <div class="flex-1">
                <NInputNumber v-model:numberValue="numberValue" clearable />
              </div>
              <div class="text-base text-neutral-400">
                <NPopover trigger="hover">
                  <template #trigger>
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
                  </template>
                  <span>混乱：--chaos 或 --c，范围 0-100
                    参数释义：较高值将产生意想不到的结果和成分
                    较低值具有更可靠、可重复的结果</span>
                </NPopover>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4 flex items-center text-sm">
            <div class="mr-1 text-sm">
              风格化
            </div>
            <span class="text-base text-neutral-400">
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
            </span>
          </div>
          <div>
            <div class="grid grid-cols-4 gap-2">
              <NButton>低</NButton>
              <NButton>中</NButton>
              <NButton>高</NButton>
              <NButton>强烈</NButton>
            </div>
            <div class="mt-2">
              <NInputNumber v-model:numberValue="numberValue" clearable />
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4 flex items-center text-sm">
            <div class="mr-1 text-sm">
              设定
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between space-x-2">
              <span class="w-[70px]">携带参数</span>
              <div class="flex-1">
                <NSwitch v-model:value="active" />
              </div>
              <div class="text-base text-neutral-400">
                <NPopover trigger="hover">
                  <template #trigger>
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
                  </template>
                  <span>是否自动携带参数

                    开启：使用设定参数

                    关闭：可在提示词框自行设定参数</span>
                </NPopover>
              </div>
            </div>
            <div class="flex items-center justify-between space-x-2">
              <span class="w-[70px]">参数</span>
              <div class="flex-1">
                <NButton type="success" text>
                  重置
                </NButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <div class="flex h-8 items-center text-sm">
              <div class="mr-1 text-sm">
                余额
              </div>
            </div>
            <div class="flex-1">
              (2)
            </div>
            <div class="mr-2 flex items-center space-x-2">
              <NButton type="success" text>
                刷新
              </NButton>
              <NButton type="success" text>
                充值
              </NButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NLayoutSider>
  <template v-if="isMobile">
    <div
      v-show="!collapsed"
      class="fixed inset-0 z-40 w-full h-full bg-black/40"
      @click="handleUpdateCollapsed"
    />
  </template>
  <PromptStore v-model:visible="show" />
</template>

<style scoped>
.version-item button {
  box-sizing: border-box;
}
.selected {
  border-color: #63e2b7 !important;
}
.active-item {
  border-color: #63e2b7 !important;
}
</style>
