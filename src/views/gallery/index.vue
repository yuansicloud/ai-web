<script setup lang='ts'>
import { NButton, NGrid, NGridItem, NIcon, NImage, NInput, NTag } from 'naive-ui'
import { computed, ref } from 'vue'
const checked = ref(0)
const tags = [
  { label: '全部', id: 0 },
  { label: '印象派', id: 1 },
  { label: '美女', id: 2 },
  { label: '山水画', id: 3 },
]
const buttons = [
  { label: '画同款', id: 1 },
  { label: '复制', id: 2 },
  { label: '下载', id: 3 },
]
const handleClick = (buttonId: any) => {
  switch (buttonId) {
    case 1:
      // 执行 '画同款' 相关的操作
      console.log('画同款按钮被点击')
      break
    case 2:
      // 执行 '复制' 相关的操作
      console.log('复制按钮被点击')
      break
    case 3:
      // 执行 '下载' 相关的操作
      console.log('下载按钮被点击')
      break
  }
}
const imageItems = [
  {
    imageUrl: 'https://cdn.midjourney.com/bbefe24b-ff45-439d-811a-7cae32cf4ba5/0_3_640_N.webp',
    title:
      'Cinematic Abstract Impressionism, Emotional Darkness, Snowy, Minimalism',
    buttons,
    tag: 0,
  },
  {
    imageUrl: 'https://cdn.midjourney.com/47a77e12-2e56-429d-ae86-b69c1cfba3f3/0_1_640_N.webp',
    title:
      'Cinematic Abstract Impressionism, Emotional Darkness, Snowy, Minimalism',
    buttons,
    tag: 2,
  },
  {
    imageUrl: 'https://cdn.midjourney.com/db1948a7-f765-45cd-9e89-466da085c28c/0_1_640_N.webp',
    title:
      'Cinematic Abstract Impressionism, Emotional Darkness, Snowy, Minimalism',
    buttons,
    tag: 1,
  },
  {
    imageUrl: 'https://cdn.midjourney.com/dec83547-b7a2-4bdb-907f-d482b07a9402/0_3_640_N.webp',
    title:
      'Cinematic Abstract Impressionism, Emotional Darkness, Snowy, Minimalism',
    buttons,
    tag: 2,
  },
  {
    imageUrl: 'https://cdn.midjourney.com/8605e325-5f08-4296-bacd-97806824aa81/0_0_384_N.webp',
    title:
      'Cinematic Abstract Impressionism, Emotional Darkness, Snowy, Minimalism',
    buttons,
    tag: 2,
  },
  {
    imageUrl: 'https://cdn.midjourney.com/b83841e9-dc39-4220-8b42-b5c0c0b2aadb/0_0_384_N.webp',
    title:
      'Cinematic Abstract Impressionism, Emotional Darkness, Snowy, Minimalism',
    buttons,
    tag: 3,
  },
]
const filteredItems = computed(() => {
  // 如果没有选择任何标签或选择了标签 '全部'，则返回全部图片项目
  if (checked.value === null || checked.value === 0)
    return imageItems

  // 否则，根据选择的标签筛选图片项目
  return imageItems.filter(item => item.tag === checked.value)
})
</script>

<template>
  <div class="p-6 m-auto max-w-screen-2xl">
    <header class="mb-4">
      <h2 class="mb-4 text-2xl font-bold text-black dark:text-white">
        画廊
      </h2>
      <div class="flex items-center">
        <NInput round placeholder="搜索 prompt 提示或关键词">
          <template #suffix>
            <NIcon size="20">
              <svg
                aria-hidden="true"
                width="2em"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7l-3.83-3.83c-.8.52-1.74.83-2.76.83c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59L20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3zM2 19h10v-2H2v2z"
                  fill="currentColor"
                />
              </svg>
            </NIcon>
          </template>
        </NInput>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div>
          <div class="flex gap-4">
            <NTag
              v-for="(tag, index) in tags"
              :key="index"
              size="small"
              :type="checked === index ? 'success' : 'default'"
              :bordered="false"
              round
              @click="checked = index"
            >
              {{ tag.label }}
            </NTag>
          </div>
        </div>
      </div>
    </header>
    <main>
      <NGrid :x-gap="12" :y-gap="12" :cols="6" style=" gap: 15px">
        <NGridItem
          v-for="(item, index) in filteredItems"
          :key="index"
        >
          <div class="images-wrapper relative overflow-hidden rounded-md">
            <div class="absolute bottom-0 left-0 right-0 top-0 z-10 cursor-pointer opacity-0 backdrop-blur-sm">
              <NImage
                :src="item.imageUrl"
              />
            </div>
            <img :src="item.imageUrl">
            <footer class="footer rounded-md bg-black/50 p-2">
              <h2 class="text-ellipsis-3 text-white">
                {{ item.title }}
              </h2>
              <div class="mt-2 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <NButton
                    v-for="(button, index) in item.buttons"
                    :key="index"
                    size="tiny"
                    type="primary"
                    ghost
                    @click="handleClick(button.id)"
                  >
                    {{ button.label }}
                  </NButton>
                </div>
              </div>
            </footer>
          </div>
        </NGridItem>
      </NGrid>
    </main>
  </div>
</template>

<style scoped>
.images-wrapper:hover .footer {
  opacity: 1;
}

.footer {
  position: absolute;
  bottom: 2px;
  left: 1px;
  right: 1px;
  z-index: 20;
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease; /* 添加过渡效果 */
}
.images-wrapper:hover img {
  transform: scale(1.1);
}

.images-wrapper img {
  transition: transform 0.3s ease; /* 添加过渡效果 */
}
</style>
