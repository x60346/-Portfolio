import { defineStore } from 'pinia';

const skillList = [
  {
    name: 'Vue2/Vue3',
    type: 'Basic',
  },
  {
    name: 'CSS/SCSS',
    type: 'Basic',
  },
  {
    name: 'JavaScript',
    type: 'Basic',
  },
  {
    name: 'Vue Router',
    type: 'Basic',
  },
  {
    name: 'Pinia',
    type: 'Basic',
  },
  {
    name: 'I18n',
    type: 'Basic',
  },
  {
    name: 'Git',
    type: 'Basic',
  },
  {
    name: 'RWD',
    type: 'Basic',
  },
  {
    name: 'Nuxt.js',
    type: 'Technique',
  },
  {
    name: 'REST API',
    type: 'Technique',
  },
  {
    name: 'Firebase',
    type: 'Technique',
  },
  {
    name: 'Vite',
    type: 'Technique',
  },
  {
    name: 'Lighthouse',
    type: 'Technique',
  },
  {
    name: 'WebSocket',
    type: 'Technique',
  },
  {
    name: 'Cordova',
    type: 'Technique',
  },
  {
    name: 'Chrome Extension',
    type: 'Technique',
  },
  {
    name: 'Tailwind CSS',
    type: 'UI Framework',
  },
  {
    name: 'Element Plus',
    type: 'UI Framework',
  },
  {
    name: 'Quasar',
    type: 'UI Framework',
  },
  {
    name: 'Vuetify',
    type: 'UI Framework',
  },
  {
    name: 'Bootstrap 5',
    type: 'UI Framework',
  },
  // {
  //   name: '系統企劃',
  //   type: 'Others',
  // },
  // {
  //   name: '跨部門溝通',
  //   type: 'Others',
  // },
  // {
  //   name: 'UI/UX',
  //   type: 'Others',
  // },
];

export const useSkillStore = defineStore('skill', {
  state: () => ({
    skillList: JSON.parse(JSON.stringify(skillList)),
  }),
  actions: {
    setSkillList(data) {
      this.skillList.push(data);
    },
    delSkillList(name) {
      this.skillList = this.skillList.filter((item) => {
        return item.name !== name;
      });
    },
    resetSkillList() {
      this.skillList = JSON.parse(JSON.stringify(skillList));
    },
  },
});
