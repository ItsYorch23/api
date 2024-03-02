import express from "express";
import routes from "../routes/index.routes.js";
import { env } from "./default.js"

export default class Server{
    
    constructor(){
        this.app = express();
        this.port = env.port;
    }

    connectionsDB(){

    }

    middlewares(){

    }

    routes(){
        this.app.use(routes)
    }

    runServer(){
        this.app.listen(this.port, () =>{
            console.log(`Estoy por el puerto ${this.port}`);
        })

    }

    load(){
        this.connectionsDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}