<script setup lang="ts">
import {
  NAlert,
  NButton,
  NCard,
  NDataTable,
  NForm,
  NInput,
  NPopconfirm,
  NSelect,
  NTabPane,
  NTabs,
  NTag,
  useMessage,
} from 'naive-ui'
import { computed, ref } from 'vue'
import type { FormRules } from 'naive-ui'
import type { Language, Theme } from '@/store/modules/app/helper'
import { SvgIcon } from '@/components/common'
import { useAppStore, useUserStore } from '@/store'
import type { UserInfo } from '@/store/modules/user/helper'
import { getCurrentDate } from '@/utils/functions'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { t } from '@/locales'

const createColumns = () => {
  return [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Age',
      key: 'age',
    },
    {
      title: 'Address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
    },
    {
      title: 'Action',
      key: 'actions',
    },
  ]
}
const model = ref<ModelType>({
  password: null,
})
interface ModelType {
  password: string | null
}
const rules: FormRules = {
  password: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: '请输入手机',
    },
  ],
}
const data = ref()
const columns = createColumns()
const appStore = useAppStore()
const userStore = useUserStore()

const { isMobile } = useBasicLayout()

const ms = useMessage()

const theme = computed(() => appStore.theme)

const userInfo = computed(() => userStore.userInfo)

const avatar = ref(userInfo.value.avatar ?? '')

const name = ref(userInfo.value.name ?? '')

const description = ref(userInfo.value.description ?? '')

const language = computed({
  get() {
    return appStore.language
  },
  set(value: Language) {
    appStore.setLanguage(value)
  },
})

const themeOptions: { label: string; key: Theme; icon: string }[] = [
  {
    label: 'Auto',
    key: 'auto',
    icon: 'ri:contrast-line',
  },
  {
    label: 'Light',
    key: 'light',
    icon: 'ri:sun-foggy-line',
  },
  {
    label: 'Dark',
    key: 'dark',
    icon: 'ri:moon-foggy-line',
  },
]

const languageOptions: { label: string; key: Language; value: Language }[] = [
  { label: '简体中文', key: 'zh-CN', value: 'zh-CN' },
  { label: '繁體中文', key: 'zh-TW', value: 'zh-TW' },
  { label: 'English', key: 'en-US', value: 'en-US' },
  { label: '한국어', key: 'ko-KR', value: 'ko-KR' },
  { label: 'Русский язык', key: 'ru-RU', value: 'ru-RU' },
]

function getUserInfo(options: Partial<UserInfo>) {
  userStore.getUserInfo(options)
  ms.success(t('common.success'))
}

function handleReset() {
  userStore.resetUserInfo()
  ms.success(t('common.success'))
  window.location.reload()
}

function exportData(): void {
  const date = getCurrentDate()
  const data: string = localStorage.getItem('chatStorage') || '{}'
  const jsonString: string = JSON.stringify(JSON.parse(data), null, 2)
  const blob: Blob = new Blob([jsonString], { type: 'application/json' })
  const url: string = URL.createObjectURL(blob)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = `chat-store_${date}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function importData(event: Event): void {
  const target = event.target as HTMLInputElement
  if (!target || !target.files)
    return

  const file: File = target.files[0]
  if (!file)
    return

  const reader: FileReader = new FileReader()
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result as string)
      localStorage.setItem('chatStorage', JSON.stringify(data))
      ms.success(t('common.success'))
      location.reload()
    }
    catch (error) {
      ms.error(t('common.invalidFileFormat'))
    }
  }
  reader.readAsText(file)
}

function clearData(): void {
  localStorage.removeItem('chatStorage')
  location.reload()
}

function handleImportButtonClick(): void {
  const fileInput = document.getElementById('fileInput') as HTMLElement
  if (fileInput)
    fileInput.click()
}
</script>

<template>
  <div class="min-h-full p-8">
    <Header>
      <h2 class="mb-2 text-2xl font-bold text-black dark:text-white">
        个人中心
      </h2>
    </Header>
    <main>
      <NAlert type="warning">
        此为预览站，仅技术预览和学习使用，违反国内法律使用会被监管并在不主动通知下清除内容或帐号，请用邮箱注册登录，手机号和微信仅仅演示
      </NAlert>
      <div>
        <NTabs type="line" animated>
          <NTabPane name="总览" tab="总览">
            <div class="min-h-full p-4 ">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.avatarLink")
                  }}</span>
                  <div class="flex-1">
                    <NInput v-model:value="avatar" placeholder="" />
                  </div>
                  <NButton
                    size="tiny"
                    text
                    type="primary"
                    @click="getUserInfo({ avatar })"
                  >
                    {{ $t("common.save") }}
                  </NButton>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.name")
                  }}</span>
                  <div class="w-[200px]">
                    <NInput v-model:value="name" placeholder="" />
                  </div>
                  <NButton
                    size="tiny"
                    text
                    type="primary"
                    @click="getUserInfo({ name })"
                  >
                    {{ $t("common.save") }}
                  </NButton>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.description")
                  }}</span>
                  <div class="flex-1">
                    <NInput v-model:value="description" placeholder="" />
                  </div>
                  <NButton
                    size="tiny"
                    text
                    type="primary"
                    @click="getUserInfo({ description })"
                  >
                    {{ $t("common.save") }}
                  </NButton>
                </div>
                <div
                  class="flex items-center space-x-4"
                  :class="isMobile && 'items-start'"
                >
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.chatHistory")
                  }}</span>

                  <div class="flex flex-wrap items-center gap-4">
                    <NButton size="small" @click="exportData">
                      <template #icon>
                        <SvgIcon icon="ri:download-2-fill" />
                      </template>
                      {{ $t("common.export") }}
                    </NButton>

                    <input
                      id="fileInput"
                      type="file"
                      style="display: none"
                      @change="importData"
                    >
                    <NButton size="small" @click="handleImportButtonClick">
                      <template #icon>
                        <SvgIcon icon="ri:upload-2-fill" />
                      </template>
                      {{ $t("common.import") }}
                    </NButton>

                    <NPopconfirm placement="bottom" @positive-click="clearData">
                      <template #trigger>
                        <NButton size="small">
                          <template #icon>
                            <SvgIcon icon="ri:close-circle-line" />
                          </template>
                          {{ $t("common.clear") }}
                        </NButton>
                      </template>
                      {{ $t("chat.clearHistoryConfirm") }}
                    </NPopconfirm>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.theme")
                  }}</span>
                  <div class="flex flex-wrap items-center gap-4">
                    <template v-for="item of themeOptions" :key="item.key">
                      <NButton
                        size="small"
                        :type="item.key === theme ? 'primary' : undefined"
                        @click="appStore.setTheme(item.key)"
                      >
                        <template #icon>
                          <SvgIcon :icon="item.icon" />
                        </template>
                      </NButton>
                    </template>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.language")
                  }}</span>
                  <div class="flex flex-wrap items-center gap-4">
                    <NSelect
                      style="width: 140px"
                      :value="language"
                      :options="languageOptions"
                      @update-value="(value) => appStore.setLanguage(value)"
                    />
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="flex-shrink-0 w-[100px]">{{
                    $t("setting.resetUserInfo")
                  }}</span>
                  <NButton size="small" @click="handleReset">
                    {{ $t("common.reset") }}
                  </NButton>
                </div>
              </div>
            </div>
          </NTabPane>
          <NTabPane name="账户" tab="账户">
            <div class="py-6">
              <div class="max-w-screen-lg space-y-4">
                <div class="flex items-center space-x-4">
                  <NButton type="primary">
                    添加额度
                  </NButton>
                </div>
                <NCard title="余额" size="small">
                  <template #footer>
                    <grid
                      role="none"
                      class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-5"
                    >
                      <grid-item>
                        会员状态： <NTag type="success">
                          默认
                        </NTag>
                      </grid-item>
                      <grid-item>
                        对话总量: <NTag type="info">
                          5000
                        </NTag>
                      </grid-item>
                      <grid-item>
                        对话剩余： <NTag type="warning">
                          5000
                        </NTag>
                      </grid-item>
                      <grid-item>
                        绘画总量： <NTag type="info">
                          14
                        </NTag>
                      </grid-item>
                      <grid-item>
                        绘画剩余： <NTag type="warning">
                          14
                        </NTag>
                      </grid-item>
                    </grid>
                  </template>
                </NCard>
                <NCard title="记录" size="small">
                  <template #footer>
                    <NDataTable :columns="columns" :data="data" />
                  </template>
                </NCard>
              </div>
            </div>
          </NTabPane>
          <NTabPane name="套餐" tab="套餐">
            <NCard title="套餐介绍" size="small">
              <div
                class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3"
              >
                <div>
                  <NCard>
                    <div class="py-4 space-y-4">
                      <h2 class="text-xl font-bold">
                        20万额度
                      </h2>
                      <div class="text-base text-slate-500">
                        价格：<NTag type="info">
                          10 元
                        </NTag>
                      </div>
                    </div>
                    <div>体验套餐（仅演示）</div>
                    <div>
                      <NButton strong secondary type="primary">
                        立即购买
                      </NButton>
                    </div>
                  </NCard>
                </div>
                <div>
                  <NCard>
                    <div class="py-4 space-y-4">
                      <h2 class="text-xl font-bold">
                        画画赞赏礼包
                      </h2>
                      <div class="text-base text-slate-500">
                        价格：<NTag type="info">
                          9.9 元
                        </NTag>
                      </div>
                      <div>本站免费体验，如果你想赞助一下下也是可以的。 本礼包包含【20W对话额度】【120画画额度】</div>
                      <div>
                        <NButton strong secondary type="primary">
                          立即购买
                        </NButton>
                      </div>
                    </div>
                  </NCard>
                </div>
              </div>
            </NCard>
          </NTabPane>
          <NTabPane name="修改密码" tab="修改密码">
            <div class="py-6">
              <div class="max-w-[460px]">
                <NForm
                  ref="formRef"
                  :model="model"
                  :rules="rules"
                  style="align-items: center; justify-content: center"
                >
                  <div style="margin-bottom: 10px">
                    <n-form-item path="emali">
                      <NInput
                        v-model="model.password"
                        placeholder="旧密码"
                        @keydown.enter.prevent
                      />
                    </n-form-item>
                  </div>
                  <div style="margin-bottom: 10px">
                    <NInput
                      v-model="model.password"
                      type="password"
                      placeholder="密新密码"
                    />
                  </div>
                  <div style="margin-bottom: 10px">
                    <NInput
                      v-model="model.password"
                      type="password"
                      placeholder="确认密新密码"
                    />
                  </div>
                  <div>
                    <NButton type="primary" style="width: 100%" @click="goChat">
                      登录
                    </NButton>
                  </div>
                </NForm>
              </div>
            </div>
          </NTabPane>
        </NTabs>
      </div>
    </main>
  </div>
</template>>
