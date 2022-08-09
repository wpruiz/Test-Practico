"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.getItems = void 0;
const axios_1 = __importDefault(require("axios"));
const getItems = (req, res) => {
    axios_1.default.post(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
        .then((response) => {
        const responseProductDescription = response.data;
        const author = {
            name: "Wilson",
            lastname: "Ruiz"
        };
        const results = responseProductDescription.results.filter((item, key) => {
            return key < 4 && item;
        });
        const items = results.map((itemResults) => {
            const decimals = new Intl.NumberFormat().format(Number(itemResults.price));
            const price = {
                currency: `${itemResults.currency_id}`,
                amount: Number(itemResults.price),
                decimals: Number(decimals)
            };
            const item = {
                id: `${itemResults.id}`,
                title: `${itemResults.title}`,
                price: price,
                picture: JSON.stringify(itemResults.thumbnail),
                condition: `${itemResults.condition}`,
                free_shipping: itemResults.shipping.free_shipping,
            };
            const product = {
                item
            };
            return product;
        });
        let categories = [];
        responseProductDescription.filters.map((item) => {
            if (item.id === 'category') {
                categories.push(JSON.stringify(item.values));
            }
        });
        const products = {
            author,
            items,
            categories
        };
        res.json(products);
    }).catch(error => error);
};
exports.getItems = getItems;
const getItem = (req, res) => {
    axios_1.default.get(`https://api.mercadolibre.com/items/${req.params.id}`)
        .then((response) => {
        const responseProduct = response.data;
        axios_1.default.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
            .then((resp) => {
            const responseProductDescription = resp.data;
            const decimals = new Intl.NumberFormat().format(responseProduct.price);
            const author = {
                name: "Wilson",
                lastname: "Ruiz"
            };
            const price = {
                currency: `${responseProduct.currency_id}`,
                amount: Number(responseProduct.price),
                decimals: Number(decimals)
            };
            const item = {
                id: `${responseProduct.id}`,
                title: `${responseProduct.title}`,
                price: price,
                picture: JSON.stringify(responseProduct.pictures[0].url),
                condition: `${responseProduct.condition}`,
                free_shipping: responseProduct.shipping.free_shipping,
                sold_quantity: responseProduct.sold_quantity,
                description: responseProductDescription.plain_text
            };
            const product = {
                author,
                item
            };
            res.json(product);
        });
    }).catch(error => error);
};
exports.getItem = getItem;
//# sourceMappingURL=petitionsMeli.js.map