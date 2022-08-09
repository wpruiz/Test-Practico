import { useSearchParams } from "react-router-dom"
import { Pettions } from "../shared/services/Petitions";
import { useEffect, useState } from 'react';
import Product from '../components/product/Product';
import ComponentSearch from "../components/search/ComponentSearch";


const SearchList = () => {
    const [ searchParams ] = useSearchParams()
    const [ searchResultItems, setSearchResultItems ] = useState([])
    const [ searchResultStatus, setSearchResultStatus ] = useState(Boolean)
    let SearchWord = searchParams.has('search') ? searchParams.get('search') : ''

    useEffect(()=>{
        Pettions(`?q=${SearchWord}`)
        .then((res:any) =>{
            let result:any = res.data
            setSearchResultItems(result.items)
            setSearchResultStatus(true)
        }).catch( error => {
            setSearchResultStatus(false)
            console.log(error)
        })
    }, [SearchWord])

    return (
        <>
            < ComponentSearch />
            <div className="w-full flex justify-center">
                <div className="container lg:max-w-[1180px] bg-white">
                    <div className="breadcrumbs bg-grey-three-ml">
                        <h3 className="text-sm-ml font-normal text-grey-two-ml py-[16px]">Inicio  &gt; Lista &gt;  {SearchWord}</h3>
                    </div>
                    { searchResultItems.length && searchResultStatus ? 
                        <div className="">
                            { searchResultItems.map(( itemResult:any, key:number)=>{
                                return (
                                    < Product 
                                        key={ key }
                                        product = { itemResult.item }
                                    />
                                )
                            }) }
                        </div>
                    : <p className="bg-grey-three-ml" >No se han encuentrado resultados</p>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchList