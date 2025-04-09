<template>
  <UApp>
    <UHeader>
      <template #left>
        <LogoPro class="w-auto h-6 shrink-0" />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/nuxt-ui-pro/starter-vue"
          target="_blank"
          icon="simple-icons:github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

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
</template>

<style>
@import "./styles.css";
</style>
