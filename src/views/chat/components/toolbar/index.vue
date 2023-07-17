<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
</script>

<template>
  <div class="mt-2 space-y-2 border-t p-4 dark:border-t-neutral-800">
    <div class="flex space-x-2">
      <div class="flex-1">
        <NButton>
          <template #icon>
            <NIcon />
          </template>
          公告栏
        </NButton>
      </div>
      <div class="flex space-x-2">
        <NButton>
          <template #icon>
            <NIcon />
          </template>
          角色仓库
        </NButton>
      </div>
    </div>
    <NButton style="width: 100%;">
      清空对话
    </NButton>
  </div>
</template>
