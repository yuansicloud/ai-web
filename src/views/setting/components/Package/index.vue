<script setup lang="ts">
import { NButton, NCard, NTag } from 'naive-ui'
</script>

<template>
  <div
    class="grid grid-cols-1 gap-x-4 gap-y-4 "
  >
    <div>
      <NCard>
        <div class="py-4 space-y-4">
          <h2 class="text-xl font-bold">
            20万额度
          </h2>
          <div class="text-base text-slate-500">
            价格：<NTag type="info">
              10 元
            </NTag>
          </div>
        </div>
        <div>体验套餐（仅演示）</div>
        <div>
          <NButton strong secondary type="primary">
            立即购买
          </NButton>
        </div>
      </NCard>
    </div>
    <div>
      <NCard>
        <div class="py-4 space-y-4">
          <h2 class="text-xl font-bold">
            画画赞赏礼包
          </h2>
          <div class="text-base text-slate-500">
            价格：<NTag type="info">
              9.9 元
            </NTag>
          </div>
          <div>
            本站免费体验，如果你想赞助一下下也是可以的。
            本礼包包含【20W对话额度】【120画画额度】
          </div>
          <div>
            <NButton strong secondary type="primary">
              立即购买
            </NButton>
          </div>
        </div>
      </NCard>
    </div>
  </div>
</template>
