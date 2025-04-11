<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import type { SelectMenuItem } from "@nuxt/ui";
import { computed } from "vue";

const props = defineProps<{ selector: HTMLElement | null }>();

const colorMode = useColorMode({
  selector: () => props.selector,
});

const items = computed(
  () =>
    [
      { label: "System", value: "auto", icon: "i-lucide-monitor" },
      { label: "Light", value: "light", icon: "i-lucide-sun" },
      { label: "Dark", value: "dark", icon: "i-lucide-moon" },
    ] as const satisfies SelectMenuItem[],
);

const preference = computed({
  get() {
    return (
      items.value.find((option) => option.value === colorMode.value) ||
      items.value[0]
    );
  },
  set(option) {
    colorMode.value = option.value;
  },
});
</script>

<template>
  <USelectMenu
    v-model="preference"
    :icon="preference?.icon"
    :search-input="false"
    :items="items"
  />
</template>
