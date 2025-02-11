import { React, useContext, useState } from 'react';
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";
import { ProductContext } from "../../pages/context";
import ProductCard from '../../components/productCard/productCard';
import Footer from "../../components/footer/footer";
import "./catalog.css";

const Catalog = () => {
    const { allProducts } = useContext(ProductContext);
    const [search, setSearch] = useState('');

     
    return (
        <div className='catalog'>
            <div className="catalogConatiner">
                <div className="catalog">
                    <div className="catalogTitle">
                        <h1 className='title'>CATALOG<span><PiShoppingBagOpenFill size={25}/></span></h1>
                    </div>
                    <div className="searchBar">
                        <LuSearch className="searchIcon" size={32} /><input type="text" className="searchInput" onChange={(e)=> setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="allProducts">
                    <div className="phones">
                        <div className="categoryTitleTab">
                            <h1 className="productCategoryTitle">Phones</h1>
                        </div>
                        <div className="productItems">
                            {allProducts && allProducts.filter((item) => { return search.toLowerCase === ''? item : item.name.toLowerCase().includes(search) }).map((product) => {
                                if(product.category === "phone"){
                                    //console.log(product);
                                return(<ProductCard key={product.product_id} data={product} />)
                            }
                
                        })}
                        </div>
                    </div>
                    <div className="laptops">
                        <div className="categoryTitleTab">
                            <h1 className="productCategoryTitle">Laptops</h1>
                        </div>
                        <div className="productItems">
                            {allProducts && allProducts.filter((item) => { return search.toLowerCase === ''? item : item.name.toLowerCase().includes(search) }).map((product) => {
                                if(product.category === "laptop"){
                                    // console.log(product);
                                return(<ProductCard key={product.product_id} data={product} />)
                            }
                
                        })}
                        </div>
                    </div>
                    <div className="accessories">
                        <div className="categoryTitleTab">
                            <h1 className="productCategoryTitle">Accessories</h1>
                        </div>
                        <div className="productItems">
                            {allProducts && allProducts.filter((item) => { return search.toLowerCase === ''? item : item.name.toLowerCase().includes(search) }).map((product) => {
                                if(product.category === "accessories"){
                                    // console.log(product);
                                return(<ProductCard key={product.product_id} data={product} />)
                            }
                
                        })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Catalog;
