import React from 'react'
class ShoppingList extends React.Component{
  
    render(){
        let myAge = "25"
        let myName = "Elad"
        let number = 5
         
        
        return <div>
        <h1 className='colortext'>{myAge}</h1> 
        <h1>{myName}</h1>
        </div>
    }
}
export default ShoppingList;