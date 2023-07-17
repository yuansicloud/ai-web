<script setup lang="ts">
import {
  NAlert,
  NTabPane,
  NTabs,
} from 'naive-ui'
import { Account, Overview, Package } from '@/views/setting/components/index'
</script>

<template>
  <div class="min-h-full p-8">
    <header>
      <h2 class="mb-2 text-2xl font-bold text-black dark:text-white">
        个人中心
      </h2>
    </header>
    <main>
      <NAlert type="warning">
        此为预览站，仅技术预览和学习使用，违反国内法律使用会被监管并在不主动通知下清除内容或帐号，请用邮箱注册登录，手机号和微信仅仅演示
      </NAlert>
      <div>
        <NTabs type="line" animated>
          <NTabPane name="总览" tab="总览">
            <Overview />
          </NTabPane>
          <NTabPane name="账户" tab="账户">
            <Account />
          </NTabPane>
          <NTabPane name="套餐" tab="套餐">
            <Package />
          </NTabPane>
        </NTabs>
      </div>
    </main>
  </div>
</template>>
