<template>
  <q-card flat>
    <q-card-section class="pb-2">
      <div class="card-title text-2xl">{{ type }}</div>
    </q-card-section>
    <q-card-section class="card-text pt-2 flex gap-2">
      <div
        class="btn-skill-1"
        v-for="sl in skill.filter((item) => item.type === type)"
        :key="sl.name"
      >
        {{ sl.name }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Skill {
  name: string;
  type: string;
}
export interface SkillCardProps {
  skill: Array<Skill>;
  type: string;
}

const props = withDefaults(defineProps<SkillCardProps>(), {
  skill: () => [],
  type: '',
});
</script>
