<template>
  <!-- project -->
  <q-card
    flat
    class="relative"
    @mouseenter="() => (projectClone.focus = true)"
    @mouseleave="() => (projectClone.focus = false)"
  >
    <q-card-section horizontal class="h-60">
      <!-- 圖片 -->
      <q-img
        v-show="Screen.width >= 768"
        class="h-full w-32 flex-shrink-0"
        :src="project.cover"
        :srcset="project.coverw"
        :alt="project.title"
        loading="eager"
        :fetchpriority="'high'"
      />
      <!-- 標題 & 說明文字 -->
      <q-card-section class="card-title screen-project-gap text-2xl flex flex-col flex-nowrap">
        <div>
          {{ project.title }}
        </div>
        <!-- 小視窗 - 技能 -->
        <div class="phone-project-btn my-2 flex gap-2">
          <div
            class="btn-skill-1-sm"
            v-for="s in project.skill"
            :key="s"
            :aria-label="`skills-${s}`"
          >
            {{ s }}
          </div>
        </div>

        <div class="card-text text-base font-normal line-clamp-3">
          {{ project.content }}
        </div>
      </q-card-section>
    </q-card-section>
    <!-- 小視窗 - 按鈕 -->
    <q-card-section class="phone-project-btn p-0 card-text flex flex-nowrap">
      <MyBtn
        v-if="project?.demo"
        class="flex-1"
        title="Demo"
        icon="open_in_new"
        :iconright="true"
        btnclass="btn-skill-2-sm"
        ariaLabel="demo"
        @click="toDemo"
      ></MyBtn>
      <MyBtn
        class="flex-1"
        title="View More"
        icon="chevron_right"
        :iconright="true"
        btnclass="btn-skill-3-sm"
        ariaLabel="view more"
        @click="router.push({ path: `/project/${project.id}` })"
      ></MyBtn>
    </q-card-section>
    <q-separator />
    <!-- 技能列 -->
    <q-card-section class="screen-project-skill card-text flex gap-2">
      <div class="btn-skill-1" v-for="s in project.skill" :key="s">
        {{ s }}
      </div>
    </q-card-section>

    <!-- 滑鼠移進遮罩層 -->
    <Transition>
      <q-img
        v-show="projectClone.focus"
        class="screen-focus absolute w-full h-full top-0 left-0"
        :src="project.cover"
        :srcset="project.coverw"
        :alt="project.title"
      >
        <div class="absolute-full flex flex-col flex-center backdrop-blur-md gap-4">
          <MyBtn
            v-if="project?.demo"
            class="w-2/3"
            title="Demo"
            icon="open_in_new"
            :iconright="true"
            btnclass="btn-skill-2"
            ariaLabel="demo"
            @click="toDemo"
          ></MyBtn>
          <MyBtn
            class="w-2/3"
            title="View More"
            icon="chevron_right"
            :iconright="true"
            btnclass="btn-skill-3"
            ariaLabel="view more"
            @click="router.push({ path: `/project/${project.id}` })"
          ></MyBtn>
        </div>
      </q-img>
    </Transition>
  </q-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Screen, useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
const router = useRouter();
const $q = useQuasar();
// component
import MyBtn from './MyBtn.vue';

const props = defineProps({
  project: Object,
});
const projectClone = ref(JSON.parse(JSON.stringify(props.project)));
const toDemo = () => {
  window.open(props.project?.demo, `demo-${props.project.title}`);
};
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
  .screen-card {
    height: 15rem;
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
  .screen-card {
    height: 10rem;
  }
}
</style>
