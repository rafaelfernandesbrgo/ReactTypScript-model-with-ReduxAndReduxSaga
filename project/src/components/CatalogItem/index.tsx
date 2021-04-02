import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IState } from '../../store';
import { Container } from './styles';


interface CatalogItemProps{
    product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product}) => {
  const dispatch = useDispatch();


  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedSockCheck.includes(product.id) })

  const handleAddProductToCart = useCallback( ()=>{
    dispatch(addProductToCartRequest(product));
    },[dispatch, product])



  return (
    <Container failedStockCheck={hasFailedStockCheck} title={hasFailedStockCheck? 'No Stock' : 'Available'}>
        <strong>{product.title}</strong> 
        <span>R$ {product.price.toFixed(2)}</span> 
        <button type='button'onClick={handleAddProductToCart}>Shop</button>

    </Container>
  );
}

export default CatalogItem;