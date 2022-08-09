import { Request, Response } from "express"
import axios from "axios"    
import { Products, Product, Author, Item, Price } from "../interface/Response"


export const getItems = (req:Request, res: Response) => {
    axios.post(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then((response:any) => {
        const responseProductDescription = response.data
        const author:Author = {
            name: "Wilson",
            lastname: "Ruiz"
        }
        const results = responseProductDescription.results.filter((item:any, key:number) => {
            return key < 4 && item
        })

        const items = results.map((itemResults:any)=>{
            const decimals = new Intl.NumberFormat().format(Number(itemResults.price))
            const price:Price = {
                currency: `${itemResults.currency_id}`,
                amount: Number(itemResults.price),
                decimals: Number(decimals)
            }
            const item:Item ={
                id:            `${itemResults.id}`,
                title:         `${itemResults.title}`,
                price:         price,
                picture:       JSON.stringify(itemResults.thumbnail),
                condition:     `${itemResults.condition}`,
                free_shipping: itemResults.shipping.free_shipping,
            }    
            const product:Product = {
                item
            }
            return product
        })
        let categories:String[] = []
        responseProductDescription.filters.map((item:any) => {
            if(item.id === 'category'){
                categories.push(JSON.stringify(item.values))
            }
        })
        const products:Products = {
            author,
            items,
            categories
        }
        res.json(products)
    }).catch(error => error)
}

export const getItem = (req:Request, res: Response) => {
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    .then((response:any) => { 
        const responseProduct = response.data
        axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
        .then((resp:any) => {
            const responseProductDescription = resp.data
            const decimals = new Intl.NumberFormat().format(responseProduct.price)
            const author:Author = {
                name: "Wilson",
                lastname: "Ruiz"
            }
            const price:Price = {
                currency: `${responseProduct.currency_id}`,
                amount: Number(responseProduct.price),
                decimals : Number(decimals)
            }
            const item:Item ={
                id:            `${responseProduct.id}`,
                title:         `${responseProduct.title}`,
                price:         price,
                picture:       JSON.stringify(responseProduct.pictures[0].url),
                condition:     `${responseProduct.condition}`,
                free_shipping: responseProduct.shipping.free_shipping,
                sold_quantity: responseProduct.sold_quantity,
                description:   responseProductDescription.plain_text
            }    
            const product:Product = {
                author,
                item
            }
            res.json(product)
        })
    }).catch(error => error)
}
