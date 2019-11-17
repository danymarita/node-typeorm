import { Repository, getConnection } from "typeorm";
import Author from "./entity/Author";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { NextFunction } from "connect";


let initialized = false;
let authorRepository: Repository<Author>;

const initialize = () => {
    initialized = true;
    const connection = getConnection();
    authorRepository = connection.getRepository(Author);
}

export const readAuthors = async (_: Request, res: Response, next: NextFunction) => {
    if(!initialized){
        initialize();
    }

    try{
        const authors = await authorRepository.find({relations: ['todos']});
        res.send(authors);
    }catch(error){
        console.log(error);
    }
}