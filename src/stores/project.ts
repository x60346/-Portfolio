import { defineStore } from 'pinia';
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
import { i18n } from 'src/boot/i18n';
const t = i18n.global.t;

const projectList = [
  {
    title: '藝文活動',
    cover: cover01,
    content: '周末覺得無聊嗎？不知道要去哪裡嗎？使用此平台，一鍵搜尋周圍所有活動，讓假期不再無聊！',
    whatIDid: [
      '串接文化部提供免費API，即時更新各項活動。',
      '使用定位功能，不用再選縣市，直接找到最近的活動。',
      '支援 Dark 模式、RWD 功能，任何時段、任何裝置都方便。',
    ],
    skill: ['Nuxt.js', 'Tailwind CSS', 'Vue3', 'JavaScript'],
    preview: [
      {
        src: preview01,
        discribe: '暗色模式',
      },
      {
        src: preview02,
        discribe: 'gps定位搜尋',
      },
      {
        src: preview03,
        discribe: '類別搜尋',
      },
    ],
    github: 'https://github.com/x60346/nuxt-activity',
    demo: 'https://x60346.github.io/nuxt-activity/',
    focus: false,
  },
  {
    title: '飛行船甜點店',
    cover: cover02,
    content: '一艘跨越國境的甜點店，順著網路游過大海、飛過天空，悄悄停佇在你的網頁裡。',
    whatIDid: [
      '規範使用者訪問權限，區分會員／非會員功能。',
      '簡易會員後台，方便管理訂單和優惠券。',
      '支援 RWD ，行動裝置也能輕鬆點餐。',
    ],
    skill: ['Vue3', 'TypeScript', 'Bootstrap 5', 'Ant Design'],
    preview: [
      {
        src: preview04,
        discribe: '選擇甜點',
      },
      {
        src: preview05,
        discribe: '甜點介紹',
      },
      {
        src: preview07,
        discribe: '甜點類別',
      },
      {
        src: preview06,
        discribe: '登入',
      },
    ],
    github: 'https://github.com/x60346/cakeList',
    demo: 'https://x60346.github.io/cakeList/#/',
    focus: false,
  },
  {
    title: 'Chrome 擴充功能',
    cover: cover03,
    content: '網頁太長，手動截圖截不完？安裝它，一鍵生成網頁快照！',
    whatIDid: ['串接 Chrome API，取得控制網頁功能。', '拼接全畫面圖片，取得網頁快照。'],
    skill: ['JavaScript', 'Chrome Extension'],
    preview: [],
    github: 'https://github.com/x60346/chrome-extension-ex1_webscreenshot',
    demo: '',
    focus: false,
  },
];

export const useProjectStore = defineStore('project', {
  state: () => ({
    projectList: JSON.parse(JSON.stringify(projectList)),
  }),
  actions: {
    setProjectList(data) {
      this.projectList.push(data);
    },
    getProjectList(title) {
      return this.projectList.filter((item) => {
        return item.title === title;
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
