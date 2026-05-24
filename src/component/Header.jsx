import React from 'react'
const Header = ({ selectItems, setSelectItems, productItems }) => {

    return (
        <header className='header'>
            <h1>Product.Web</h1>

            <select className='selectBox' value={selectItems}
                onChange={(e) => { setSelectItems(e.target.value) }}>

                <option value="">ALL</option>
                {productItems?.map((eachItems) => {
                    return (
                        <option key={eachItems} value={eachItems}>
                            {eachItems}
                        </option>
                    );
                })}
            </select>

        </header>
    )
}

export default Header;