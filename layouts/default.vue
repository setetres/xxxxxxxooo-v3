<template>
  <div class="flex min-h-screen">
    <div class="flex min-h-screen z-20">
      <overlay-scrollbars
        :options="{
          scrollbars: { autoHide: 'move' },
          overflowBehavior: {
            x: 'hidden',
            y: 'scroll',
          },
        }"
        class="flex-1 relative overflow-y-scroll overflow-x-hidden w-full"
      >
        <div class="wrap max-w-sm p-8 pr-12">
          <div class="paper pb-8">
            <header class="flex flex-col max-w-lg pt-16">
              <Logo />
              <div class="space-y-8">
                <div class="flex redacted-hover">
                  <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                    About
                  </dt>
                  <dd class="text-2xl redacted-script">
                    A knife-grinder music endeavor from Brazil.
                  </dd>
                </div>
                <div class="flex redacted-hover">
                  <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                    2022
                  </dt>
                  <dd>
                    <ul role="menu">
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/lunch-rider"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          Lunch Rider 🡦
                        </nuxt-link>
                        <sup class="font-medium ml-1 uppercase">New</sup>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div class="flex redacted-hover">
                  <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                    2021
                  </dt>
                  <dd>
                    <ul role="menu">
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/ijwgh"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          I.J.W.G.H 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/28kbps"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          28kbps 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/56kbps"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          56kbps 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/untitled"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          Untitled 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/nief"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          NIEF 🡦
                        </nuxt-link>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div class="flex redacted-hover">
                  <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                    2020
                  </dt>
                  <dd>
                    <ul role="menu">
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/vazio"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          VAZIØ 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/vingt-vingt"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          VINGT-VINGT 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/moshaxe"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          MOSHAXÉ 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/triceracough"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          TRICERACOUGH 🡦
                        </nuxt-link>
                      </li>
                      <li class="flex items-center justify-between">
                        <nuxt-link
                          to="/fein"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          exact-active-class="bg-yellow-100"
                        >
                          FEIN 🡦
                        </nuxt-link>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div class="flex redacted-hover">
                  <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                    Archive
                  </dt>
                  <dd>
                    <ul role="menu">
                      <li class="flex items-center justify-between">
                        <a
                          href="https://v2.xxxxxxx.ooo"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          target="_blank"
                          rel="noopener"
                        >
                          v2 🡥
                        </a>
                        <sup class="font-medium ml-1">2021</sup>
                      </li>
                      <li class="flex items-center justify-between">
                        <a
                          href="https://v1.xxxxxxx.ooo"
                          class="flex items-center justify-between text-2xl text-red-500 underline hover:text-black"
                          target="_blank"
                          rel="noopener"
                        >
                          v1 🡥
                        </a>
                        <sup class="font-medium ml-1">2020</sup>
                      </li>
                    </ul>
                  </dd>
                </div>
              </div>
            </header>
          </div>
        </div>
      </overlay-scrollbars>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import 'overlayscrollbars/css/OverlayScrollbars.css'
import Vue from 'vue'
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue'

Vue.use(OverlayScrollbarsPlugin)

export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
