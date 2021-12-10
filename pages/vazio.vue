<template>
  <div class="flex">
    <img
      src="/images/thumbnail-vazio.jpg"
      class="fixed object-cover top-0 left-0 w-full h-full select-none"
      style="z-index: -5"
    />
    <div class="wrap max-w-sm p-8 pb-16">
      <div class="paper pb-8">
        <div class="mb-8 pt-px px-px">
          <img src="/images/vazio.png" class="object-cover h-80 select-none" />
        </div>
        <div class="py-5 sm:p-0">
          <dl class="space-y-8">
            <div class="flex redacted-hover">
              <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                Title
              </dt>
              <dd class="flex-1 text-2xl redacted-script">VAZIØ</dd>
            </div>
            <div class="flex redacted-hover">
              <dt class="w-16 flex-shrink-0 text-sm font-bold redacted">
                Year
              </dt>
              <dd class="flex-1 text-2xl redacted-script">2020</dd>
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
                        VAZIØ
                      </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">2:36</div>
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
                      href="https://music.apple.com/br/album/vazi%C3%B8-single/1534502526"
                      class="flex items-center justify-between text-red-500 underline hover:text-black"
                      target="_blank"
                      rel="noopener"
                    >
                      Apple Music 🡥
                    </a>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="https://xxxxxxxooo.bandcamp.com/track/vazi"
                      class="flex items-center justify-between text-red-500 underline hover:text-black"
                      target="_blank"
                      rel="noopener"
                    >
                      Bandcamp 🡥
                    </a>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="https://deezer.com/br/album/177544912"
                      class="flex items-center justify-between text-red-500 underline hover:text-black"
                      target="_blank"
                      rel="noopener"
                    >
                      Deezer 🡥
                    </a>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="https://open.spotify.com/album/2ooPMxZyHDTq8ltMm6UdqB"
                      class="flex items-center justify-between text-red-500 underline hover:text-black"
                      target="_blank"
                      rel="noopener"
                    >
                      Spotify 🡥
                    </a>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="https://tidal.com/browse/album/157442782"
                      class="flex items-center justify-between text-red-500 underline hover:text-black"
                      target="_blank"
                      rel="noopener"
                    >
                      Tidal 🡥
                    </a>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="https://youtube.com/watch?v=Bv3jI_nFQEw"
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
                VAZIØ (Single), by XXXXXXXOOO. Recorded in FL Studio 20 during
                the COVID-19 quarantine.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'XXXXXXXOOO — VAZIØ',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
