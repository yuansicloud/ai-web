<script setup lang='ts'>
import {
  NButton,
  NEmpty,
  NGrid,
  NGridItem,
  NIcon,
  NImage,
  NInput,
  NPagination,
  NPopover,
  NScrollbar,
  NTag,
} from 'naive-ui'
import { onMounted, onUnmounted, ref } from 'vue'
import { Header, Sider } from '@/views/picture/components/index'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const items = ref([
  { id: 1, label: '可爱的小猫', translation: 'a cute cat' },
  {
    id: 2,
    label: '动漫女孩',
    translation:
      'a blue, girl with colorful hair, in the style of yanjun cheng, clowncore, 32k uhd, painted illustrations, close up, lively tableaus, kawaii art HD 8K',
  },
  {
    id: 3,
    label: '吃西瓜的女孩',
    translation:
      'a little girl eating watermelon on a farm, by Maria Hernandez, unsplash, joyful expression, green fields, sunny day, bright colors, rustic atmosphere, wooden fence, straw hat, freckles, pure happiness, blissful moment',
  },
])
const useButton = () => {
  console.log('使用按钮被点击')
}

const downloadButton = () => {
  console.log('下载按钮被点击')
}

const deleteButton = () => {
  console.log('删除按钮被点击')
}

const buttons = ref([
  { label: '使用', action: useButton },
  { label: '下载', action: downloadButton },
  { label: '删除', action: deleteButton },
])
const inputValue = ref(null)
const index = ref(1)
const insertText = (translation) => {
  inputValue.value = translation
}
const page = ref(1)
const pageSize = ref(20)
const colCount = ref(4)

const updateColCount = () => {
  if (window.innerWidth <= 600)
    colCount.value = 1

  else if (window.innerWidth <= 900)
    colCount.value = 2

  else
    colCount.value = 4
}

onMounted(() => {
  updateColCount()
  window.addEventListener('resize', updateColCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateColCount)
})
const value = ref(null)
const { isMobile } = useBasicLayout()
</script>

<template>
  <Sider />
  <Header v-if="isMobile" />
  <div class="h-full flex-1 overflow-hidden overflow-y-auto main-content">
    <div class="m-auto max-w-screen-2xl">
      <div class="space-y-6 p-4">
        <div>
          <header class="flex items-center space-x-2">
            <h2 class="font-bold text-2xl">
              AI绘画
            </h2>
          </header>
          <main class="space-y-2">
            <p class="mt-2">
              上传参考图：生成类似风格或类型图像；图生文：上传一张图片生成相似的提示词
            </p>
            <div class="flex items-end space-x-2">
              <div>
                <div>
                  <div class="flex items-center space-x-2">
                    <NButton type="success">
                      以图生图（可选）
                    </NButton>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="flex items-center space-x-2">
                    <NButton type="success">
                      以图生文（可选）
                    </NButton>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div><span>生成提示词</span></div>
              <div>
                <NButton secondary strong type="success" round>
                  <template #icon>
                    <NIcon>
                      <svg
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78c-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47c-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5l-1.04-3.1l3.1 3.1l.92-.92l-3.3-3.25l.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z"
                          fill="currentColor"
                        />
                      </svg>
                    </NIcon>
                  </template>
                  翻译
                </NButton>
              </div>
            </div>
            <div>
              <NInput
                v-model:value="inputValue"
                type="textarea"
                placeholder="例如：a cute cat（中文描述词处理可能不准确，建议使用英文进行描述）"
              />
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div><span>忽略元素(可选)</span></div>
              <div>
                <NButton secondary strong type="success" round>
                  <template #icon>
                    <NIcon>
                      <svg
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78c-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47c-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5l-1.04-3.1l3.1 3.1l.92-.92l-3.3-3.25l.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z"
                          fill="currentColor"
                        />
                      </svg>
                    </NIcon>
                  </template>
                  翻译
                </NButton>
              </div>
            </div>
            <div>
              <NInput
                v-model:value="value"
                type="textarea"
                placeholder="例如：生成一幅街景，但不要有汽车，你可以填写 car"
              />
            </div>
            <div>
              <NScrollbar x-scrollable style="width: fit-content">
                <div class="flex items-center space-x-2 py-4">
                  <NButton
                    v-for="item in items"
                    :key="item.id"
                    @click="insertText(item.translation)"
                  >
                    {{ item.label }}
                  </NButton>
                </div>
              </NScrollbar>
            </div>
          </main>
          <footer class="mt-4">
            <div class="flex items-center space-x-2">
              <NButton type="success" size="large" secondary strong>
                <template #icon>
                  <NIcon>
                    <svg
                      aria-hidden="true"
                      width="1em"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </NIcon>
                </template>
                创建任务
              </NButton>
            </div>
          </footer>
        </div>
        <div>
          <h2 class="text-xl font-bold">
            当前任务
          </h2>
          <div>
            <div class="mb-4 flex justify-end">
              <NButton type="success" size="medium" secondary strong round>
                <template #icon>
                  <NIcon>
                    <svg
                      aria-hidden="true"
                      width="1em"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                      </g>
                    </svg>
                  </NIcon>
                </template>
                刷新
              </NButton>
            </div>
            <div class="flex">
              <div class="m-auto">
                <NEmpty description="暂无任务" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <h2 class="text-xl font-bold">
              任务列表
            </h2>
            <span class="text-base text-neutral-400">
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
                <span>未启动：任务等待执行 执行中：任务正在执行中
                  成功：任务执行成功 失败：任务执行失败</span>
              </NPopover>
            </span>
          </div>
          <div class="my-2">
            <div class="mb-4 flex justify-between">
              <span> 总计:{{ index }} </span>
              <div class="flex items-center space-x-4">
                <NButton type="success" size="medium" secondary strong round>
                  <template #icon>
                    <NIcon>
                      <svg
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4" />
                          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                        </g>
                      </svg>
                    </NIcon>
                  </template>
                  刷新
                </NButton>
                <NButton type="success" size="medium" secondary strong round>
                  <template #icon>
                    <NIcon>
                      <svg
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4z"
                          fill="currentColor"
                        />
                        <path
                          d="M26 14l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                          fill="currentColor"
                        />
                      </svg>
                    </NIcon>
                  </template>
                </NButton>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <main>
              <NGrid :x-gap="12" :cols="colCount">
                <NGridItem>
                  <div
                    class="relative overflow-hidden rounded-md border p-4 transition-all hover:shadow dark:border-neutral-700"
                  >
                    <div class="flex items-center justify-between">
                      <NTag size="tiny" :bordered="false" type="success">
                        成功
                      </NTag>
                      <div class="flex items-center space-x-2">
                        <NButton
                          v-for="(button, index) in buttons"
                          :key="index"
                          type="success"
                          size="tiny"
                          secondary
                          strong
                          @click="button.action"
                        >
                          {{ button.label }}
                        </NButton>
                      </div>
                    </div>
                    <div class="my-4 h-[280px]">
                      <div
                        class="flex h-full w-full items-center justify-center overflow-hidden rounded-md"
                      >
                        <NImage
                          object-fit="contain"
                          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                        />
                      </div>
                    </div>
                    <div
                      class="-mx-4 -mb-4 flex items-start bg-[#fafafc] px-4 py-2 dark:bg-[#262629]"
                    >
                      <div class="flex-1">
                        <div class="mb-2 flex items-center justify-between">
                          <span>放大：</span>
                          <span class="text-base text-neutral-400">
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
                              <span>参数释义：放大某张图片 如 U1
                                放大第一张图片，以此类推</span>
                            </NPopover>
                          </span>
                          <div class="flex-1">
                            <div class="flex items-center justify-around">
                              <NButton type="tertiary" size="tiny">
                                U1
                              </NButton>
                              <NButton type="tertiary" size="tiny">
                                U2
                              </NButton>
                              <NButton type="tertiary" size="tiny">
                                U3
                              </NButton>
                              <NButton type="tertiary" size="tiny">
                                U4
                              </NButton>
                            </div>
                          </div>
                        </div>
                        <div class="mb-2 flex items-center justify-between">
                          <span>变换：</span>
                          <span class="text-base text-neutral-400">
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
                              <span>参数释义：以某张图片为基准重新生成
                                如 V1 则变换第一张图片，以此类推</span>
                            </NPopover>
                          </span>
                          <div class="flex-1">
                            <div class="flex items-center justify-around">
                              <NButton type="tertiary" size="tiny">
                                v1
                              </NButton>
                              <NButton type="tertiary" size="tiny">
                                v2
                              </NButton>
                              <NButton type="tertiary" size="tiny">
                                v3
                              </NButton>
                              <NButton type="tertiary" size="tiny">
                                v4
                              </NButton>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between text-slate-500">
                          时间：2023-07-24 14:49:40
                        </div>
                      </div>
                    </div>
                  </div>
                </NGridItem>>
              </NGrid>
            </main>
            <footer class="sticky bottom-0 left-0 right-0 mt-4 bg-white py-4 dark:bg-[#111114]">
              <NPagination
                v-model:page="page"
                v-model:page-size="pageSize"
                :page-count="1"
                show-size-picker
                :page-sizes="[10, 20, 30, 40]"
              />
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@media screen and (min-width: 768px) {
  .main-content {
    margin-left: 260px;
  }
}
</style>
