addEventListener("fetch", (event) => {
  setTimeout(() => {
      globalThis.count = (globalThis.count ?? 0) + 1;
      const response = new Response(globalThis.count.toString(), {
        headers: { "content-type": "text/plain" },
      });
      event.respondWith(response);
  }, 2000);
});
