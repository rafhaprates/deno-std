import { serve } from "https://deno.land/std/http/server.ts";

const srv = serve({ port: 3333});

//console.log("http://localhost:3333");

for await (const req of srv) {
    req.respond({ body: "Hello deno!\n Olá mundão"});
}