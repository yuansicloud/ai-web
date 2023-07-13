<script setup lang='ts'>
import { NButton, NList, NListItem, NThing } from 'naive-ui'
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
                <NButton>Prefix</NButton>
              </template>
              <template #suffix>
                <NButton>Suffix</NButton>
              </template>
              <NThing title="Thing" title-extra="extra" description="description">
                Biu<br>
                Biu<br>
                Biu<br>
              </NThing>
            </NListItem>
          </NList>
        </div>
      </div>
    </main>
  </div>
</template>
