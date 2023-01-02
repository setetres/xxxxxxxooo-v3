<template>
  <div class="flex">
    <img src="/images/thumbnail-28kbps.jpg" class="background-image" />
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
                src="/images/28kbps.png"
                class="object-cover h-80 select-none"
              />
            </div>
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                  Title
                </dt>
                <dd class="flex-1 text-2xl redacted-script">28kbps</dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                  Year
                </dt>
                <dd class="flex-1 text-2xl redacted-script">2021</dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
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
                          28kbps
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:50</div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                  Listen
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list">
                    <li class="flex items-center justify-between">
                      <a
                        href="https://music.apple.com/br/album/28kbps-single/1565684474"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Apple Music 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://xxxxxxxooo.bandcamp.com/track/28kbps"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Bandcamp 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://deezer.com/br/album/227209982"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Deezer 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://open.spotify.com/album/5IFg2JaeMZRPz6jEG98DdM"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Spotify 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://tidal.com/browse/album/182667703"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Tidal 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://youtube.com/watch?v=2fzg-qhXrEc"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        YouTube 🡥
                      </a>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                  Info
                </dt>
                <dd class="text-2xl redacted-script">
                  28kbps (Single), by XXXXXXXOOO. Recorded in FL Studio 20
                  during the COVID-19 quarantine.
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
      title: 'XXXXXXXOOO — v3',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
