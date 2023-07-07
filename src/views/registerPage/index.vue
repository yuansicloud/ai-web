<script setup lang='ts'>
import type { FormInst } from 'naive-ui'
import { NButton, NForm, NFormItem, NInput, NTabPane, NTabs } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const formValue = ref({
  phone: '',
  code: '',
})
const rules = {
  phone: {
    required: true,
    message: '电话号码不能为空',
    trigger: ['input'],
  },
  code: {
    required: true,
    message: '验证码不能为空',
    trigger: ['input'],
  },
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
          <div
            class="mb-4 text-2xl font-bold dark:text-white"
            style="padding: auto"
          >
            获取手机验证码
          </div>
          <NForm
            ref="formRef"
            :model="formValue"
            :rules="rules"
            size="small"
            style="height: ;"
          >
            <NFormItem path="phone" style="height: 50px;">
              <NInput
                v-model:value="formValue.phone"
                placeholder="手机"
                @keydown.enter.prevent
              />
            </NFormItem>

            <div class="flex justify-between" style="align-items: center; height: 80px;">
              <div style="width: 70%">
                <NFormItem path="code">
                  <NInput
                    v-model="formValue.code" placeholder="验证码"
                    @keydown.enter.prevent
                  />
                </NFormItem>
              </div>
              <NButton type="primary">
                获取验证码
              </NButton>
            </div>

            <div class="px-px">
              <NButton type="primary" style="width: 100%">
                注册账号
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
