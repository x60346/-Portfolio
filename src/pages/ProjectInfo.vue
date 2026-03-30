<template>
  <q-page class="Bg-brown-1 flex flex-col flex-nowrap justify-start items-center gap-4">
    <div
      class="mx-auto max-w-[1024px] w-full border-t-0 rounded-none flex flex-col gap-4 box-border"
    >
      <!-- timeline -->
      <div>
        <q-card class="bg-transparent" flat>
          <q-card-section class="pb-0">
            <q-btn
              unelevated
              rounded
              color="primary"
              icon="chevron_left"
              label="Back"
              @click="router.back()"
            />
          </q-card-section>
          <q-card-section class="pb-2">
            <div class="card-title text-4xl">{{ project.title }}</div>
          </q-card-section>

          <q-card-section class="card-text pt-0 text-base">
            {{ project.content }}
          </q-card-section>
        </q-card>
        <div class="mx-2 flex flex-col gap-2">
          <!-- what i did -->
          <q-card class="pb-4 w-full border-t-0 rounded-none" flat>
            <div class="screen-myself mx-auto max-w-[1024px] grid">
              <div>
                <q-card-section class="pb-2">
                  <div class="card-title text-3xl">{{ t('page.projectInfo.whatIDid') }}</div>
                </q-card-section>

                <q-card-section
                  v-for="w in project.whatIDid"
                  :key="w"
                  class="card-text py-0 text-lg"
                >
                  <p><span> - </span>{{ w }}</p>
                </q-card-section>
              </div>
            </div>
          </q-card>
          <!-- Technologles Used -->
          <q-card class="pb-4 w-full border-t-0 rounded-none" flat>
            <div class="screen-myself mx-auto max-w-[1024px] grid">
              <div>
                <q-card-section class="pb-2">
                  <div class="card-title text-3xl">
                    {{ t('page.projectInfo.technologlesUsed') }}
                  </div>
                </q-card-section>

                <q-card-section class="py-2 card-text flex gap-2">
                  <q-btn
                    v-for="s in project.skill"
                    :key="s"
                    outline
                    rounded
                    color="primary"
                    :label="s"
                  />
                </q-card-section>
              </div>
            </div>
          </q-card>
          <!-- Preview -->
          <q-card class="bg-transparent" flat>
            <q-card-section class="pb-2">
              <div class="card-title text-4xl flex gap-2">
                Preview
                <q-btn
                  v-show="project.github"
                  class="ml-auto"
                  outline
                  rounded
                  color="secondary"
                  icon-right="open_in_new"
                  label="Github"
                  @click="toGithub"
                />
                <q-btn
                  v-show="project.demo"
                  unelevated
                  rounded
                  color="primary"
                  icon-right="open_in_new"
                  label="Demo"
                  @click="toDemo"
                />
              </div>
            </q-card-section>
          </q-card>
          <div class="screen-preview grid gap-2">
            <q-card v-for="p in project.preview" :key="p.discribe" flat>
              <q-card-section class="">
                <q-img class="h-56" :src="p.src" loading="lazy"> </q-img>
                <q-card-section class="card-text pb-0 px-0 text-base font-normal">
                  {{ p.discribe }}
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
// store
import { useProjectStore } from 'src/stores/project';
const projectStore = useProjectStore();
// i18n
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const project = ref({
  id: '',
  title: '',
  cover: '',
  content: '',
  whatIDid: [''],
  skill: [''],
  preview: [
    {
      src: '',
      discribe: '',
    },
  ],
  github: '',
  demo: '',
  focus: false,
});
watch(
  () => locale.value,
  () => {
    projectStore.getProjectList();
    project.value = projectStore.getProject(route.params.id)[0];
  },
);

const toGithub = () => {
  window.open(project.value.github, `${project.value.title}-github`);
};
const toDemo = () => {
  window.open(project.value.demo, `${project.value.demo}-github`);
};

onMounted(() => {
  if (projectStore.getProject(route.params.id).length) {
    project.value = projectStore.getProject(route.params.id)[0];
  }
});
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .screen-preview {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media screen and (max-width: 767.99px) {
  .screen-preview {
  }
}
</style>
