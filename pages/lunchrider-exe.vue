<template>
  <div class="flex">
    <img src="/images/thumbnail-lunchrider-exe.jpg" class="background-image" />
    <div class="flex min-h-screen z-10">
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
        <div class="wrap max-w-sm p-8 pb-10 pr-12">
          <div class="paper pb-8">
            <div class="mb-8 pt-px px-px">
              <img
                src="/images/lunchrider-exe.png"
                class="object-cover h-80 select-none"
              />
            </div>
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Title
                </dt>
                <dd class="flex-1 text-2xl redacted-script">LunchRider.exe</dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Year
                </dt>
                <dd class="flex-1 text-2xl redacted-script">2022</dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Tracks
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list">
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          1
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          Intro
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">1:09</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          2
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          Sleep
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:02</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          3
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          Repeat
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:27</div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Listen
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list">
                    <li class="flex items-center justify-between">
                      <a
                        href="#"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                      >
                        Apple Music 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="#"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                      >
                        Bandcamp 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="#"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                      >
                        Deezer 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="#"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                      >
                        Spotify 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="#"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                      >
                        Tidal 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="#"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                      >
                        YouTube 🡥
                      </a>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Info
                </dt>
                <dd class="text-2xl redacted-script">
                  LunchRider.exe (EP), by XXXXXXXOOO featuring Grupo Porco de
                  Grindcore Interpretativo. Recorded in FL Studio 20 during the
                  COVID-19 quarantine.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </overlay-scrollbars>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'XXXXXXXOOO — LunchRider.exe',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
