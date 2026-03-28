import { defineStore } from 'pinia';
import { i18n } from 'src/boot/i18n';

const t = i18n.global.t;

const projectList = [
  {
    title: 'Lorem ipsum',
    cover: 'https://cdn.quasar.dev/img/parallax2.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatIDid: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua',
    ],
    skill: ['Lorem', 'ipsum', 'dolor'],
    preview: [
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum dolor sit',
      },
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum dolor sit amet',
      },
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum',
      },
    ],
    github: '',
    demo: '',
    focus: false,
  },
  {
    title: 'Lorem ipsum2',
    cover: 'https://cdn.quasar.dev/img/parallax2.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatIDid: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua',
    ],
    skill: ['dolor', 'sit', 'amet'],
    preview: [
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum dolor sit',
      },
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum dolor sit amet',
      },
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum',
      },
    ],
    github: '',
    demo: '',
    focus: false,
  },
  {
    title: 'Lorem ipsum3',
    cover: 'https://cdn.quasar.dev/img/parallax2.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatIDid: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua',
    ],
    skill: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
    preview: [
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum dolor sit',
      },
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum dolor sit amet',
      },
      {
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        discribe: 'Lorem ipsum',
      },
    ],
    github: '',
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
