// Generated by Nuxt3'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components").default> &
  InjectionType<typeof import("../../node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt3/dist/meta/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt3/dist/app/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/nitro/dist/runtime/app/nitro.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
