<template>
  <q-layout :view="'hHh LpR lFr'" class="Bg-brown-1">
    <q-header
      elevated
      class="pt-2 overflow-hidden backdrop-blur-md"
      :class="{
        'bg-emerald-100': headerBG === 'green' && !$q.dark.isActive,
        'bg-blue-100': headerBG === 'blue' && !$q.dark.isActive,
        'bg-purple-100': headerBG === 'purple' && !$q.dark.isActive,
        'bg-transparent': headerBG === null && !$q.dark.isActive,
        'bg-black': $q.dark.isActive,
      }"
    >
      <q-toolbar class="label mx-auto max-w-[1024px]">
        <q-toolbar-title class="flex gap-2 flex-nowrap">
          <div
            class="screen-header-btn title py-2 px-8 rounded-t-md text-sm flex items-center gap-6 cursor-pointer"
            @mouseenter="changeHeaderBG('green')"
            @mouseleave="changeHeaderBG(null)"
          >
            <div>
              <q-icon
                :color="$q.dark.isActive ? 'teal-5' : 'teal-8'"
                size="sm"
                name="fa-solid fa-user"
              />
            </div>
            <div class="screen-header-btn">
              <div class="mb-[-4px] text-base font-bold">張宗芸 / Anita Chang</div>
              <div>Frontend Engineer / Healthcare HIS</div>
            </div>
          </div>
          <div
            class="screen-header-btn py-2 px-4 flex justify-center items-center cursor-pointer relative"
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
            <q-icon
              :color="$q.dark.isActive ? 'blue-4' : 'blue-6'"
              size="md"
              name="fa-brands fa-github"
            />
            <q-tooltip class="text-body2"> Github </q-tooltip>
          </div>
          <div
            class="screen-header-btn py-2 px-4 flex justify-center items-center cursor-pointer relative"
            @mouseenter="changeHeaderBG('purple')"
            @mouseleave="changeHeaderBG(null)"
          >
            <div
              class="absolute w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              :class="{
                'bg-gray-600': headerBG === 'purple' && $q.dark.isActive,
                'bg-gray-50': headerBG === 'purple' && !$q.dark.isActive,
                'opacity-50': headerBG === 'purple',
              }"
            ></div>
            <q-icon
              :color="$q.dark.isActive ? 'purple-4' : 'purple-5'"
              size="md"
              name="fa-solid fa-receipt"
            />
            <q-tooltip class="text-body2"> Cake </q-tooltip>
          </div>

          <!-- <div
            class="title py-2 px-8 rounded-t-md text-sm flex items-center gap-6 cursor-pointer border-r-2 border-green-800"
          >
            <div>
              <div class="mb-[-4px] text-base font-bold">張宗芸 / Anita Chang</div>
              <div>Frontend Engineer / Healthcare HIS</div>
            </div>
          </div> -->
          <!-- 側選單開關 -->
          <div
            class="phone-header-btn ml-auto pt-2 pb-3 flex justify-center items-center cursor-pointer relative"
            @click="toggleRightDrawer"
          >
            <q-icon size="md" name="fa-solid fa-bars" />
          </div>
        </q-toolbar-title>
        <div class="screen-header-btn mr-2">
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
          class="screen-header-btn"
          flat
          round
          dense
          :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
          @click="toggleDarkMode"
          aria-label="darkmode"
        >
          <q-tooltip class="text-body2">
            {{ $q.dark.isActive ? 'Lightmode' : 'Darkmode' }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-toolbar class="header screen-header-btn subtitle rounded-b-sm">
        <q-toolbar-title class="screen-header-subtoolbar mx-auto max-w-[1024px]">
          <q-list class="flex">
            <Essential-link
              v-for="e in essentialLinkList"
              :key="e.link"
              :title="e.title"
              :link="e.link"
              :icon="e.icon"
            ></Essential-link>
          </q-list>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="Screen.width < 768"
      class="mydrawer phone-header-btn"
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label class="flex justify-end items-center" header>
          <div class="mr-2">
            <q-btn-dropdown class="mydrawer" stretch flat :label="nowLang">
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
            class="mydrawer"
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
        </q-item-label>
        <Essential-link
          v-for="e in essentialLinkList"
          :key="e.link"
          :title="e.title"
          :link="e.link"
          :icon="e.icon"
        ></Essential-link>
        <q-separator class="my-2" />
        <q-item clickable>
          <q-item-section>
            <q-item-label class="text-lg flex flex-nowrap gap-2 items-center text-blue-6">
              <q-icon size="sm" name="fa-brands fa-github" />
              <div class="">Github</div>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label class="text-lg flex flex-nowrap gap-2 items-center text-purple-4">
              <q-icon size="sm" name="fa-solid fa-receipt" />
              <div class="">Cake Resume</div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="pb-8" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Screen, useQuasar } from 'quasar';
import EssentialLink from 'src/components/EssentialLink.vue';

const { t, locale } = useI18n();
const $q = useQuasar();

// 左列表收合
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
const rightDrawerOpen = ref(false);
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
@media screen and (min-width: 768px) {
  .header {
    border-radius: 0.2rem;
  }
  .screen-header-subtoolbar {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 2rem;
  }
  .phone-header-btn {
    display: none;
  }
}
@media screen and (max-width: 767.99px) {
  .header {
    border-radius: 0;
  }
  .screen-header-btn {
    display: none;
  }
  .screen-header-subtoolbar {
    gap: 0.5rem;
    flex-wrap: nowrap;
    overflow: auto;
  }
}
</style>
