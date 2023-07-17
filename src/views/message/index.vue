<script setup lang='ts'>
import { NBadge, NList, NListItem, NPagination, NSpace } from 'naive-ui'
import { ref } from 'vue'

const page = ref(2)
const pageSize = ref(10)
</script>

<template>
  <div class="p-8">
    <header class="mb-4">
      <h2 class="mb-2 text-2xl font-bold text-black dark:text-white">
        消息中心
      </h2>
    </header>
    <main>
      <div class="py-6">
        <div class="max-w-screen-lg space-y-4">
          <NList>
            <NListItem>
              <template #prefix>
                <div class="flex">
                  <div class="flex">
                    <NSpace style="margin-left: 10px">
                      <NBadge dot>
                        <svg
                          aria-hidden="true"
                          width="20px"
                          height="20px"
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
                      </NBadge>
                    </NSpace>
                    <div style="margin-left: 10px  margin-left: 10%;">
                      <span class="block w-24 text-sm text-neutral-400" style="width: 200px;">一些期卡兑换卡密</span>
                    </div>
                  </div>

                  <div>
                    <span class="block w-24 text-sm text-neutral-400">06-28 16:32</span>
                  </div>
                </div>
              </template>
            </NListItem>
          </NList>
          <div class="mt-4 bg-white py-4 dark:bg-[#111114]">
            <NPagination
              v-model:page="page"
              v-model:page-size="pageSize"
              :page-count="2"
              show-size-picker
              :page-sizes="[10, 20, 30, 40]"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
