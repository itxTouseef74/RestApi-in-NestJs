import { NestMiddleware  , Injectable} from "@nestjs/common";
import { NextFunction ,  Request ,  Response } from "express";
 
@Injectable()
 export class BookMiddleware implements NestMiddleware {
    use (req: Request, res : Response , next: NextFunction){
        console.log("class based BookMiddleware ");
        next();

    }
 }