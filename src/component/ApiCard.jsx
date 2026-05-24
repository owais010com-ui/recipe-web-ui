
import React from 'react'

const ApiCard = ({ product }) => {

    return (
        <div className='card'>

            <div className='imgBox'>
                <img src={product?.images?.[0]} alt="" />
            </div>

            <div className='cardContent'>

                <h2>{product.title}</h2>

                <p>
                    {product.description.slice(0, 75)}...
                </p>

                <div className='bottom'>
                    <span className='price'>
                        ${product.price}
                    </span>

                    <button className='buyBtn'>
                        Buy Now
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ApiCard