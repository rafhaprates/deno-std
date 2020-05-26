import Aqua from "https://deno.land/x/aqua/aqua.ts";

const app = new Aqua(3000);
//crianção de rotas deno
app.get("/", (req) => {
    return "Hello, World!";
});

//criação de rotas deno
app.get("/perfil", (req) =>{
    return "Teste de perfil de GET"
});