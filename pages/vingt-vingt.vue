<template>
  <div class="flex">
    <img src="/images/thumbnail-vingt-vingt.jpg" class="background-image" />
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
                src="/images/vingt-vingt.png"
                class="object-cover h-80 select-none"
              />
            </div>
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Title
                </dt>
                <dd class="flex-1 text-2xl redacted-script">VINGT-VINGT</dd>
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
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          5
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          TRICERACOUGH
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">3:33</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          6
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          MOSHAXÉ
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">2:19</div>
                    </li>
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          7
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          DISPLAYNONE
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">3:07</div>
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
                        href="https://music.apple.com/br/album/vingt-vingt/1525239686"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Apple Music 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://xxxxxxxooo.bandcamp.com/album/vingt-vingt"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Bandcamp 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://deezer.com/br/album/163383462"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Deezer 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://instagram.com/ar/965617350568430"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Instagram Filter 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://open.spotify.com/album/6NgLlnVG9HTJA8U0TcRj4Z"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Spotify 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://tidal.com/browse/album/150081917"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Tidal 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://youtube.com/watch?v=zfEtdrSOpNs"
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
                  VINGT-VINGT (Album), by XXXXXXXOOO. Recorded in FL Studio 20
                  during the COVID-19 quarantine.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </overlay-scrollbars>
    </div>
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
          <div class="paper py-8">
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Includes
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list" class="space-y-8">
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            2
                          </span>
                          <span class="ml-2 flex-1 truncate">Vinyl 12''</span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Translucent black vinyl, lathe cutted with soft cover
                      </span>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            1
                          </span>
                          <span class="ml-2 flex-1 truncate">Poster A1</span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Black and white print with protective case
                      </span>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            2
                          </span>
                          <span class="ml-2 flex-1 truncate">Postcards A6</span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Black and white with UV print
                      </span>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            2
                          </span>
                          <span class="ml-2 flex-1 truncate"> Patches </span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Black and white embroidery
                      </span>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            2
                          </span>
                          <span class="ml-2 flex-1 truncate">Tote Bag</span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Black and white embroidery.<br />
                        100% cotton
                      </span>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            1
                          </span>
                          <span class="ml-2 flex-1 truncate">
                            Sticker Sheet A4
                          </span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Collection of colored stickers
                      </span>
                    </li>
                    <li class="flex flex-col items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="w-0 flex-1 flex items-center">
                          <span
                            class="flex-shrink-0 text-gray-500 bg-yellow-100"
                          >
                            3
                          </span>
                          <span class="ml-2 flex-1 truncate"> Diskettes </span>
                        </div>
                      </div>
                      <span class="w-full redacted-script text-gray-500">
                        Digital version to share with friends
                      </span>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Info
                </dt>
                <dd class="text-2xl redacted-script">
                  Prints at Aster Graf, vinyl at Vinyl-Lab and embroideries at
                  Borda Laser.
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
      title: 'XXXXXXXOOO — VINGT-VINGT',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
