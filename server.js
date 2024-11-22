import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {
        id: 1,
        descricao: "Foto de teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/300"
    },
    {
        id: 3,
        descricao: "Paisagem com um gato",
        imagem: "https://picsum.photos/id/237/400/300"
    },
    {
        id: 4,
        descricao: "Gato preguiçoso tomando sol",
        imagem: "https://source.unsplash.com/random/400x300/?cat,sun"
    },
    {
        id: 5,
        descricao: "Gatinho fofo",
        imagem: "https://loremflickr.com/400/300/kitten"
    },
    {
        id: 6,
        descricao: "Gato curioso",
        imagem: "https://placeimg.com/400/300/animals"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

