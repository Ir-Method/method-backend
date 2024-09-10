import { UserController } from "./controllers/users.controller";
import express, { Application, NextFunction, Request, Response } from "express";
import { container } from "./utils/inversify.config";
import "reflect-metadata"; // Make sure reflect-metadata is imported here

class App {
    private app: Application;
    private port: number;
    

    constructor(_port: number,controllers:any[]) {
        this.app = express();
        this.port = _port;
        this.initializeMiddlewares(); 
        this.bindRoutes(controllers); 
        this.listen(); 
    }

    private initializeMiddlewares = () => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    };

    private bindRoutes = (controllers:any[]) => {    
        controllers.forEach((controller) => {
            const instance = container.get(controller);
            const basePath = Reflect.getMetadata('path', controller);
    
            Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).forEach((methodName) => {
                const method = (instance as any)[methodName];
                const route = Reflect.getMetadata('route', method);
                const httpMethod = Reflect.getMetadata('method', method);
                const middlewares = Reflect.getMetadata('middlewares', method) || []; // Fetch middlewares
    
                if (route && httpMethod) {
                    console.log(`Binding route: [${httpMethod.toUpperCase()}] ${basePath}${route}`);
                    // Bind the route with middlewares and the route handler
                    (this.app as any)[httpMethod](
                        `${basePath}${route}`, 
                        ...middlewares, // Spread middlewares before the handler
                        (req: Request, res: Response, next: NextFunction) => method.call(instance, req, res, next)
                    );
                }
            });
        });
    };
    

    private listen = () => {
        this.app.listen(this.port, () => {
            console.log(`Application started on port: ${this.port}`);
        });
    };
}

export default App;