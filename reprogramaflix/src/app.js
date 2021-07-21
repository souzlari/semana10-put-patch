const express = require("express"); // importando express
const app = express(); // instanciando o express para acessar as funcionalidades contidas nele
const cors = require("cors");

// chama as rotas
const movies = require("./routes/moviesRoutes");

app.use(cors());
app.use(express.json());

// definir rota padrão
app.use("/filmes", movies);

module.exports = app