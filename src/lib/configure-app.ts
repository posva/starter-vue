import { App, defineComponent } from "vue";
import ui from "@nuxt/ui/vue-plugin";
import { createMemoryHistory, createRouter } from "vue-router";

export function configureApp(app: App) {
  app.use(
    createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          // just to avoid warnings
          path: "/:pathMatch(.*)",
          component: defineComponent({ render: () => null }),
        },
      ],
    }),
  );
  app.use(ui);
  return app;
}
