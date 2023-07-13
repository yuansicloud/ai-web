<script setup lang="ts">
import { NButton, NCard, NDataTable, NTag } from 'naive-ui'

import { ref } from 'vue'
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
const data = ref()
const columns = createColumns()
</script>

<template>
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
</template>>

function createColumns() {
  throw new Error('Function not implemented.')
}
