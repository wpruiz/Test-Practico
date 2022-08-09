import express, { Application } from 'express'
import itemRoutes from '../routes/petitionsMeli'
import cors from 'cors'

class Server {

    private app:Application
    private port:string
    private apiPaths = {
        path: '/api',
    }
    
    constructor(){
        this.app = express()
        this.app.use(cors())
        this.port = process.env.PORT || '8000'
        this.routes()
    }
    
    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.apiPaths.path, itemRoutes )
    }

    listen(){
        this.app.listen(this.port, ()=>{ 
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }

}

export default Server