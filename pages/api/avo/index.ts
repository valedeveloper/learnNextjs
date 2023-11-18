import { IncomingMessage, ServerResponse } from 'http';
import Avo from '../../../database/db';
0
const getAllAvos = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const avo = new Avo()
        const allAvos = await avo.getProduct()
        const quantityProducts = allAvos.length

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.end(JSON.stringify({ length: quantityProducts, data: allAvos }))


    } catch (e) {
        console.log(e);
        res.statusCode = 500
        res.end(JSON.stringify({
            length: 0, data: []
        }))

    }

}

export default getAllAvos