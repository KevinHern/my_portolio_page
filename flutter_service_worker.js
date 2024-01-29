'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f4749fe08ecf663a6b9f3c1cd7af1f4",
"assets/AssetManifest.bin.json": "43b4c060baddde2d6ad1f4fe355949a1",
"assets/AssetManifest.json": "5bfd3bea0f5f683e3176145f483a9a1c",
"assets/assets/icons_96p/placeholder.png": "0c9fa0dd5faba768bdd2a171e77015db",
"assets/assets/icons_96p/professional/brainstorm.png": "0d66a976b7190a4c1031162f50424018",
"assets/assets/icons_96p/professional/coaching.png": "bff0e823c9aae1880ff7984d0b873e40",
"assets/assets/icons_96p/professional/critical_thinking.png": "d774aa68ac88e0c8c84a0bbc07d4d941",
"assets/assets/icons_96p/professional/document.png": "0a2fb893b04e8217892d160e83977388",
"assets/assets/icons_96p/professional/gears1.png": "cde59a9d0aeaaafb5c1cbb175df1b7fd",
"assets/assets/icons_96p/professional/gears2.png": "a28618b9aea64854412b728d7b63f6d9",
"assets/assets/icons_96p/professional/google.png": "bab45ccc3802621fd46b73784bdfbfc2",
"assets/assets/icons_96p/professional/graph.png": "dbbd03c9ccb88d85729e572ed329ef70",
"assets/assets/icons_96p/professional/layout.png": "dd2b7b7a65ffd563a59e151f7b288f78",
"assets/assets/icons_96p/professional/letter.png": "67ae284af0ab3d73d4e568cea03e981e",
"assets/assets/icons_96p/professional/modeling.png": "2a0da2265a5e9017bedfb6dd72c576cd",
"assets/assets/icons_96p/professional/modules.png": "fd8e871038f395e59268c6109417ac9c",
"assets/assets/icons_96p/professional/project_management.png": "62f7e95d1366272cabfe5924f31bb640",
"assets/assets/icons_96p/professional/prototype.png": "42dff55cf74dc06bdc350a6b9498a9bd",
"assets/assets/icons_96p/professional/public_speech.png": "e53a376a870b651e68c28fdc6773ec79",
"assets/assets/icons_96p/professional/refactor.png": "957dcbe9edac75371327c985f76f2b37",
"assets/assets/icons_96p/professional/sort.png": "633925f5c38f9cb699974b93433588c0",
"assets/assets/icons_96p/professional/structure.png": "d1bf82f970d8311a1ac6723f15ae99e4",
"assets/assets/icons_96p/professional/teaching.png": "b76a5319ff288e4ac03902b054816f62",
"assets/assets/icons_96p/professional/time.png": "c090ef5336e082780bb570abaec84e98",
"assets/assets/icons_96p/professional/translate.png": "bdc30cd13be3651de8f1cf5b636f8b4c",
"assets/assets/icons_96p/professional/ui.png": "a14adc6a0c5e9eafc04fdeff1afb6dcb",
"assets/assets/icons_96p/professional/ux.png": "ad3e7f5849f91e5334b36fb75ec196fb",
"assets/assets/icons_96p/tech/arduino.png": "af6b9e9ff67767158106123a583c3913",
"assets/assets/icons_96p/tech/assembly.png": "5c393784da7fa547e0aca08cc2fa0fd7",
"assets/assets/icons_96p/tech/aws.png": "5d50a804509e53b35dd83d20dba4863d",
"assets/assets/icons_96p/tech/c.png": "90262f3e9b0ff7abea1bb0c7709aa64e",
"assets/assets/icons_96p/tech/cloud_firestore.png": "04bf78858e593b6125838f63685bc694",
"assets/assets/icons_96p/tech/csharp.png": "41433356274039312fa13737f41387d2",
"assets/assets/icons_96p/tech/docker.png": "4eebd6903b352604ae9b7630619114af",
"assets/assets/icons_96p/tech/expressjs.png": "24d907d9608e60ea25eda73babab496f",
"assets/assets/icons_96p/tech/figma.png": "7fcfbdd33d2927d1b7af0ddbb290b6df",
"assets/assets/icons_96p/tech/firebase.png": "6bd7e9f22b0d7b5762a180500765e253",
"assets/assets/icons_96p/tech/flask.png": "01f4764999e1ce99dafc5aca4e374d13",
"assets/assets/icons_96p/tech/flutter.png": "46971d9c5b701471f56a732e32fdf697",
"assets/assets/icons_96p/tech/github.png": "6b8eddd01fa6cd959bdc8f48c650c141",
"assets/assets/icons_96p/tech/google_colab.png": "090790ce41b304b21d42d29bc05f02fe",
"assets/assets/icons_96p/tech/java.png": "546b099cd11e39c238667c1663ad8f38",
"assets/assets/icons_96p/tech/javascript.png": "55ef6ce22906e3976a36567ce9fb37bb",
"assets/assets/icons_96p/tech/micropython.png": "d78675bd2cd3791b904b388d552ca7d0",
"assets/assets/icons_96p/tech/mongodb.png": "7954d7b7fd12a7e441e53f306c28b590",
"assets/assets/icons_96p/tech/mysql.png": "4b1ce9146164453a4d9c57d87e9dfed5",
"assets/assets/icons_96p/tech/nodejs.png": "010cb2da4056740d02f38aeaccb432e3",
"assets/assets/icons_96p/tech/openai.png": "f3fa10c08192b29ca9b5a0d41b51882c",
"assets/assets/icons_96p/tech/opencv.png": "437c5025a29312d966cc344db2231db7",
"assets/assets/icons_96p/tech/pandas.png": "760d0d0dffc32b86fd3a8d51a699414d",
"assets/assets/icons_96p/tech/php.png": "185ad0cbd22e750c5136e4d6550a36a3",
"assets/assets/icons_96p/tech/postgresql.png": "0d6c9cdf3c65572ef3a0a898dbca654c",
"assets/assets/icons_96p/tech/python.png": "22c9bdd98def310a20ea27d0ae0895cc",
"assets/assets/icons_96p/tech/pytorch.png": "bec07d8225e0497e0a1997242de88797",
"assets/assets/icons_96p/tech/r.png": "aa957bd81b06a4b83888b095e1db9564",
"assets/assets/icons_96p/tech/sql.png": "d692c128f6dac71d942c0d23ff6c7f4e",
"assets/assets/icons_96p/tech/tensorflow.png": "b951fc9ef4076e9758f54f302021bc10",
"assets/assets/imgs/pfp.png": "495d50c4f830a69878788ab7474d171f",
"assets/assets/jsons/conferences.json": "42f8d889d9b8413a73d42d0cfeeabe56",
"assets/assets/jsons/dummy_json.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/jsons/experience_roadmap.json": "048f5f75e4fb5b2701c0b424b51881c8",
"assets/assets/jsons/professional_skills.json": "090b4499ba723046c42d7ea660c3d395",
"assets/assets/jsons/projects.json": "6e028fe7d43d9d2555d19584e52bd50b",
"assets/assets/jsons/tech_skills.json": "7d399f284104bcfc02cc71504c3464aa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "892c733748652402d350db424481080c",
"assets/NOTICES": "e9d642df3024494de8da82c5b1e95bf5",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "22a762f3b6332b1e6653bd94c6610a69",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e163297d4d8d9cc0e92bb06d79b5d820",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/favicon-16x16.png": "e163297d4d8d9cc0e92bb06d79b5d820",
"icons/favicon-32x32.png": "db08f4a91c0f1f31053432424969241b",
"icons/favicon-96x96.png": "52aa425db723be39eddc070448e090b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01a266893c783d8e974815f921518602",
"/": "01a266893c783d8e974815f921518602",
"main.dart.js": "091a13ef14f820eae843bdd143d79cc1",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
