// This is just an example,
// so you can safely delete all default props below

export default {
  store: {
    project: {
      project01: {
        title: 'Arts & Culture',
        content:
          'Bored this weekend? Use this platform to find local events in one click and spice up your holiday!',
        whatIDid: {
          first: 'Real-time Updates: Powered by the Ministry of Culture API.',
          second: 'Auto-Location: Find nearby events instantly without selecting cities.',
          third: 'Any Device: Supports Dark Mode and Responsive Design for the best experience.',
        },
        skill: {
          first: 'Nuxt.js',
          second: 'Tailwind CSS',
          third: 'Vue3',
          fourth: 'JavaScript',
        },
        preview: {
          first: 'Dark Mode',
          second: 'GPS Search',
          third: 'Category Search',
        },
      },
      project02: {
        title: 'Airship Sweets',
        content: 'A bakery that travels across borders, through the sea, and into your browser.',
        whatIDid: {
          first: 'Member Access: Custom features for members and guests.',
          second: 'Easy Dashboard: Manage your orders and coupons with ease.',
          third: 'Responsive Design: Order smoothly on any device.',
        },
        skill: {
          first: 'Vue3',
          second: 'TypeScript',
          third: 'Bootstrap 5',
          fourth: 'Ant Design',
        },
        preview: {
          first: 'Shop Sweets',
          second: 'About Treats',
          third: 'Categories',
          fourth: 'Login',
        },
      },
      project03: {
        title: 'Chrome Extension',
        content: 'Too long to screenshot? Install this to capture the whole page in one click!',
        whatIDid: {
          first: 'Chrome API: Direct browser control for seamless capture.',
          second: 'Full Image: Automatically stitches the entire page into one snapshot.',
        },
        skill: {
          first: 'JavaScript',
          second: 'Chrome Extension',
        },
      },
    },
    timeline: {
      timeline01: {
        endDate: 'NOW',
        company: 'Datacom Corp.',
        position: 'Frontend Developer',
        content:
          'Develop medical systems, optimize workflows, and manage user-backends.<br/>Custom UI/UX design.<br/>Collaborated on multiple projects.',
        point: {
          point01:
            'Optimized Vue2 & Webpack. Lighthouse scores up from <span class="text-orange-600 font-bold">60+ to 90+</span>.',
          point02:
            'Built a PACS platform in two weeks. Passed client review <span class="text-orange-600 font-bold">with high praise in FIRTH times.</span>',
          point03:
            'Used <span class="text-orange-600 font-bold">WebSocket</span> for card reading and <span class="text-orange-600 font-bold">PWA</span> & <span class="text-orange-600 font-bold">Firebase</span> for remote registration and video calls.',
          point04: 'Converted web to Android App via Cordova.',
          point05: 'Implemented Barcode/QR scanning, touch drawing, and digital signatures.',
        },
      },
      timeline02: {
        company: 'X-Legend',
        position: 'UI Lead',
        content:
          'Lead UI design and specs for cross-platform games. Manage cross-department communication.',
        point: {
          point01:
            '<span class="text-orange-600 font-bold">Build Mobile/PC RWD UI (Unity)</span>, animations, and multi-language support.',
          point02: 'Coordinate between Design, Art, and Engineering teams.',
          point03: 'Use Tortoise Git for version control.',
        },
      },
      timeline03: {
        company: 'EnjoyPlay Corp.',
        position: 'Narrative Designer',
        content: 'Design game stories and manage cross-department communication.',
        point: {
          point01: 'Plot planning and game world-building.',
          point02:
            'Coordinate with Art and Design teams to refine character lore and event design.',
        },
      },
    },
  },
  page: {
    indexPage: {
      title: 'Anita Chang',
      position: 'Frontend Engineer / Healthcare HIS',
      intro: {
        intro01: '1+ years as a Frontend Developer and 5 years in RWD layout. Expert in teamwork.',
        intro02: {
          first: 'Use ',
          second: 'Vue3',
          third: ' / Element Plus 、 Quasar 、 Tailwind CSS',
        },
        intro03: {
          first: 'Experienced in',
          second: 'admin systems',
          third: ', simplifying complex forms, ',
          forth: 'WebSocket',
          fifth: ', PWA and Lighthouse.',
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
        content: 'Skills & tools used in real projects.',
      },
      cardTitle02: {
        title: 'Side Project',
        content: 'All featuring RWD (Responsive Design).',
      },
      cardTitle03: {
        title: 'Work Experience',
        content: 'From mobile games to HIS frontend engineer.',
      },
      cardTitle04: {
        title: 'Side Project',
        content: 'Click buttons below to filter results.',
      },
    },
  },
};
