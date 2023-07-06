<script setup lang='ts'>
import {
  NAlert,
  NButton,
  NCarousel,
  NForm,
  NInput,
  NSelect,
  NTabPane,
  NTabs,
} from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBasicLayout } from '@/hooks/useBasicLayout'
const router = useRouter()

const value = ref(null)
const options = [
  {
    label: '暗色',
    value: 'song1',
  },
  {
    label: '亮色',
    value: 'song2',
  },
]
const goChat = () => {
  router.push('/chat')
}
const goforgotPage = () => {
  router.push('/forgotPage')
}
const goRegisterPage = () => {
  router.push('/registerPage')
}
const { isMobile } = useBasicLayout()
</script>

<template>
  <div class="h-screen bg-[#e8eaf1] dark:bg-[#111114]">
    <div class="flex h-full">
      <div
        class="m-auto flex items-stretch overflow-hidden rounded-md bg-white dark:bg-[#18181c] max-w-[840px]"
      >
        <div v-if="!isMobile" class="w-[420px] bg-[#f8f9fa] dark:bg-[#25272c]">
          <NCarousel :space-between="20" draggable>
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
            >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            >
          </NCarousel>
        </div>
        <div class="relative pb-0 w-[420px] p-6">
          <div class="min-h-[350px]">
            <header class="relative flex items-center mb-4">
              <h1 class="text-3xl font-bold dark:text-white">
                登录 AI Tools
              </h1>
            </header>
            <div>
              <NAlert type="warning">
                此为预览站，仅技术预览和学习使用，违反国内法律使用会被监管并在不主动通知下清除内容或帐号，请用邮箱注册登录，手机号和微信仅仅演示。
              </NAlert>
            </div>
            <main>
              <p class="mt-2 mb-3">
                <span class="text-black dark:text-white">新用户？</span>
                <a class="text-green-500 dark:text-[#86dfba]" @click="goRegisterPage">
                  注册帐号</a>
              </p>
              <NTabs type="segment">
                <NTabPane name="chap1" tab="账号登录" />
              </NTabs>

              <div
                class="mb-4 text-2xl font-bold dark:text-white"
                style="padding: auto"
              >
                获取手机验证码
              </div>
              <NForm style="align-items: center; justify-content: center">
                <div style="margin-bottom: 10px">
                  <NTabItem path="phoneNumber">
                    <NInput placeholder="手机" @keydown.enter.prevent />
                  </NTabItem>
                </div>

                <div style="margin-bottom: 10px">
                  <div class="flex justify-between">
                    <div style="width: 70%">
                      <NInput placeholder="验证码" />
                    </div>
                    <div>
                      <NButton type="primary">
                        获取验证码
                      </NButton>
                    </div>
                  </div>
                </div>
                <div class="px-px">
                  <NButton type="primary" style="width: 100%" @click="goChat">
                    登录
                  </NButton>
                </div>
              </NForm>
              <p class="mt-4 text-xs text-neutral-400">
                登录前我们默认你已知晓并同意
                <a href="" class="text-blue-600 dark:text-blue-300">《服务条款》</a>
              </p>
            </main>
            <footer
              class="flex items-center justify-between px-6 py-3 pt-6 -ml-6 -mr-6 text-right"
            >
              <div class="flex items-center">
                <NSelect
                  v-model:value="value"
                  style="width: 72px"
                  :options="options"
                />
              </div>
              <a class="text-neutral-600 underline hover:text-[#4b9e5f] dark:text-neutral-500 dark:hover:text-[#86dfba]" @click="goforgotPage"> 找回密码? </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
