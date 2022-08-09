import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconSearch from '/assets/ic_Search.png'
import iconLogo from '/assets/Logo_ML.png'

const ComponentSearch = () => {
    const navigate = useNavigate()
    const [searchWord, setSearchWord] = useState('')

    const handleInput = (input:any) => {
        let { value } = input.target
        setSearchWord(value)
    }
    const handleSubmit = (form:any) => {
        form.preventDefault()
        navigate(`/items?search=${searchWord}`)
    }
    return (
        <>
            <header className="bg-yellow-ml w-full justify-center flex">
                <div className="flex justify-center container lg:max-w-[1180px]">
                    <div className="input-group flex m-3 container items-center">
                        <div className='conteiner px-5'>
                            <img src={iconLogo} alt=""/>
                        </div>
                        <form onSubmit = { handleSubmit } className='flex w-[100%]'>
                            <input type="text" className="form-control w-full pl-4 py-1.5 text-md-ml font-normal text-grey-two-ml bg-white border border-solid border-grey-three-ml rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-grey-three-ml focus:outline-none" placeholder="Nunca dejes de buscar" aria-label="Search" aria-describedby="button-search" name="search" onChange={ handleInput } />
                            <button className="btn px-3 bg-grey-three-ml text-white font-medium text-xs rounded-r  hover:bg-grey-two-ml hover:shadow-lg focus:bg-grey-two-ml  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grey-two-ml active:shadow-lg transition duration-150 ease-in-out flex items-center" id="button-search" type="submit">
                                <img src={iconSearch} alt=""/>
                            </button >
                        </form>
                    </div>
                </div>
            </header>
 
        </>
    )
}

export default ComponentSearch
