// This is just an example,
// so you can safely delete all default props below

export default {
  store: {
    project: {
      project01: {
        title: '藝文活動',
        content:
          '周末覺得無聊嗎？不知道要去哪裡嗎？使用此平台，一鍵搜尋周圍所有活動，讓假期不再無聊！',
        whatIDid: {
          first: '串接文化部提供免費API，即時更新各項活動。',
          second: '使用定位功能，不用再選縣市，直接找到最近的活動。',
          third: '支援 Dark 模式、RWD 功能，任何時段、任何裝置都方便。',
        },
        skill: {
          first: 'Nuxt.js',
          second: 'Tailwind CSS',
          third: 'Vue3',
          fourth: 'JavaScript',
        },
        preview: {
          first: '暗色模式',
          second: 'gps定位搜尋',
          third: '類別搜尋',
        },
      },
      project02: {
        title: '飛行船甜點店',
        content: '一艘跨越國境的甜點店，順著網路游過大海、飛過天空，悄悄停佇在你的網頁裡。',
        whatIDid: {
          first: '規範使用者訪問權限，區分會員／非會員功能。',
          second: '簡易會員後台，方便管理訂單和優惠券。',
          third: '支援 RWD ，行動裝置也能輕鬆點餐。',
        },
        skill: {
          first: 'Vue3',
          second: 'TypeScript',
          third: 'Bootstrap 5',
          fourth: 'Ant Design',
        },
        preview: {
          first: '選擇甜點',
          second: '甜點介紹',
          third: '甜點類別',
          fourth: '登入',
        },
      },
      project03: {
        title: 'Chrome 擴充功能',
        content: '網頁太長，手動截圖截不完？安裝它，一鍵生成網頁快照！',
        whatIDid: {
          first: '串接 Chrome API，取得控制網頁功能。',
          second: '拼接全畫面圖片，取得網頁快照。',
        },
        skill: {
          first: 'JavaScript',
          second: 'Chrome Extension',
        },
      },
    },
    timeline: {
      timeline01: {
        endDate: '現在',
        company: '合華科技',
        position: 'RD 前端工程師',
        content:
          '公司當前首要醫療資訊系統開發，優化系統使用流程、管理後台設定。<br/>客製化 UI/UX。<br/>與團隊協作完成多個案子。',
        point: {
          point01:
            '優化 vue2 x webpack 專案，lighthouse 平均分由<span class="text-orange-600 font-bold"> 60+ 提升至 90+</span>。',
          point02:
            '兩星期完成前端PACS課程平台開發，<span class="text-orange-600 font-bold">首次即通過客戶檢驗</span>，取得客戶方優良評價。',
          point03:
            '使用 <span class="text-orange-600 font-bold">WebSocket</span> 完成晶片卡讀取、即時通知，配合 <span class="text-orange-600 font-bold">PWA</span> 與 <span class="text-orange-600 font-bold">Firebase</span> 實現遠端掛號、通知及視訊看診功能。',
          point04: '將網頁改寫為 App 模式，以 Cordova 轉為 Android App，可離線使用。',
          point05: '曾實作 Barcode 、 QRCode 掃描讀取；觸控繪圖、數位簽名功能。',
        },
      },
      timeline02: {
        company: 'X-Legend 傳奇網路',
        position: '介面負責人',
        content: '跨平台遊戲（非博弈）介面製作、規格制定；跨部門協調溝通。',
        point: {
          point01:
            '<span class="text-orange-600 font-bold">製作 手機／PC RWD介面（使用Unity）</span>、交互動態演出、多國語言串接。',
          point02: '協調溝通企劃、美術、工程部門。',
          point03: '使用Tortoise Git。',
        },
      },
      timeline03: {
        company: '樂玩遊戲',
        position: '劇本企劃',
        content: '全遊戲劇情設計、跨部門溝通。',
        point: {
          point01: '劇情規劃設計、遊戲包裝。',
          point02: '溝通美術及企劃部門，完善角色劇情與活動設計。',
        },
      },
    },
  },
  page: {
    indexPage: {
      title: '張宗芸 / Anita Chang',
      position: 'Frontend Engineer / Healthcare HIS',
      intro: {
        intro01: '1 年以上 前端工程師 與 5 年 RWD 切版經驗，擅長團隊協作',
        intro02: {
          first: '使用',
          second: 'Vue3',
          third: '／ Element Plus 、 Quasar 、 Tailwind CSS',
        },
        intro03: {
          first: '具備',
          second: '後台會員系統',
          third: '、簡化複雜表單、',
          forth: 'WebSocket',
          fifth: '、 PWA 、 Lighthouse 經歷',
        },
      },
    },
    projectInfo: {
      whatIDid: 'What I Did',
      technologlesUsed: 'Technologles Used',
    },
    projectPage: {
      count: 'projects',
    },
  },
  components: {
    cardTitle: {
      cardTitle01: {
        title: 'Skill Tree',
        content: '我在實際專案中使用過的技能與工具',
      },
      cardTitle02: {
        title: 'Side Project',
        content: '均具備RWD響應式功能',
      },
      cardTitle03: {
        title: 'Work Experience',
        content: '從手遊到醫療工程師',
      },
      cardTitle04: {
        title: 'Side Project',
        content: '點擊下方按鈕可快速篩選結果',
      },
    },
  },
};
