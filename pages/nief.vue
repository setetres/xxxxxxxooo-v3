<template>
  <div class="flex">
    <img src="/images/thumbnail-nief.jpg" class="background-image" />
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
                src="/images/nief.png"
                class="object-cover h-80 select-none"
              />
            </div>
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Title
                </dt>
                <dd class="flex-1 text-2xl redacted-script">NIEF</dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Year
                </dt>
                <dd class="flex-1 text-2xl redacted-script">2021</dd>
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
                        href="https://music.apple.com/br/album/nief-ep/1551229648"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Apple Music 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://xxxxxxxooo.bandcamp.com/album/nief"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Bandcamp 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://deezer.com/br/album/203576412"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Deezer 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://instagram.com/ar/1241536719557611"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Instagram Filter 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://open.spotify.com/album/5gX1vki0e5muS6cZlAKRJC"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Spotify 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://tidal.com/browse/album/171478178"
                        class="flex items-center justify-between text-red-500 underline hover:text-black"
                        target="_blank"
                        rel="noopener"
                      >
                        Tidal 🡥
                      </a>
                    </li>
                    <li class="flex items-center justify-between">
                      <a
                        href="https://youtube.com/watch?v=kz9_0yhU6HI&list=PLWjcKkvgds--JU0L2XjDhaEJbKwNZJCk6"
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
                  NIEF (EP), by XXXXXXXOOO featuring Redouane Aouameur. A
                  Collaboration via Fiverr® Gig®. Recorded in FL Studio 20
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
                  Lyrics
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
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted" />
                <dd class="flex-1 text-2xl space-y-8">
                  <p>
                    Quatre-vingt-dix-neuf<br />
                    Quatre-vingt-dix-neuf<br />
                    Quatre-vingt-dix-neuf<br />
                    Quatre-vingt-dix-neuf
                  </p>
                  <p>
                    Trois fois trente trois...<br />
                    Est égal à quatre-vingt-dix-neuf<br />
                    Onze fois neuf
                  </p>
                  <p>
                    Quatre-vingt-dix-neuf<br />
                    Quatre-vingt-dix-neuf<br />
                    Quatre-vingt-dix-neuf<br />
                    Quatre-vingt-dix-neuf
                  </p>
                  <p>
                    As tu appris les tables de multiplication?<br />
                    C’est comme pour les maths pour les raisonnements<br />
                    Je fais toujours juste
                  </p>
                  <p>
                    Mathématiques, scientifiques<br />
                    Numérique, logique, analogique<br />
                    Satanique
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="wrap max-w-sm p-8 pb-10 pr-12">
          <div class="paper py-8">
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Lyrics
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list">
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          2
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          COWEED-19
                        </span>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted" />
                <dd class="flex-1 text-2xl space-y-8">
                  <div class="space-y-8" style="direction: rtl">
                    <p>
                      تتكيف زطلة، قارو شيرة<br />
                      عمر راسك الكويد فيها
                    </p>
                    <p>
                      نحب نخلوي روحي, ما نضر ما نآدي<br />
                      نحب انزهي روحي, ما نشقا ما انباطي
                    </p>
                    <p>
                      نكمي زطلة, قارو شيرة<br />
                      خلوي راسك. الكويد فيها
                    </p>
                    <p>
                      نحب السوسطة, جا المرض فالكرة<br />
                      حاب يدينا, الكويد يخلوينا
                    </p>
                    <p>
                      تتكيف زطلة، قارو شيرة<br />
                      عمر راسك الكويد فيها
                    </p>
                    <p>
                      انا هو الكويد, حشيش مفيد<br />
                      مرض غير مميت, ليس كالكوفيد<br />
                      دواء منعش, تأثير مدهش<br />
                      كويد ١٩, الكوفيد ما بقاش
                    </p>
                    <p>
                      أنا هو الكويد, حشيش لذيذ<br />
                      مرض جد مريح ,ليس كالكوفيد<br />
                      دواء مدهش, دواء منعش<br />
                      كويد ١٩, الكوفيد ما بقاش
                    </p>
                    <p>
                      جاء الكويد, لكويد المبيد<br />
                      جاء الكويد, لكويد العنيد
                    </p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="wrap max-w-sm p-8 pb-10 pr-12">
          <div class="paper py-8">
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Lyrics
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list">
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          3
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          XD
                        </span>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted" />
                <dd class="flex-1 text-2xl space-y-8">
                  <div class="space-y-8">
                    <p>
                      Informatique, robotique, electronique<br />
                      <span class="block" style="direction: rtl"
                        >كلش تمنييك,جاي لدنيا حسبت روحك انت هو ربها</span
                      >
                      Your real life, turned into fake life<br />
                      Please take off the mask!<br />
                      Break it in half and throw it away<br />
                    </p>
                    <p>
                      Virus, scam, réseaux sociaux de merde<br />
                      Internet, Connexion, bienvenus
                    </p>
                    <p>
                      Je ne sais pas ce qui m'arrive<br />
                      Suis je toujours vivant?<br />
                      Tu Ne sais pas ce qui t’arrive<br />
                      Tu te crois toujours conscient
                    </p>
                    <p style="direction: rtl">
                      كلش تمسخير حسبت روحك حاجة,<br />
                      ماعلابالكش واش راهو صاري فالحقيقة,<br />
                      واش راهو صاري في هاذ الدنيا
                    </p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="wrap max-w-sm p-8 pb-10 pr-12">
          <div class="paper pb-8">
            <dl class="space-y-8">
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted">
                  Lyrics
                </dt>
                <dd class="flex-1 text-2xl">
                  <ul role="list">
                    <li class="flex items-center justify-between">
                      <div class="w-0 flex-1 flex items-center">
                        <span class="flex-shrink-0 text-gray-500 bg-yellow-100">
                          4
                        </span>
                        <span class="ml-2 flex-1 truncate redacted-script">
                          BANJO
                        </span>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div class="flex redacted-hover">
                <dt class="w-16 flex-shrink-0 text-sm font-medium redacted" />
                <dd class="flex-1 text-2xl space-y-8">
                  <div class="space-y-8">
                    <p>
                      Tu viens de la terre, sorti dans l’espace<br />
                      Parcourir galaxie, avec ton grand vaisseau<br />
                      Voir les colonies, en jouant du banjo<br />
                      Un voyage en musique, des notes en do
                    </p>
                    <p>
                      Un astronaute, dans les colonies spatiales qui joue du
                      banjo
                    </p>
                    <p>
                      Tu navigues dans l’espace, avec ton grand vaisseau<br />
                      Tu vas parfois loin, tu ne l’oublie jamais<br />
                      Tu le prend ou tu vas, c’est ton banjo fétiche<br />
                      Meme dans les colonies, il t’accompagne partout
                    </p>
                    <p>
                      Un astronaute, dans les colonies spatiales qui joue du
                      banjo
                    </p>
                    <p>
                      Banjo, Banjo, Banjo, Banjo<br />
                      Un, deux, trois, quatre, cinq, six, sept, huit
                    </p>
                    <p>
                      You play the Banjo, on the right tempo<br />
                      You are a hero, like a great maestro<br />
                      You play in space colonies, this is your priority<br />
                      Banjo maestro, banjo, banjo
                    </p>
                    <p>
                      Colonies spatiales, tu as mis ta combinaison<br />
                      Aventure, un astronaute<br />
                      Des notes en sanglot<br />
                      Colonies spatiales
                    </p>
                  </div>
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
