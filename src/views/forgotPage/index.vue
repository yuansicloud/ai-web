<script  setup lang='ts'>
import type { FormInst, FormRules } from 'naive-ui'
import { NButton, NForm, NInput, NTabPane, NTabs } from 'naive-ui'
import { ref } from 'vue'
const formRef = ref<FormInst | null>(null)

interface ModelType {
  phoneNumber: string | null
  password: string | null
  Code: string | null
}

const model = ref<ModelType>({
  phoneNumber: null,
  password: null,
  Code: null,
})
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
  Code: [
    {
      required: true,
      message: '请输入验证码',
    },
  ],
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div
      class="m-auto flex items-stretch overflow-hidden rounded-md bg-white dark:bg-[#18181c] max-w-[840px]"
    >
      <div class="p-6 pb-0 w-[420px]">
        <header class="mb-6 text-center">
          <h1 class="mb-4 text-2xl font-bold dark:text-white">
            找回密码
          </h1>
          <p class="text-base text-slate-500 dark:text-slate-400">
            请填写以下必要信息
          </p>
        </header>
        <main>
          <NTabs type="segment">
            <NTabPane name="chap1" tab="短信找回" />
          </NTabs>

          <NForm
            ref="formRef"
            :model="model"
            :rules="rules"
            style="align-items: center; justify-content: center"
          >
            <div style="margin-bottom: 10px">
              <n-form-item path="emali">
                <NInput
                  v-model="model.phoneNumber"
                  placeholder="手机"
                  @keydown.enter.prevent
                />
              </n-form-item>
            </div>
            <div style="margin-bottom: 10px">
              <NInput
                v-model="model.password"
                type="password"
                placeholder="新密码"
              />
            </div>
            <div style="margin-bottom: 10px">
              <NInput
                v-model="model.password"
                type="password"
                placeholder="确认新密码"
              />
            </div>
            <div style="margin-bottom: 10px">
              <div
                class="mb-4 text-2xl font-bold dark:text-white"
                style="padding: auto"
              >
                获取手机验证码
              </div>
              <div class="flex justify-between">
                <div style="width: 70%">
                  <NInput v-model="model.Code" placeholder="验证码" />
                </div>
                <div class="p-1">
                  <NButton type="primary">
                    获取验证码
                  </NButton>
                </div>
              </div>
            </div>
            <div class="px-px">
              <NButton type="primary" style="width: 100%">
                更改账号
              </NButton>
            </div>
          </NForm>

          <footer
            class="-ml-6 -mr-6 mt-6 flex items-center justify-center mt-4 text-center px-6 py-3 text-right"
          >
            <div>
              <a
                href="/pages"
                class="text-neutral-600 underline hover:text-[#4b9e5f] dark:text-neutral-500 dark:hover:text-[#86dfba]"
              >返回登录</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
