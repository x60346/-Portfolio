<template>
  <q-item
    class="border-b-2 rounded-sm"
    :class="{ 'border-[#f9a825]': route.name === link, 'border-transparent': route.name !== link }"
    clickable
    @click="goto"
  >
    <q-item-section>
      <q-item-label class="text-lg">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

export interface EssentialLinkProps {
  title: string;
  link?: string;
}

const props = withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
});

const goto = async () => {
  await router.push({ name: props.link });
};
</script>
