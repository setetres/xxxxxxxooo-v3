<template>
  <div class="flex">
    <img src="/images/thumbnail-fein.jpg" class="background-image" />
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
                src="/images/fein.png"
                class="object-cover h-80 select-none"
              />
            </div>
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Title
                </dt>
                <dd class="flex-1 text-2xl redacted-script">FEIN</dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Year
                </dt>
                <dd class="flex-1 text-2xl redacted-script">2020</dd>
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
                          QUATRE-VINGT-DIX-NEUF
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:38</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          2
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          COWEED-19
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:18</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          3
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          XD
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:33</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          4
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          BANJO
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:45</div>
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
                        href="https://music.apple.com/br/album/fein-ep/1513768644"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Apple Music 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://xxxxxxxooo.bandcamp.com/album/fein"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Bandcamp 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://deezer.com/br/album/148877002"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Deezer 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://instagram.com/ar/929622894133566"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Instagram Filter 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://open.spotify.com/album/0nN10kpHYXrOmIKOr36Ggx"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Spotify 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://tidal.com/browse/album/141839510"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Tidal 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://youtube.com/watch?v=JtOb7rY6024&list=PLWjcKkvgds-9TuK2urpOPMtvwxTU23zmO"
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
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Info
                </dt>
                <dd class="text-2xl redacted-script">
                  FEIN (EP), by XXXXXXXOOO. Recorded in FL Studio 20 during the
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
      title: 'XXXXXXXOOO — FEIN',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
