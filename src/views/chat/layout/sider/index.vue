<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NIcon, NInput, NLayoutSider, NSpace } from 'naive-ui'
import List from './List.vue'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore } from '@/components/common'

const appStore = useAppStore()
const chatStore = useChatStore()

const { isMobile } = useBasicLayout()
const show = ref(false)

const collapsed = computed(() => appStore.siderCollapsed)

function handleAdd() {
  chatStore.addHistory({ title: 'New Chat', uuid: Date.now(), isEdit: false })
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

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
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    position="absolute"
    bordered
    :style="getMobileClass"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div
          class="flex h-14 items-center space-x-2 bg-white px-4 dark:bg-[#18181c]"
          style="align-items: center; justify-content: center"
        >
          <div class="flex-1">
            <NSpace vertical>
              <NInput placeholder="搜索">
                <template #prefix>
                  <NIcon :component="FlashOutline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          d="M19.107 9.168a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06l-2.613-2.612zM19.5 5.5a3 3 0 1 0-6 0a3 3 0 0 0 6 0zm-.5 4.976v10.769a.75.75 0 0 1-1.188.609l-5.81-4.181l-5.812 4.18a.75.75 0 0 1-1.188-.608V6.249a3.25 3.25 0 0 1 3.25-3.25H11.6a5.5 5.5 0 0 0 7.35 7.426l.05.05z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </NIcon>
                </template>
              </NInput>
            </NSpace>
          </div>
          <div>
            <NButtonGroup vertical size="medium">
              <NButton @click="handleAdd">
                <template #icon>
                  <NIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 16 16"
                    >
                      <g fill="none">
                        <path
                          d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5V2.75z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </NIcon>
                </template>
              </NButton>
            </NButtonGroup>
          </div>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <div
          class="mt-2 space-y-2 border-t p-4 dark:border-t-neutral-800 justify-center items-center"
        >
          <div class="flex space-x-2 justify-center items-center">
            <div class="flex-1">
              <NButtonGroup
                class="n-button n-button--default-type n-button--small-type n-button--block w-1"
                vertical
                size="medium"
              >
                <NButton>
                  <template #icon>
                    <NIcon><LogiNIcon /></NIcon>
                  </template>
                  公告栏
                </NButton>
              </NButtonGroup>
            </div>
            <div class="flex-1">
              <NButtonGroup
                class="n-button n-button--default-type n-button--small-type n-button--block"
                vertical
                size="medium"
              >
                <NButton>
                  <template #icon>
                    <NIcon><LogiNIcon /></NIcon>
                  </template>
                  角色仓库
                </NButton>
              </NButtonGroup>
            </div>
          </div>
          <div class="items-center justify-center">
            <NButtonGroup vertical size="medium">
              <NButton style="width: 100%">
                清除会话
              </NButton>
            </NButtonGroup>
          </div>
        </div>
        <div class="p-4">
          <NButton block @click="show = true">
            {{ $t("store.siderButton") }}
          </NButton>
        </div>
        <div class="border-t p-4 dark:border-t-neutral-800">
          <div class="h-8 mb-2 flex items-center justify-between space-x-2">
            <span>余额 4,978 (100%)</span>
            <div class="mr-2 flex items-center space-x-2">
              <NSpace>
                <NSpin size="small" />
              </NSpace>
              <NButton
                size="tiny"
                strong
                secondary
                type="primary"
                @click="handleAdd"
              >
                刷新
              </NButton>
              <NButton
                size="tiny"
                strong
                secondary
                type="primary"
                @click="handleAdd"
              >
                充值
              </NButton>
            </div>
          </div>
          <div style="width: 100%; height: 10%">
            <NProgress
              type="line"
              :show-indicator="false"
              status="error"
              :percentage="20"
            />
          </div>
        </div>
      </main>
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
