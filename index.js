addEventListener("fetch", (event) => {
  while(true){}
  globalThis.count = (globalThis.count ?? 0) + 1;
  const response = new Response(globalThis.count.toString(), {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
