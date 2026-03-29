<template>
  <q-item
    class="screen-essentialLink rounded-sm"
    :class="{ active: route.name === link, inactive: route.name !== link }"
    clickable
    @click="goto"
  >
    <q-item-section>
      <q-item-label class="text-lg flex flex-nowrap gap-2 items-center">
        <q-icon size="sm" :name="icon" />
        <div class="">{{ title }}</div>
      </q-item-label>
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
  icon: string;
  link?: string;
}

const props = withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
});

const goto = async () => {
  await router.push({ name: props.link });
};
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .screen-essentialLink {
    border-bottom-width: 2px;
  }
  .active {
    --tw-border-opacity: 1;
    border-color: rgb(249 168 37 / var(--tw-border-opacity, 1));
  }
  .inactive {
    border-color: transparent;
  }
}
@media screen and (max-width: 767.99px) {
  .screen-essentialLink {
    border-bottom-width: 0px;
    border-color: transparent;
  }
  .active {
    --tw-border-opacity: 1;
    .q-icon {
      color: rgb(249 168 37 / var(--tw-border-opacity, 1));
    }
  }
}
</style>
