<template>
  <q-page class="Bg-brown-1 flex flex-col flex-nowrap justify-start items-center gap-4">
    <!-- myself -->
    <q-card class="pb-4 w-full border-t-0 rounded-none" flat>
      <div class="screen-myself mx-auto max-w-[1024px] grid">
        <div>
          <q-card-section class="pb-2">
            <div class="card-title text-3xl">張宗芸 / Anita Chang</div>
          </q-card-section>

          <q-card-section class="card-subtitle screen-index-career text-base py-0">
            Frontend Engineer / Healthcare HIS
          </q-card-section>

          <!-- <q-separator inset /> -->

          <q-card-section class="card-text pb-2 text-base">
            <div class="flex gap-2 items-start flex-nowrap">
              <q-icon class="mt-1" color="orange-8" size="xs" name="fa-solid fa-check" />
              <p>1 年以上 前端工程師 與 5 年 RWD 切版經驗，擅長團隊協作</p>
            </div>
            <div class="flex gap-2 items-start flex-nowrap">
              <q-icon class="mt-1" size="xs" name="fa-solid fa-check" />
              <p>
                使用 <span class="text-orange-600">Vue3</span>／ Element Plus 、 Quasar 、 Tailwind
                CSS
              </p>
            </div>
            <div class="flex gap-2 items-start flex-nowrap">
              <q-icon class="mt-1" size="xs" name="fa-solid fa-check" />
              <p>
                具備
                <span class="text-orange-600">後台會員系統</span>
                、簡化複雜表單、
                <span class="text-orange-600">WebSocket</span>
                、 PWA 、 Lighthouse 經歷
              </p>
            </div>
          </q-card-section>
        </div>
      </div>
    </q-card>
    <div
      class="mx-auto max-w-[1024px] w-full border-t-0 rounded-none flex flex-col gap-4 box-border"
    >
      <!-- skill -->
      <div>
        <CardTitle :title="'Skill Tree'" :content="'我在實際專案中使用過的技能與工具'" />
        <div class="screen-skill mx-2 grid gap-2">
          <SkillCard v-for="s in skillType" :key="s" :type="s" :skill="skillList" />
        </div>
      </div>

      <!-- project -->
      <div class="w-full">
        <CardTitle :title="'Side Project'" :content="'均具備RWD響應式功能'" />
        <div class="mx-2 pb-2 flex flex-nowrap gap-2 overflow-x-scroll">
          <ProjectCard
            class="w-[550px] min-w-[550px]"
            v-for="p in projectList"
            :key="p.title"
            :project="p"
          ></ProjectCard>
          <!-- <q-card flat class="min-w-[700px]">
            <q-card-section class="pb-2">
              <div class="card-title text-2xl">Basic</div>
            </q-card-section>
            <q-card-section class="card-text pt-0 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat velit eget
              velit elementum, at eleifend odio viverra. Fusce eleifend ullamcorper turpis eu
              viverra. Donec quis sodales enim, at ultrices lacus. Morbi hendrerit, nunc a lobortis
              aliquam, ex lacus dapibus nisl, sit amet sodales dolor ante et neque. Nam ut massa mi.
            </q-card-section>
            <q-card-section class="pt-0 card-text flex gap-2">
              <q-btn v-for="s in skillList" :key="s" outline rounded color="primary" :label="s" />
              <q-btn
                class="ml-auto"
                unelevated
                rounded
                color="primary"
                label="View Details"
                icon-right="chevron_right"
              />
            </q-card-section>
          </q-card> -->
        </div>
      </div>

      <!-- timeline -->
      <div>
        <CardTitle :title="'Work Experience'" :content="'從手遊到醫療工程師'" />
        <div class="mx-2 flex flex-col gap-2">
          <TimelineCard v-for="t in timelineList" :key="t.company" :timeline="t" :point="false" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// store
import { useProjectStore } from 'src/stores/project';
import { useTimeLineStore } from 'src/stores/timeline';
import { useSkillStore } from 'src/stores/skill';
const projectStore = useProjectStore();
const timelineStore = useTimeLineStore();
const skillStore = useSkillStore();
// componenet
import ProjectCard from 'src/components/ProjectCard.vue';
import CardTitle from 'src/components/CardTitle.vue';
import TimelineCard from 'src/components/TimelineCard.vue';
import SkillCard from 'src/components/SkillCard.vue';

const projectList = ref([]);
const timelineList = ref([]);
const skillList = ref([]);

const skillType = computed(() => {
  return new Set(skillList.value.map((item) => item.type));
});

onMounted(() => {
  projectList.value = projectStore.projectList;
  timelineList.value = timelineStore.timeLineList;
  skillList.value = skillStore.skillList;
});
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
  .screen-skill {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .screen-myself {
  }
  .screen-project-btn {
    display: none;
  }
  .screen-project-skill {
    display: flex;
  }
}
@media screen and (max-width: 767.99px) {
  .screen-skill {
  }
  .screen-myself {
  }
  .screen-project-btn {
    display: flex;
  }
  .screen-project-skill {
    display: none;
  }
  .screen-index-name {
    margin-top: 0.5rem;
  }
}
</style>
