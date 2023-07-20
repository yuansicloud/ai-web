<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider, NProgress } from 'naive-ui'
import { useRouter } from 'vue-router'
import List from './List.vue'
import { Search, Toolbar } from '@/views/chat/components'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore } from '@/components/common'
const router = useRouter()
const goSetting = () => {
  router.push('/setting')
}
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
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <Search />
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <Toolbar />
        <div class="p-4">
          <NButton block @click="show = true">
            {{ $t("store.siderButton") }}
          </NButton>
        </div>
        <div class="border-t p-4 dark:border-t-neutral-800">
          <div class="flex h-8 items-center justify-between space-x-2">
            <span>余额 4,880 (98%)</span>
            <div class="mr-2 flex items-center space-x-2">
              <NButton size="tiny" type="success">
                刷新
              </NButton>
              <NButton size="tiny" type="success" @click="goSetting">
                充值
              </NButton>
            </div>
          </div>
          <div class="mt-2">
            <NProgress
              type="line"
              :show-indicator="false"
              status="success"
              :percentage="98"
            />
          </div>
        </div>
      </main>
      <!-- <Footer /> -->
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
