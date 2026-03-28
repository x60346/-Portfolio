<template>
  <q-page class="Bg-brown-1 flex flex-col flex-nowrap justify-start items-center gap-4">
    <div
      class="mx-auto max-w-[1024px] w-full border-t-0 rounded-none flex flex-col gap-4 box-border"
    >
      <!-- timeline -->
      <div>
        <CardTitle :title="'Work Experience'" :content="'從手遊到醫療工程師'" />
        <div class="mx-2 flex flex-col gap-2">
          <TimelineCard v-for="t in timelineList" :key="t.company" :timeline="t" :point="true" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// store
import { useTimeLineStore } from 'src/stores/timeline';
const timelineStore = useTimeLineStore();
// componenet
import CardTitle from 'src/components/CardTitle.vue';
import TimelineCard from 'src/components/TimelineCard.vue';
const timelineList = ref([]);
onMounted(() => {
  timelineList.value = timelineStore.timeLineList;
});
</script>
