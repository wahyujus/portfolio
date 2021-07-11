'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "faac5a94064d654c54e313e1169ae85c",
"/": "faac5a94064d654c54e313e1169ae85c",
"main.dart.js": "1bd25950ffa56e28a15015a68f8e94ee",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "68b64a2261ec5b2ac2609a346ed0333f",
".git/objects/0c/379a066acd46bcbebfce5a66ac9a04aa0b0b7f": "9864842aa70da9b512b12cbb3011d63d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/394b146a57d327af7e4f3d0d49b4438b9c06b8": "9da7223556aa8b413c3581ffe216d338",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/5f/d6084e36174bc46bd1f2f44b9158acd5911850": "7c315db5c858a02345b34c4e7e9e3bf6",
".git/objects/df/8146348913ef5d004a36cef815f512c0ab2a06": "e84f97287fcbfe49b96ef9ee1a4dba8b",
".git/objects/da/f66e5e060c2473238f1c8e4d2a4292220f25f4": "618b199f60ac61fb22ef3508e56a4517",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/30d1177e6873ad1a426908450e92c0e083cf70": "a0d572ea1ad0a6c8b0bb4bcf702c450f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/e7299b295bea2cfd86f6d1b0b01d1ea966e38a": "323bf069c92289fd876464b3045a6cac",
".git/objects/c7/29c023a6eb20cf59351a974a1fa1b757133384": "b246466b69765c70dad08b05ee60d2f9",
".git/objects/f5/82c15c169c387a2cdbe8a3bd1a486d926ea66d": "60e0bd4483f9af0133e0290b75023f66",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/pack/pack-e50af43fbb11a90fe34daf71214f8c5db4af1c6b.pack": "d1646b32295a939da19935855d8490ee",
".git/objects/pack/pack-e50af43fbb11a90fe34daf71214f8c5db4af1c6b.idx": "11a9f350fbcc7b04bd229327a0c94596",
".git/objects/80/780242a39152106daa2e89fa20e69681f39e5a": "35e76ae2feafb489dec98395c2dd7288",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/7b/aba5edb1031227cf9bfea8b3da79905e31b745": "5cd6e47f8d363ab5e5ec03a1a8629646",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/e48783dc7399d16ad26ff240891702fb6ee05b": "f47ba2312483daad31c2bc33688bbdac",
".git/objects/3a/8a750b8f6f5aafc09295edca81028edba3e01e": "c90f7f13d79601abb67bac604ff3f3be",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/5e/f6eec329aab459e0568758f9a6a1dddc6f3e83": "96af82d0b736fd00c5db93bbb9f6cead",
".git/objects/5b/b072940d7fcb4ab6bac4f6d0f510bb66fcde27": "0b2b63fe0586f89264551aea5dab3d63",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/6d/a2ad5435264b5878e935658a571ce95e4752e0": "4d0fedc711a143cda4b01e9e2c6bef9d",
".git/objects/0a/2a26efb4d5bc2410721efdcf718969e93af6d9": "1e0f36676cf05ca9ccd2e6d46da2d1a4",
".git/objects/90/66cdf95b2a30926919efce58775be4001a4c9a": "ea06d6eb39b782a6d12e4e4e0f94b811",
".git/objects/ba/eceac7dd62ca143b7ba8c4df703bdfc97e17b9": "b8e4fa8d4faf75ff0b5ea3fff96d0b85",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/65070331c4489fe28a66fc54e61400a0372aa4": "69b66514c84337ca12a9f59b28473836",
".git/objects/e1/2774be314e3343b9b19514bf2010805918e306": "45d2e4baa179b5e22fb3d4c3550dc9d3",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/3ca88321d4a9ed708353cbc5051ff75923a95f": "09f7eeb806e966a963a3ef6a94dbe2ca",
".git/objects/1b/504bb59226441a4a61a32693542ff3c3261617": "99ff886003f7ce411b27516b3259eacb",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/23/19dfbe30a804f370ba77d5138d69431cadfdfe": "948f083de3ab754396aaf5241daaa227",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/40/81bff8eca352fc2b096481042d2f50e6a4a3cc": "0b3cffea5496548188f2afbc3a466db0",
".git/objects/40/229531308b5bbcf5a8305cdb1d36a4e7ddf0f4": "3236a149be6f3d38367af14a6ac1727f",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/7a/98a2ff96d35c782ad7f3eddc92ed20f20d15bc": "ed93e8dba79f6a380317429637a389ba",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8173c8164eae425c9df17100f85a6c7a",
".git/logs/refs/heads/main": "8173c8164eae425c9df17100f85a6c7a",
".git/logs/refs/remotes/origin/HEAD": "cbef2d0e9e420778532b47bab9d4945f",
".git/logs/refs/remotes/origin/main": "babdd64f369b2edd55627e55a2adaa73",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8f82e82f6514c24ce3c7306d3a82fbe9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8f82e82f6514c24ce3c7306d3a82fbe9",
".git/index": "4a70d962d4db1f2ee7fdcbbabf32a5cb",
".git/packed-refs": "2a72f6b7299abc6ec6fdfbe25de42a61",
".git/COMMIT_EDITMSG": "193666aa604b49b6fec9affbe00265f8",
".git/FETCH_HEAD": "e8429694059a8c422268b970c6a814dd",
"assets/AssetManifest.json": "4efdf7f537fa388803c8cd4c2619d6eb",
"assets/NOTICES": "51f78d5390e5133ed34d0719286ed939",
"assets/FontManifest.json": "e0901ea192629a2b189ae7204fe9f39d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/Valorant-Font.ttf": "e7322a6673613ab13604fadda3d20e56",
"assets/fonts/Minecrafter.Alt.ttf": "dc7947b63602675ec87b023cfc35d028",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/picture.png": "8bbbfe89de07e386df492d676f5e4ad8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
