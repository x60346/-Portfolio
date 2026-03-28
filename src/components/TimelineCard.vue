<template>
  <q-card
    flat
    class="relative"
    @mouseenter="() => (timelineClone.focus = true)"
    @mouseleave="() => (timelineClone.focus = false)"
  >
    <div class="q--avoid-card-border ml-4 my-4 border-l-2 border-green-500">
      <q-card-section class="card-text pb-2 text-sm flex items-center gap-2">
        {{ timelineClone.startDate }}<span>-</span>{{ timelineClone.endDate }}
      </q-card-section>
      <q-card-section class="pb-2 pt-0">
        <div class="card-title text-2xl">{{ timelineClone.company }}</div>
      </q-card-section>
      <q-card-section class="card-subtitle pt-0 text-base">
        {{ timelineClone.position }}
      </q-card-section>

      <q-separator inset />

      <q-card-section class="card-text">
        <p v-html="timelineClone.content"></p>
      </q-card-section>
      <q-card-section
        v-show="point"
        v-for="(p, index) in timelineClone.point"
        :key="index"
        class="card-text py-0 text-base flex items-center gap-2"
      >
        <span> - </span>
        <p v-html="p"></p>
      </q-card-section>
    </div>
    <!-- 滑鼠移進遮罩層 -->
    <Transition v-if="!point">
      <div v-show="timelineClone.focus" class="screen-focus absolute w-full h-full top-0 left-0">
        <div class="absolute-full flex flex-col flex-center bg-gray-300 backdrop-blur-md gap-4">
          <q-btn
            class="w-2/3"
            unelevated
            rounded
            color="primary"
            icon-right="chevron_right"
            label="View More"
            @click="router.push({ name: `timeline` })"
          />
        </div>
      </div>
    </Transition>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
export interface TimelineCardProps {
  timeline: {
    startDate: string;
    endDate: string;
    company: string;
    position: string;
    content: string;
    point: [string];
    focus: boolean;
  };
  point: boolean;
}

const props = withDefaults(defineProps<TimelineCardProps>(), {
  timeline: Object,
  point: false,
});

const timelineClone = ref(JSON.parse(JSON.stringify(props.timeline)));
</script>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: ease-in-out 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
