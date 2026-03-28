import { defineStore } from 'pinia';

const timeLineList = [
  {
    startDate: 'April xxxx',
    endDate: 'xxxx',
    company: 'Basic',
    position: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    point: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua',
    ],
  },
];

export const useTimeLineStore = defineStore('timeLine', {
  state: () => ({
    timeLineList: JSON.parse(JSON.stringify(timeLineList)),
  }),
  actions: {
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
