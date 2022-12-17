import { useState } from 'react';
import { AddCategory } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'Transformers' ]);
    
    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory ))return;
      
      setCategories( [ newCategory, ...categories] )
    }
  return (
    <>
     
        <h1>GifExpertApp</h1>

       
        <AddCategory 
        //setCategories = {setCategories} 
          onNewValue = { event => onAddCategory(event) }
          />   
          
          {
            categories.map((category) => (
              <GifGrid key={category} 
              category = {category} />
          ))
            } 
    
    </>
  )
}
