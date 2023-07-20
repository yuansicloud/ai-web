<script setup lang="ts">
import { NButton, NCard, NDataTable, NGrid, NGridItem, NTag } from 'naive-ui'
import { h, onMounted, ref } from 'vue'
import { format } from 'date-fns'
import {
  getPrepaymentDefaultAccount,
  getPrepaymentTransactionList,
} from '@/api/user'

const accountData = ref(null)
const transactionData = ref([]) // 添加一个新的 ref 来保存交易数据
const pageNo = ref(1) // 添加一个用于跟踪页码的 ref
const pageSize = ref(10) // 添加一个用于跟踪每页大小的 ref

onMounted(async () => {
  const response = await getPrepaymentDefaultAccount()
  accountData.value = response

  // 获取预付费账户交易流水
  await getPrepaymentTransactionList({
    skipCount: (pageNo.value - 1) * pageSize.value,
    maxResultCount: pageSize.value,
    accountId: accountData.value.id,
  }).then((item) => {
    transactionData.value = item.items
  })
})

const createColumns = () => {
  return [
    {
      title: '编号',
      key: 'externalTradingCode',
    },
    {
      title: '记录',
      key: 'changedBalance',
      render: ({ changedBalance }: { changedBalance: number }) => {
        const tagType = changedBalance >= 0 ? 'success' : 'error'
        return h(NTag, { type: tagType }, () => changedBalance)
      },
    },
    {
      title: '时间',
      key: 'creationTime',
      render: ({ creationTime }: { creationTime: Date }) => {
        return format(new Date(creationTime), 'yyyy-MM-dd HH:mm:ss')
      },
    },
    {
      title: '类型',
      key: 'transactionType',
    },
    {
      title: '备注',
      key: 'actions',
    },
  ]
}

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
        <NGrid
          :x-gap="12"
          :y-gap="8"
          :cols="5"
          role="none"
        >
          <NGridItem>
            会员状态： <NTag type="success">
              默认
            </NTag>
          </NGridItem>
          <NGridItem>
            对话总量: <NTag type="info">
              5000
            </NTag>
          </NGridItem>
          <NGridItem>
            对话剩余： <NTag type="warning">
              5000
            </NTag>
          </NGridItem>
          <NGridItem>
            绘画总量： <NTag type="info">
              14
            </NTag>
          </NGridItem>
          <NGridItem>
            绘画剩余： <NTag type="warning">
              14
            </NTag>
          </NGridItem>
        </NGrid>
      </NCard>
      <NCard title="钱包" size="small">
        <NDataTable
          :bordered="false"
          :single-line="false"
          :columns="columns"
          :data="transactionData"
        />
      </NCard>
    </div>
  </div>
</template>
