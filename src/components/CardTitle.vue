<template>
  <q-card class="bg-transparent" flat>
    <q-card-section class="pb-2">
      <div class="card-title text-3xl">{{ title }}</div>
    </q-card-section>

    <q-card-section class="card-text pt-0 text-base"> {{ content }} </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
export interface CardTitleProps {
  title: string;
  content: string;
}

const props = withDefaults(defineProps<CardTitleProps>(), {
  title: '',
  content: '',
});
</script>
