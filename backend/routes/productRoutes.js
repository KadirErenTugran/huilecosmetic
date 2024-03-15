import  Express, { Router }  from "express";
const router = Express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

router.get('/', asyncHandler(async (req,res)=>{
        const products = await Product.find({}); 
        res.json(products);
    }));
    
    router.get('/:id', asyncHandler(async (req,res)=>{
    const product= await Product.findById(req.params.id);
    if(product){
       return res.json(product);
    }
    else{
        res.status(404);
        res.json({message:'Product Not Found'});
    }    
    }));




export  default router;