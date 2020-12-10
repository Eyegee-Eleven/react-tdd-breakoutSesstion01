import React from 'react'

function PersonList({people}){

const testArray=['joe','jim','bob']  

 const listCreator = testArray.map(name =><li className='peopleNames' key={name}>{name}</li> )   
 console.log(typeof people)
 

 if(people.length<1){
  var errorMessage= <li id='cow'>There are no names at this time</li>
 }
 
  return(
    <>
    <ul>
      {errorMessage}
      {listCreator}
    </ul>
    </>
  )
  
}









export default PersonList