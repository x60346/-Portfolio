<template>
  <div :class="btnclass" :aria-label="ariaLabel">
    <q-icon v-if="iconleft" size="sm" :name="icon" />
    {{ title }}
    <q-icon v-if="iconright" size="sm" :name="icon" />
  </div>
</template>

<script setup lang="ts">
export interface MyBtnProps {
  title: string;
  icon?: string;
  iconright?: boolean;
  iconleft?: boolean;
  btnclass: string;
  ariaLabel: string;
}

const props = withDefaults(defineProps<MyBtnProps>(), {
  title: 'button',
  icon: 'open_in_new',
  iconright: false,
  iconleft: false,
  btnclass: 'btn-skill-1',
  ariaLabel: 'button',
});
</script>
