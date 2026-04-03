import { defineStore } from 'pinia';
import { computed } from 'vue';
import cover01 from 'assets/project01_cover.png';
import cover02 from 'assets/project02_cover.png';
import cover03 from 'assets/project03_cover.png';
import preview01 from 'assets/project01_preview01.png';
import preview02 from 'assets/project01_preview02.png';
import preview03 from 'assets/project01_preview03.png';
import preview04 from 'assets/project02_preview01.png';
import preview05 from 'assets/project02_preview02.png';
import preview06 from 'assets/project02_preview03.png';
import preview07 from 'assets/project02_preview04.png';
import cover01w from 'assets/project01_cover.webp';
import cover02w from 'assets/project02_cover.webp';
import cover03w from 'assets/project03_cover.webp';
import preview01w from 'assets/project01_preview01.webp';
import preview02w from 'assets/project01_preview02.webp';
import preview03w from 'assets/project01_preview03.webp';
import preview04w from 'assets/project02_preview01.webp';
import preview05w from 'assets/project02_preview02.webp';
import preview06w from 'assets/project02_preview03.webp';
import preview07w from 'assets/project02_preview04.webp';
import { i18n } from 'src/boot/i18n';
const t = i18n.global.t;

const projectList = computed(() => [
  {
    id: '01',
    title: t('store.project.project01.title'),
    cover: cover01,
    coverw: cover01w,
    content: t('store.project.project01.content'),
    whatIDid: [
      t('store.project.project01.whatIDid.first'),
      t('store.project.project01.whatIDid.second'),
      t('store.project.project01.whatIDid.third'),
    ],
    skill: [
      t('store.project.project01.skill.first'),
      t('store.project.project01.skill.second'),
      t('store.project.project01.skill.third'),
      t('store.project.project01.skill.fourth'),
    ],
    preview: [
      {
        src: preview01,
        srcw: preview01w,
        discribe: t('store.project.project01.preview.first'),
      },
      {
        src: preview02,
        srcw: preview02w,
        discribe: t('store.project.project01.preview.second'),
      },
      {
        src: preview03,
        srcw: preview03w,
        discribe: t('store.project.project01.preview.third'),
      },
    ],
    github: 'https://github.com/x60346/nuxt-activity',
    demo: 'https://x60346.github.io/nuxt-activity/',
    focus: false,
  },
  {
    id: '02',
    title: t('store.project.project02.title'),
    cover: cover02,
    coverw: cover02w,
    content: t('store.project.project02.content'),
    whatIDid: [
      t('store.project.project02.whatIDid.first'),
      t('store.project.project02.whatIDid.second'),
      t('store.project.project02.whatIDid.third'),
    ],
    skill: [
      t('store.project.project02.skill.first'),
      t('store.project.project02.skill.second'),
      t('store.project.project02.skill.third'),
      t('store.project.project02.skill.fourth'),
    ],
    preview: [
      {
        src: preview04,
        srcw: preview04w,
        discribe: t('store.project.project02.preview.first'),
      },
      {
        src: preview05,
        srcw: preview05w,
        discribe: t('store.project.project02.preview.second'),
      },
      {
        src: preview07,
        srcw: preview07w,
        discribe: t('store.project.project02.preview.third'),
      },
      {
        src: preview06,
        srcw: preview06w,
        discribe: t('store.project.project02.preview.fourth'),
      },
    ],
    github: 'https://github.com/x60346/cakeList',
    demo: 'https://x60346.github.io/cakeList/#/',
    focus: false,
  },
  {
    id: '03',
    title: t('store.project.project03.title'),
    cover: cover03,
    coverw: cover03w,
    content: t('store.project.project03.content'),
    whatIDid: [
      t('store.project.project03.whatIDid.first'),
      t('store.project.project03.whatIDid.second'),
    ],
    skill: [t('store.project.project03.skill.first'), t('store.project.project03.skill.second')],
    preview: [],
    github: 'https://github.com/x60346/chrome-extension-ex1_webscreenshot',
    demo: '',
    focus: false,
  },
]);

export const useProjectStore = defineStore('project', {
  state: () => ({
    projectList: JSON.parse(JSON.stringify(projectList.value)),
  }),
  actions: {
    getProjectList() {
      this.projectList = JSON.parse(JSON.stringify(projectList.value));
    },
    setProjectList(data) {
      this.projectList.push(data);
    },
    getProject(id) {
      return this.projectList.filter((item) => {
        return item.id === id;
      });
    },
    delProjectList(title) {
      this.projectList = this.projectList.filter((item) => {
        return item.title !== title;
      });
    },
    resetProjectList() {
      this.projectList = JSON.parse(JSON.stringify(projectList));
    },
  },
});
