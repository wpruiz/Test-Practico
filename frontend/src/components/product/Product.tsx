import { Link } from 'react-router-dom';
import  iconShipping  from '/assets/ic_shipping@2x.png.png'

const Product = ( props:any ) => {
    let { condition, free_shipping, id:idProduct, price, title } = props.product
    let picture =  props.product.picture.replace('"', '')
    return (
        <div className="w-full flex justify-center p-[16px]">
            <div className="container">
                <Link to={`/items/${idProduct}`} className="sm:flex w-full">
                    <div className='py-[16px] sm:flex sm:w-[75%]'>
                        <img src={ picture } alt="" className='min-w-[180px] px-[16px] rounded-[4px] mx-auto sm:m-0'/>
                        <div className=''>
                            <div className='flex items-center py-[16px]'>
                                <h4 className='pr-2 text-lg-ml font-semibold text-black-ml'>$ {price.decimals} </h4>
                                { free_shipping ? <img src={iconShipping} alt="" className='w-[18px] h-[18px]' />  : <img src="" alt="" /> }
                            </div>
                            <p className='text-md-ml font-semibold text-black-ml'>{title}</p>
                        </div>
                    </div>
                    <div className='py-[16px] w-[20%] flex items-center'>
                        <p>{condition}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Product