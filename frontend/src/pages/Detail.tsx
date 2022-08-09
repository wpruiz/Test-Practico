import { useLocation, useParams, useSearchParams } from "react-router-dom"
import { Pettions } from "../shared/services/Petitions";
import { useEffect, useState, } from 'react';
import ComponentSearch from "../components/search/ComponentSearch";
import { Product } from "../interface/Product";

const product:Product = {
        id: "",
        title: "",
        price: {
                currency: "",
                amount:   0,
                decimals: 0,
            },
        picture: "",
        condition: "",
        free_shipping: true,
        sold_quantity: 0,
        description: ""
}

const Detail = () => {
    const [ searchResultItem, setSearchResultItem ] = useState(product)
    const [ searchResultStatus, setSearchResultStatus ] = useState(Boolean)
    let SearchId = useParams().id || ""
    useEffect(()=>{
        Pettions(`/${SearchId}`)
        .then((res:any) =>{
            if(res.data){
                const { item } = res.data
                setSearchResultItem(item)
                setSearchResultStatus(true)
            }
        }).catch(error => {
            setSearchResultStatus(false)
            console.log(error)
        })

    }, [ ])
    return (
        <>
            < ComponentSearch />
            <div className="w-full flex justify-center">
                <div className="container lg:max-w-[1180px] bg-white">
                    <div className="breadcrumbs bg-grey-three-ml">
                        <h3 className="text-sm-ml font-normal text-grey-two-ml py-[16px]">Inicio &gt; Detalle &gt; {searchResultItem.title}</h3>
                    </div>
                    {
                        searchResultStatus ?
                            <div className="w-full flex justify-center p-[16px]">
                                <div className="container ">
                                    <div className='py-[16px] lg:flex'>
                                        <div className="flex justify-center md:min-w-[680px]">
                                            <img src={ searchResultItem.picture.replace('"', '') } alt="" className='w-auto px-[16px]'/>
                                        </div>
                                        <div className='pt-[32px]'>
                                            <p className="text-xs-ml font-normal text-black-ml ">{searchResultItem.condition}</p>
                                            <p className='text-lg-ml font-bold text-black-ml py-[16px]'>{searchResultItem.title}</p>
                                            <div className='flex items-center py-[16px]'>
                                                <h4 className='text-xl-ml font-normal text-black-ml'>$ {searchResultItem.price.decimals} </h4>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button type="button" className="inline-block px-20 py-2.5 bg-blue-ml text-white font-medium text-md-ml leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='lg:w-[680px] pl-[32px]'>
                                        <h3 className="text-[28px] font-bold text-black-ml py-[32px]">Descripción del producto</h3>
                                        <p className="text-sm-ml font-normal text-grey-two-ml pb-[32px]">{searchResultItem.description}</p>
                                    </div>
                                </div>
                            </div>
                        : 
                        <p className="bg-grey-three-ml" >No se han encuentrado resultados</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Detail