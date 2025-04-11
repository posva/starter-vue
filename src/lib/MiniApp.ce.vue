<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { ref } from "vue";

const tabsItems = [
  {
    label: "Queries",
    icon: "i-lucide-hard-drive-download",
    value: "queries",
  },
  {
    label: "Mutations",
    icon: "i-lucide-hard-drive-upload",
    value: "mutations",
  },
] satisfies TabsItem[];

const currentTab = ref(0);
</script>

<template>
  <div
    id="root"
    class="dark fixed bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto"
  >
    <UApp>
      <div class="w-full flex">
        <UTabs
          v-model="currentTab"
          color="neutral"
          :content="false"
          :items="tabsItems"
          class="w-full"
        />

        <UButton
          to="https://github.com/nuxt-ui-pro/starter-vue"
          target="_blank"
          icon="simple-icons:github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </div>

      <div class="w-full flex">
        <UInput
          icon="i-lucide-search"
          size="md"
          variant="ghost"
          placeholder="Search..."
        />
      </div>

      <UMain>
        <p>Main content</p>
        <UButton>I should be rounded</UButton>
      </UMain>

      <USeparator icon="simple-icons:vuedotjs" />

      <UFooter>
        <template #left>
          <p class="text-sm text-(--ui-text-muted)">
            Copyright © {{ new Date().getFullYear() }}
          </p>
        </template>

        <template #right>
          <UButton
            to="https://github.com/nuxt-ui-pro/starter-vue"
            target="_blank"
            icon="simple-icons:github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </template>
      </UFooter>
    </UApp>
  </div>
</template>

<style>
@import "./styles.css";
</style>
