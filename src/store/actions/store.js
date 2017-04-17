import StockActions from './inventartyActions';
import * as fbConfig from '../../firebaseConfig/config';



 // // / // // //  Adding Store //   // //  // // // // // 
export function storeRequest(StoreData) {
    return dispatch => {
        dispatch(addStoreRequest());
        return fbConfig.database.ref('/Stores').push(StoreData).then((data) => {
           alert("Store Created Successfully .");
            dispatch(addStoreRequestSuccess(data));

        })
    }
}


function addStoreRequest() {
    return {
        type: StockActions.AddStoreRequest
    };
}

function addStoreRequestSuccess(data) {
    return {
        type: StockActions.AddStoreRequestSuccess,
        data
    };
}

// function addStoreRequestFail() {
//     return {
//         type: StockActions.AddStoreRequestFail
//     };
// }

 // // / // // //  Adding Product //   // //  // // // // // 
 
export function productRequest(ProductData) {
    console.log("ProductData",ProductData);
    return dispatch => {
        dispatch(addProductRequest());
        return fbConfig.database.ref('/Products').push(ProductData).then((data) => {
            alert(" Product Created Successfully.");
            dispatch(addProductRequestSuccess(data));

        })
    }
}
function addProductRequest() {
    return {
        type: StockActions.AddProductRequest
    };
}

function addProductRequestSuccess(data) {
    return {
        type: StockActions.AddProductRequestSuccess,
        data
    };
}

// function addProductRequestFail() {
//     return {
//         type: StockActions.AddProductRequestFail
//     };
// }

 // // / // // //  View Stock //   // //  // // // // // 
 ///
export function stockRequest(viewStockData) {
    return dispatch => {
        dispatch(addStocktRequest());
        return fbConfig.database.ref('/Products').once('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                }else{
                    todo.push(innerTodo);
                }
            })
            dispatch(addStockRequestSuccess(todo))
        });
    }
}

function addStocktRequest(){
    return{
        type : StockActions.StockRequest
    };
}
function addStockRequestSuccess(data){
    return{
        type: StockActions.StockRequestSuccess,
        data
    };
}

 // // / // // //  Adding Sale //   // //  // // // // // 
export function addSaleRequest(ProductData) {
    return dispatch => {
        dispatch(AddSaleRequest());
        return fbConfig.database.ref('/Sale').push(ProductData).then((data)=>{
            return fbConfig.database.ref('/Products/' + ProductData.productId).once('value',snap=>{
                if(snap.val().quantity < ProductData.Quantity){
                    alert("Request Fail ,Item Not Available To Purchase");
                     dispatch(addSaleRequestFail());
                }
                else 
                {
                     var total = {
                    quantity : parseInt(snap.val().quantity) - parseInt(ProductData.Quantity),
                    store : ProductData.store,
                    Unit : ProductData.Unit,
                    saleVolume : parseInt(snap.val().quantity) * parseInt(ProductData.Unit),
                }
                console.log("sale ki quantity" , total.saleVolume)
                return fbConfig.database.ref('/Products/' + ProductData.productId).update(total,(done)=>{
                    alert("Sale Successfully Added.");
                   dispatch(addSaleRequestSuccess(data));
                 })
                }
                 
            })
           
        })
    }
}

function AddSaleRequest() {
    return {
        type: StockActions.AddSaleRequest
    };
}

function addSaleRequestSuccess(data) {
    return {
        type: StockActions.AddSaleRequestSuccess,
        data
    };
}
function addSaleRequestFail() {
    return {
        type: StockActions.AddSaleRequestFail,
        
    };
}
 
  // // / // // //  Adding Purchase //   // //  // // // // // 

   export function addPurchaseRequest(PurchaseData) {
    return dispatch => {
        dispatch(AddPurchaseRequest());
    
        return fbConfig.database.ref('/Purchase').push(PurchaseData).then((data)=>{
           
             return fbConfig.database.ref('/Products/' + PurchaseData.productId).once('value' , snap=>{ 
                    var total = {
                    quantity : parseInt(snap.val().quantity) + parseInt(PurchaseData.Quantity),
                    store : PurchaseData.store,
                    PurchasesDate : PurchaseData.PurchasesDate,
                    Unit : PurchaseData.Unit,
                    saleVolume : parseInt(snap.val().quantity+1) * parseInt(PurchaseData.Unit),
                }
               console.log("Purchase Data" , total.quantity)
               return fbConfig.database.ref('/Products/' + PurchaseData.productId).update(total,(done)=>{
                     alert("Successfully Added.")
                   dispatch(addPurchaseRequestSuccess(data));
                 })
               })       
        })
    }
}

function AddPurchaseRequest() {
    return {
        type: StockActions.AddPurchaseRequest
    };  
}

function addPurchaseRequestSuccess(data) {
    return {
        type: StockActions.AddPurchaseRequestSuccess,
        data
    };
}

///////loadProductRequest//////

export function loadProductRequest(StoreData) {
    console.log("StoreData Firebase Wala ", StoreData)
    return dispatch => {
        dispatch(LoadProductRequest());
        return fbConfig.database.ref('/Products').once('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                }else{
                    todo.push(innerTodo);
                }
            })
            dispatch(LoadProductRequestSuccess(todo))
        });
    }
}

function LoadProductRequest() {
    return {
        type: StockActions.LoadProductRequest
    };
}

function LoadProductRequestSuccess(data) {
    return {
        type: StockActions.LoadProductRequestSuccess,
        data
    };
}
////// loadStoreRequest////////////
export function loadStoreRequest(viewAllStoreData) {
    return dispatch => {
        dispatch(LoadStoreRequest());
        return fbConfig.database.ref('/Stores').once('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                }else{
                    todo.push(innerTodo);
                }
            })
            dispatch(LoadStoreRequestSuccess(todo))
        });
    }
}

function LoadStoreRequest() {
    return {
        type: StockActions.LoadStoreRequest
    };
}

function LoadStoreRequestSuccess(data) {
    return {
        type: StockActions.LoadStoreRequestSuccess,
        data
    };
}

 // / / / / / //  view Sales / /  / / /// 
export function viewSale(ViewSaleObj) {
    return dispatch => {
        return fbConfig.database.ref('/Sale').once('value', snap => {
            const data = [];
            snap.forEach(childSnapshot => {
                var innerdata = childSnapshot.val();
                innerdata.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerdata.comments = customComments;
                    data.push(innerdata);
                }else{
                    data.push(innerdata);
                }
            })
            dispatch(viewSaleRequestSuccess(data))
        });
    }
}

function viewSaleRequest() {
    return {
        type: StockActions.ViewSaleRequest
    };
}

function viewSaleRequestSuccess(data) {
    return {
        type: StockActions.ViewSaleRequestSuccess,
        data
    };
}
// / / / / / //  view Purchases / /  / / /// 
export function viewPurchase(ViewPurchaseObj) {
    return dispatch => {
        return fbConfig.database.ref('/Purchase').once('value', snap => {
            const data = [];
            snap.forEach(childSnapshot => {
                var innerdata = childSnapshot.val();
                innerdata.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerdata.comments = customComments;
                    data.push(innerdata);
                }else{
                    data.push(innerdata);
                }
            })
            dispatch(viewPurchaseRequestSuccess(data))
        });
    }
}

function viewPurchaseRequest() {
    return {
        type: StockActions.ViewPurchaseRequest
    };
}

function viewPurchaseRequestSuccess(data) {
    return {
        type: StockActions.ViewPurchaseRequestSuccess,
        data
    };
}

