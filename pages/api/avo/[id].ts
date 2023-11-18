import Product from "@/database/db";
import { NextApiRequest, NextApiResponse } from "next";

const getAvoDetails=async (req:NextApiRequest,res:NextApiResponse)=>{ 
    try {
        const product=new Product()
        const avoId=req.query.id as string

        const avo=await product.getProductById(avoId)

        res.status(200).json(avo)
        
    } catch (e) {
        console.log(e);
        res.status(404).end()
        
        
    }
}
export default getAvoDetails