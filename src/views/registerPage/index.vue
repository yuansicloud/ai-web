<script setup lang='ts'>
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
        <header class="relative mb-6">
          <h1 class="mb-4 text-3xl font-bold dark:text-white">
            注册 AI Tools
          </h1>
        </header>
        <main>
          <p class="mt-2 mb-3">
            <span class="text-black dark:text-white">已经拥有帐号？</span>
            <a href="/pages" class="text-green-500 dark:text-[#86dfba]">立即登录</a>
          </p>
          <NTabs type="segment">
            <NTabPane name="chap1" tab="手机注册" />
          </NTabs>
          <div class="mb-4 text-2xl font-bold dark:text-white" style="padding: auto;">
            获取手机验证码
          </div>
          <NForm
            :ref="formRef"
            :model="model"
            :rules="rules"
            style="align-items: center; justify-content: center"
          >
            <div style="margin-bottom: 10px">
              <n-form-item path="phoneNumber">
                <NInput
                  v-model="model.phoneNumber"
                  placeholder="手机"
                  @keydown.enter.prevent
                />
              </n-form-item>
            </div>

            <div style="margin-bottom: 10px">
              <div class="flex justify-between">
                <div style="width: 70%;">
                  <NInput
                    v-model="model.Code"
                    placeholder="验证码"
                  />
                </div>
                <div>
                  <NButton type="primary">
                    获取验证码
                  </NButton>
                </div>
              </div>
            </div>
            <div class="px-px">
              <NButton type="primary" style="width: 100%">
                注册账号
              </NButton>
            </div>
          </NForm>

          <footer class="-ml-6 -mr-6 mt-6 flex items-center justify-center mt-4 text-center px-6 py-3 text-right">
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
