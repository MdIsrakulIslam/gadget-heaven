import { toast } from "react-toastify";

const getStoredAddList =() =>{
    const storedListStr = localStorage.getItem('cart-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
          return storedList;  
        
    }
    else
    {
           return []
    }
}
const addToStoreAddList =(id) =>{
    const storedList =getStoredAddList()
    if(storedList.includes(id)){
        console.log(id, 'already exists in the list')
    }
    else
    {
        storedList.push(id)
        const storedListStr =JSON.stringify(storedList)
        localStorage.setItem('cart-list',storedListStr)
        toast('This device is added to you cart option')
    }
}


const getStoredWistList =() =>{
    const storedListStr = localStorage.getItem('add-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
          return storedList;  
        
    }
    else
    {
           return []
    }
}
const addToStoreWistList =(id) =>{
    const storedList =getStoredWistList()
    if(storedList.includes(id)){
        console.log(id, 'already exists in the list')
    }
    else
    {
        storedList.push(id)
        const storedListStr =JSON.stringify(storedList)
        localStorage.setItem('add-list',storedListStr)
        toast('This device is added to you Wistlist option')
    }
}



export {addToStoreAddList ,addToStoreWistList ,getStoredAddList,getStoredWistList}