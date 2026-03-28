<template>
  <q-card flat>
    <div class="q--avoid-card-border ml-4 my-4 border-l-2 border-green-500">
      <q-card-section class="card-text pb-2 text-sm">
        {{ timeline.startDate }} - {{ timeline.endDate }}
      </q-card-section>
      <q-card-section class="pb-2 pt-0">
        <div class="card-title text-2xl">{{ timeline.company }}</div>
      </q-card-section>
      <q-card-section class="card-subtitle pt-0 text-base">
        {{ timeline.position }}
      </q-card-section>

      <q-separator inset />

      <q-card-section class="card-text">
        {{ timeline.content }}
      </q-card-section>
      <q-card-section
        v-show="point"
        v-for="(p, index) in timeline.point"
        :key="index"
        class="card-subtitle py-0 text-lg"
      >
        <p><span> - </span>{{ p }}</p>
      </q-card-section>
    </div>
  </q-card>
</template>

<script setup lang="ts">
export interface TimelineCardProps {
  timeline: {
    startDate: string;
    endDate: string;
    company: string;
    position: string;
    content: string;
    point: [string];
  };
  point: boolean;
}

const props = withDefaults(defineProps<TimelineCardProps>(), {
  timeline: Object,
  point: false,
});
</script>
