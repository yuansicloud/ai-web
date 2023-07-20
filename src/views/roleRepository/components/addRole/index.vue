<script setup lang="ts">
import { NCard, NModal } from 'naive-ui'
import { computed } from 'vue'
interface Props {
  visible: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()
interface Emit {
  (e: 'update:visible', visible: boolean): void
}
const showModal = computed({
  get: () => props.visible,
  set: (visible: boolean) => emit('update:visible', visible),
})
</script>

<template>
  <NModal v-model:show="showModal" preset="dialog" title="添加角色">
    <NCard
      style="width: 600px z-index: 2026;"
      :bordered="false"
      size="huge"
      aria-modal="true"
    >
      <template #header-extra>
        添加角色
      </template>
      内容
      <template #footer>
        尾部
      </template>
    </NCard>
  </NModal>
</template>
