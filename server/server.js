import Express from "express";
import Cors from "cors";
import Pg from "pg";


const app = Express();
const port = 3000;
const db = new Pg.Client({
    user: "postgres",
    host: "localhost",
    database: "flowtech",
    password:"Subm@rine77",
    port: 5432
});
app.use(Cors());
app.use(Express.json())
db.connect();

app.get("/", async (req,res) => {
    try{
        const result = await db.query("SELECT * FROM products LIMIT 8");
        res.json(result.rows);
    }catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})

app.get("/allProducts", async (req,res) => {
    try{
        const result = await db.query("SELECT * FROM products");
        res.json(result.rows);
    }catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})

app.listen(port, () => {
    console.log("we are listening")
});