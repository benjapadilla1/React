import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ItemListContainer from '../components/ItemList/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import CartWidget from '../components/CartWidget';
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route element={<Layout />}>
                        <Route path="/" index element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart/" element={<CartWidget />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router