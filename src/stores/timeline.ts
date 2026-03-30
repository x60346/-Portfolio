import { defineStore } from 'pinia';
import { i18n } from 'src/boot/i18n';
import { computed } from 'vue';
const t = i18n.global.t;

const timeLineList = computed(() => [
  {
    startDate: 'Apr 2025',
    endDate: t('store.timeline.timeline01.endDate'),
    company: t('store.timeline.timeline01.company'),
    position: t('store.timeline.timeline01.position'),
    content: t('store.timeline.timeline01.content'),
    point: [
      t('store.timeline.timeline01.point.point01'),
      t('store.timeline.timeline01.point.point02'),
      t('store.timeline.timeline01.point.point03'),
      t('store.timeline.timeline01.point.point04'),
      t('store.timeline.timeline01.point.point05'),
    ],
    focus: false,
  },
  {
    startDate: 'Nov 2019',
    endDate: 'Apr 2025',
    company: t('store.timeline.timeline02.company'),
    position: t('store.timeline.timeline02.position'),
    content: t('store.timeline.timeline02.content'),
    point: [
      t('store.timeline.timeline02.point.point01'),
      t('store.timeline.timeline02.point.point02'),
      t('store.timeline.timeline02.point.point03'),
    ],
    focus: false,
  },
  {
    startDate: 'Sept 2018',
    endDate: 'Nov 2019',
    company: t('store.timeline.timeline03.company'),
    position: t('store.timeline.timeline03.position'),
    content: t('store.timeline.timeline03.content'),
    point: [
      t('store.timeline.timeline03.point.point01'),
      t('store.timeline.timeline03.point.point02'),
    ],
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
