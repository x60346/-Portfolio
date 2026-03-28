<template>
  <q-layout :view="'hHh LpR lFr'" class="Bg-brown-1">
    <q-header
      elevated
      class="header pt-2 overflow-hidden backdrop-blur-md"
      :class="{
        'bg-emerald-100': headerBG === 'green' && !$q.dark.isActive,
        'bg-blue-100': headerBG === 'blue' && !$q.dark.isActive,
        'bg-orange-100': headerBG === 'orange' && !$q.dark.isActive,
        'bg-transparent': headerBG === null && !$q.dark.isActive,
        'bg-black': $q.dark.isActive,
      }"
    >
      <q-toolbar class="mx-auto max-w-[1024px]">
        <q-toolbar-title class="flex gap-2">
          <div
            class="title py-2 px-8 rounded-t-md text-sm flex items-center gap-6 cursor-pointer border-r-2 border-green-800"
            @mouseenter="changeHeaderBG('green')"
            @mouseleave="changeHeaderBG(null)"
          >
            <div>
              <q-icon color="green-10" size="sm" name="fa-solid fa-house" />
            </div>
            <div>
              <div class="mb-[-4px] text-base font-bold">張宗芸 / Anita Chang</div>
              <div>Frontend Engineer / Healthcare HIS</div>
            </div>
          </div>
          <div
            class="py-2 px-4 flex justify-center items-center cursor-pointer relative"
            @mouseenter="changeHeaderBG('blue')"
            @mouseleave="changeHeaderBG(null)"
          >
            <div
              class="absolute w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              :class="{
                'bg-gray-600': headerBG === 'blue' && $q.dark.isActive,
                'bg-gray-50': headerBG === 'blue' && !$q.dark.isActive,
                'opacity-50': headerBG === 'blue',
              }"
            ></div>
            <q-icon color="blue-8" size="md" name="fa-brands fa-github" />
            <q-tooltip class="text-body2"> Github </q-tooltip>
          </div>
          <div
            class="py-2 px-4 flex justify-center items-center cursor-pointer relative"
            @mouseenter="changeHeaderBG('orange')"
            @mouseleave="changeHeaderBG(null)"
          >
            <div
              class="absolute w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              :class="{
                'bg-gray-600': headerBG === 'orange' && $q.dark.isActive,
                'bg-gray-50': headerBG === 'orange' && !$q.dark.isActive,
                'opacity-50': headerBG === 'orange',
              }"
            ></div>
            <q-icon color="orange-8" size="md" name="fa-solid fa-receipt" />
            <q-tooltip class="text-body2"> Cake </q-tooltip>
          </div>
        </q-toolbar-title>
        <div class="mr-2 h-4/5">
          <q-btn-dropdown stretch flat :label="nowLang">
            <q-list>
              <q-item
                v-for="l in langList"
                :key="l.value"
                clickable
                v-close-popup
                tabindex="0"
                @click="changeLang(l)"
              >
                <q-item-section>
                  <q-item-label>{{ l.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <q-btn
          flat
          round
          dense
          :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
          @click="toggleDarkMode"
        >
          <q-tooltip class="text-body2">
            {{ $q.dark.isActive ? 'Lightmode' : 'Darkmode' }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-toolbar class="subtitle rounded-b-sm">
        <q-toolbar-title class="mx-auto my-2 max-w-[1024px] flex gap-8">
          <Essential-link
            v-for="e in essentialLinkList"
            :key="e.link"
            :title="e.title"
            :link="e.link"
          ></Essential-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer class="Bg-brown-1" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> 頁面列表 </q-item-label>
        <Essential-link
          v-for="e in essentialLinkList"
          :key="e.link"
          :title="e.title"
          :link="e.link"
          :icon="e.icon"
        ></Essential-link>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view class="pb-8" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import EssentialLink from 'src/components/EssentialLink.vue';

const { t, locale } = useI18n();
const $q = useQuasar();

// 左列表收合
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
const rightDrawerOpen = ref(true);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

// 語言
const nowLang = ref('');
const langList = [
  {
    value: 'en-US',
    label: 'English',
  },
  {
    value: 'zh-TW',
    label: '繁體中文',
  },
];
const changeLang = (lang) => {
  locale.value = lang.value;
  nowLang.value = lang.label;
};

// dark mode
const toggleDarkMode = () => {
  $q.dark.toggle();
};

// 列表
const essentialLinkList = ref([
  {
    title: 'Home',
    link: 'home',
    icon: 'home',
  },
  {
    title: 'Side Project',
    link: 'project',
    icon: 'folder',
  },
  {
    title: 'Work Experience',
    link: 'timeline',
    icon: 'timeline',
  },
]);

// 更換列表底色
const headerBG = ref(null);
const changeHeaderBG = (color) => {
  headerBG.value = color;
};

onMounted(() => {
  nowLang.value = langList.filter((item) => item.value === locale.value)[0]?.label;
});
</script>
<style lang="scss">
@media screen and (min-width: 1024px) {
  .header {
    border-radius: 0.2rem;
  }
}
@media screen and (max-width: 1023.99px) {
  .header {
    border-radius: 0;
  }
}
</style>
