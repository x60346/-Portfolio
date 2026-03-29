import { defineStore } from 'pinia';
import { i18n } from 'src/boot/i18n';
import { computed } from 'vue';
const t = i18n.global.t;

const timeLineList = computed(() => [
  {
    startDate: 'Apr 2025',
    endDate: t('store.timeline.timeline01.endDate'),
    company: t('store.timeline.timeline01.company'),
    position: 'RD 前端工程師',
    content:
      '公司當前首要醫療資訊系統開發，優化系統使用流程、管理後台設定。<br/>客製化 UI/UX。<br/>與團隊協作完成多個案子。',
    point: [
      '優化 vue2 x webpack 專案，lighthouse 平均分由<span class="text-orange-600 font-bold"> 60+ 提升至 90+</span>。',
      '兩星期完成前端PACS課程平台開發，<span class="text-orange-600 font-bold">首次即通過客戶檢驗</span>，取得客戶方優良評價。',
      '使用 <span class="text-orange-600 font-bold">WebSocket</span> 完成晶片卡讀取、即時通知，配合 <span class="text-orange-600 font-bold">PWA</span> 與 <span class="text-orange-600 font-bold">Firebase</span> 實現遠端掛號、通知及視訊看診功能。',
      '將網頁改寫為 App 模式，以 Cordova 轉為 Android App，可離線使用。',
      '曾實作 Barcode 、 QRCode 掃描讀取；觸控繪圖、數位簽名功能。',
    ],
    focus: false,
  },
  {
    startDate: 'Nov 2019',
    endDate: 'Apr 2025',
    company: 'X-Legend 傳奇網路',
    position: '介面負責人',
    content: '跨平台遊戲（非博弈）介面製作、規格制定；跨部門協調溝通。',
    point: [
      '<span class="text-orange-600 font-bold">製作 手機／PC RWD介面（使用Unity）</span>、交互動態演出、多國語言串接。',
      '協調溝通企劃、美術、工程部門。',
      '使用Tortoise Git。',
    ],
    focus: false,
  },
  {
    startDate: 'Sept 2018',
    endDate: 'Nov 2019',
    company: '樂玩遊戲',
    position: '劇本企劃',
    content: '全遊戲劇情設計、跨部門溝通。',
    point: ['劇情規劃設計、遊戲包裝。', '溝通美術及企劃部門，完善角色劇情與活動設計。'],
    focus: false,
  },
]);

export const useTimeLineStore = defineStore('timeLine', {
  state: () => ({
    timeLineList: JSON.parse(JSON.stringify(timeLineList.value)),
  }),
  actions: {
    getTimeLineList() {
      this.timeLineList = JSON.parse(JSON.stringify(timeLineList.value));
    },
    setTimeLineList(data) {
      this.timeLineList.push(data);
    },
    delTimeLineList(company) {
      this.timeLineList = this.timeLineList.filter((item) => {
        return item.company !== company;
      });
    },
    resetTimeLineList() {
      this.timeLineList = JSON.parse(JSON.stringify(timeLineList));
    },
  },
});
