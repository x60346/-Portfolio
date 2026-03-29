<template>
  <!-- project -->
  <q-card
    flat
    class="relative"
    @mouseenter="() => (projectClone.focus = true)"
    @mouseleave="() => (projectClone.focus = false)"
  >
    <q-card-section horizontal class="">
      <!-- 圖片 -->
      <q-img class="h-60 min-w-32 max-w-56 overflow-hidden" :src="project.cover" loading="lazy">
      </q-img>
      <!-- 標題 & 說明文字 -->
      <q-card-section class="card-title screen-project-gap text-2xl flex flex-col">
        <div>
          {{ project.title }}
        </div>
        <!-- 小視窗 - 技能 -->
        <div class="phone-project-btn my-2 flex gap-2">
          <q-btn
            v-for="s in project.skill"
            :key="s"
            outline
            rounded
            size="sm"
            color="primary"
            :label="s"
          />
        </div>

        <div class="card-text text-base font-normal line-clamp-3">
          {{ project.content }}
        </div>
      </q-card-section>
    </q-card-section>
    <!-- 小視窗 - 按鈕 -->
    <q-card-section class="phone-project-btn p-0 card-text flex">
      <q-btn
        class="w-1/2 rounded-none"
        unelevated
        color="primary"
        icon-right="open_in_new"
        label="Demo"
      />
      <q-btn class="w-1/2 rounded-none" outline color="primary" label="View More" />
    </q-card-section>
    <q-separator />
    <!-- 技能列 -->
    <q-card-section class="screen-project-skill card-text flex gap-2">
      <q-btn v-for="s in project.skill" :key="s" outline rounded color="primary" :label="s" />
    </q-card-section>

    <!-- 滑鼠移進遮罩層 -->
    <Transition>
      <q-img
        v-show="projectClone.focus"
        class="screen-focus absolute w-full h-full top-0 left-0"
        :src="project.cover"
      >
        <div class="absolute-full flex flex-col flex-center backdrop-blur-md gap-4">
          <q-btn
            class="w-2/3"
            unelevated
            rounded
            color="primary"
            icon-right="open_in_new"
            label="Demo"
          />
          <q-btn
            class="w-2/3"
            outline
            rounded
            color="primary"
            icon-right="chevron_right"
            label="View More"
            @click="router.push({ path: `/project/${project.title}` })"
          />
        </div>
      </q-img>
    </Transition>
  </q-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  project: Object,
});
const projectClone = ref(JSON.parse(JSON.stringify(props.project)));
</script>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: ease-in-out 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .phone-project-btn {
    display: none;
  }
  .screen-project-skill {
    display: flex;
  }
  .screen-project-gap {
    gap: 1rem;
  }
}
@media screen and (max-width: 767.99px) {
  .phone-project-btn {
    display: flex;
  }
  .screen-project-skill {
    display: none;
  }
  .screen-focus {
    display: none;
  }
}
</style>
