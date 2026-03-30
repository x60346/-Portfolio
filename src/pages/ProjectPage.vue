<template>
  <q-page class="Bg-brown-1 flex flex-col flex-nowrap justify-start items-center gap-4">
    <q-card class="pb-4 w-full border-t-0 rounded-none" flat>
      <div
        class="mx-auto max-w-[1024px] w-full border-t-0 rounded-none flex flex-col gap-4 box-border"
      >
        <div>
          <CardTitle
            :title="t('components.cardTitle.cardTitle04.title')"
            :content="t('components.cardTitle.cardTitle04.content')"
          />

          <q-card flat>
            <q-card-section class="card-text flex gap-2">
              <q-btn
                unelevated
                rounded
                color="orange"
                label="Clear"
                @click="
                  () => {
                    skillList.forEach((item) => (item.select = false));
                  }
                "
              />
              <q-btn
                v-for="s in skillList"
                :key="s.label"
                :outline="!chooseList.includes(s.label)"
                :unelevated="chooseList.includes(s.label)"
                rounded
                color="primary"
                :label="s.label"
                @click="
                  () => {
                    s.select = !s.select;
                  }
                "
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
    <div
      class="mx-auto max-w-[1024px] w-full border-t-0 rounded-none flex flex-col gap-4 box-border"
    >
      <!-- project -->
      <div class="w-full">
        <q-card class="bg-transparent" flat>
          <q-card-section class="card-text text-base">
            {{ chooseProjectList.length }} {{ t('page.projectPage.count') }}
          </q-card-section>
        </q-card>
        <div class="screen-project mx-2 pb-2 grid gap-2">
          <projectCard v-for="p in chooseProjectList" :key="p.title" :project="p"></projectCard>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// store
import { useProjectStore } from 'src/stores/project';
const projectStore = useProjectStore();
// componenet
import projectCard from 'src/components/ProjectCard.vue';
import CardTitle from 'src/components/CardTitle.vue';
// i18n
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

// 專案內含skill
const skillList = ref([]);
//所有專案
const projectList = computed(() => projectStore.projectList);
// 所有技能
const allSkill = computed(() => {
  return projectList.value.map((item) => {
    return item.skill;
  });
});
watch(allSkill, (val) => {
  skillList.value = [...new Set(val.flat())].map((item) => {
    return {
      label: item,
      select: false,
    };
  });
});
const chooseList = computed(() => {
  // 選擇 - skill
  return skillList.value.filter((item) => item?.select === true).map((item) => item.label);
});
const chooseProjectList = computed(() => {
  // 選擇 - 專案
  if (!chooseList.value.length) {
    return projectList.value;
  } else {
    return projectList.value.filter((item) => {
      let isSelect = false;
      [...item.skill].forEach((sitem) => {
        if (chooseList.value.includes(sitem)) {
          isSelect = true;
        }
      });
      return isSelect;
    });
  }
});
watch(
  () => locale.value,
  () => {
    projectStore.getProjectList();
  },
);
onMounted(() => {
  skillList.value = [...new Set(allSkill.value.flat())].map((item) => {
    return {
      label: item,
      select: false,
    };
  });
});
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .screen-project {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 767.99px) {
  .screen-project {
  }
}
</style>
