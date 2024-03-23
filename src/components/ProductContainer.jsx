import React from 'react'
import MainSection from './MainSection'
import { useSelector } from 'react-redux'

const ProductContainer = () => {

    const { isError, isLoading, isSuccess, message, products } = useSelector((state) => state.product)

    if (isLoading) {
        return (
            <div className="container">
                <h1 className='text-center text-yellow-400'>Loading...</h1>
            </div>
        )
    }



    return (
        <>
            <div className="container mt-8 w-[100%] flex flex-wrap justify-around gap-3 ">
                {
                    products?.map((product) => <MainSection key={product.id} product={product} />)
                }
            </div>
        </>
    )
}

export default ProductContainer