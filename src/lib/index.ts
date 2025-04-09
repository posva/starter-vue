import { defineCustomElement } from "vue";
import MiniApp from "./MiniApp.ce.vue";
import { configureApp } from "./configure-app";

export const UiMiniApp = defineCustomElement(MiniApp, {
  configureApp,
  shadowRoot: true,
});
