<!-- eslint-disable vue/custom-event-name-casing -->
<script setup lang="ts">
import { NButton, NCard, NImage, NImageGroup, NModal } from 'naive-ui'
import { computed, ref } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits(['update:visible', 'selected-image', 'save-selected-image'])
const selectedImageIndex = ref(null)

const selectImage = (index: any) => {
  selectedImageIndex.value = index
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  emit('selected-image', imageSources[index]) // 发送一个事件，并将选中的图片作为参数
}
const saveSelectedImage = () => {
  if (selectedImageIndex.value !== null)
    // eslint-disable-next-line vue/custom-event-name-casing, @typescript-eslint/no-use-before-define
    emit('save-selected-image', imageSources[selectedImageIndex.value]) // 发送一个事件，并将选中的图片作为参数

  return showModal.value = false
}
const imageSources = [
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/867b21a84911b49880a3ae8f00d785e2Default_white_backgroundvery_details_cute_cat_wearing_white_bl_2_7052af54-54ae-4965-8d2c-41f698189865_1.jpg',
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/f72dd7538711ce6afaed4866d93c5129Default_artwork_tshirt_design_cute_astronaut_nasa_flag_typogra_0_021beb31-14ed-435d-8c5f-1f723dd757d7_1.jpg',
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/a87039262387167bcf4cde6933df73bbDefault_STICKER_A_detailed_illustration_a_print_of_vivid_cute_0_8fce9649-dc50-4eae-91e7-d6f1a3ca94ac_1.jpg',
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/e8d285e662a3d631147829c9e92139cfDefault_tshirt_design_golden_retriever_wearing_sunglasses_retr_0_8957de44-8977-4866-8cd1-0fcbc67c791f_1.jpg',
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/da0d916a42449e85d62463028f4b6e23Default_vector_tshirt_art_ready_to_print_colorful_graffiti_ill_2_f4d1c248-9367-46dd-9673-de3b6d927896_1.jpg',
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/4688966a5e6128f612022f9dbaa26fd1Default_A_scary_cat_Halloween_character_fantasy_vector_art_fla_2_31776f2c-3194-416f-9dab-0fa6e225077b_1.jpg',
  'http://ysfurneral-1300332419.cos.ap-chengdu.myqcloud.com/host/CatalogContentImage/20230720/28ba9293511ccf303d8b6ec3a3f301cdDefault_isometric_view_of_a_MINI_cute_hyperrealistic_futuristi_0_7ab077f5-9839-467c-ad4c-2112606d3dd6_1.jpg',

]
interface Props {
  visible: boolean
}
const showModal = computed({
  get: () => props.visible,
  set: (visible: boolean) => emit('update:visible', visible),
})
</script>

<template>
  <NModal v-model:show="showModal" preset="dialog" title="添加角色">
    <NCard style="width: 600px z-index: 2026;" :bordered="false" size="huge">
      <template #header-extra>
        预设头像
      </template>
      <div class="avatar-list">
        <div class="avatar-item flex">
          <div class="image-group">
            <NImageGroup v-for="(imageSrc, index) in imageSources" :key="index">
              <NImage
                class="round-image"
                :class="{ 'selected-image': selectedImageIndex === index }"
                width="80"
                :src="imageSrc"
                preview-disabled
                @click="selectImage(index)"
              />
            </NImageGroup>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="mt-4 flex items-center justify-end space-x-4">
          <NButton strong secondary @click="showModal = false">
            取消
          </NButton>
          <NButton strong secondary type="success" @click="saveSelectedImage">
            保存
          </NButton>
        </div>
      </template>
    </NCard>
  </NModal>
</template>

<style scoped>
.round-image {
  border-radius: 50%; /* 设置图片为圆形 */
  margin: 5px; /* 设置图片间的间隔为5像素 */
  border: 5px solid transparent; /* 默认有一个透明的边框 */
  object-fit: cover; /* 图片始终填满元素区域，超出部分会被裁剪 */
  width: 80px; /* 设置图片宽度 */
  height: 80px; /* 设置图片高度 */
}
.selected-image {
  border-color: rgb(44, 216, 67); /* 选中时改变边框颜色 */
}
</style>
