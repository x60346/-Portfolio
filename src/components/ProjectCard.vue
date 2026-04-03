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
      <q-img
        class="h-60 w-32 flex-shrink-0"
        :src="project.cover"
        :srcset="project.coverw"
        :alt="project.title"
        loading="eager"
        :fetchpriority="'high'"
      />
      <!-- 標題 & 說明文字 -->
      <q-card-section class="card-title screen-project-gap text-2xl flex flex-col">
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
    <q-card-section class="phone-project-btn p-0 card-text flex">
      <div class="btn-skill-2-sm w-1/2" aria-label="demo">
        Demo
        <q-icon size="sm" name="open_in_new" />
      </div>
      <div
        class="btn-skill-3-sm w-1/2"
        aria-label="view more"
        @click="router.push({ path: `/project/${project.id}` })"
      >
        View More
        <q-icon size="sm" name="chevron_right" />
      </div>
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
          <div class="btn-skill-2 w-2/3" aria-label="demo">
            Demo
            <q-icon size="sm" name="open_in_new" />
          </div>
          <div
            class="btn-skill-3 w-2/3"
            aria-label="view more"
            @click="router.push({ path: `/project/${project.id}` })"
          >
            View More
            <q-icon size="sm" name="chevron_right" />
          </div>
        </div>
      </q-img>
    </Transition>
  </q-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
const router = useRouter();
const $q = useQuasar();

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
