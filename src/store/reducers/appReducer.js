import StockActions from './../actions/inventartyActions';

const int_state = { 
    
};
function appReducer (state = int_state, action) {
    switch (action.type){

      case StockActions.AddStoreRequestSuccess: {
      return  Object.assign({}, state, { store: action.data });
      
    }
      case StockActions.AddProductRequestSuccess: {
      return  Object.assign({}, state, { product: action.data });
    }
    
    case StockActions.AddSaleRequestSuccess: {
      return Object.assign({}, state, { sale: action.data });
  }

    
   case StockActions.AddPurchaseRequestSuccess: {
      return Object.assign({}, state, {SaleData: action.data})
    }
   case StockActions.LoadProductRequestSuccess:{
     return Object.assign({}, state,{productData: action.data})
   }
   
    case StockActions.LoadStoreRequestSuccess :{
      return Object.assign({},state,{storeData: action.data}  )
    }
    case StockActions.StockRequestSuccess: {
     return Object.assign({}, state, {stock: action.data });
   }
   case StockActions.PurchaseViewRequestSuccess: {
     return Object.assign({}, state, {purchase: action.data });
   }
   case StockActions.ViewSaleRequestSuccess: {
     return Object.assign({}, state, {Sale: action.data });
   }
   case StockActions.ViewPurchaseRequestSuccess: {
     return Object.assign({}, state, {purchase: action.data });
   }
        default:
      return state;
    }
    
}  

export default appReducer;
