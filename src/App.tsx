import { useEffect, useState } from "react";
import addCategory from "./events/addCategory";
import { GifGrid } from "./components/GifGrid";
import "./App.css";
import { CategoryBar } from "./components/CategoryBar";
import useCategories from "./hooks/useCategories";
import fetchGifs from "./services/fetchGifs";
import { GifImages } from "./components/GifImages";
function App() {
  const {
    categories,
    primaryCategory,
    categoryEvents,
    categoryEffetcs
  } = useCategories({});

  useEffect(()=>{
    const lastCategory:string = Object.keys(categories).reverse()[0]
    
    if(!lastCategory) return
    if((categories as any)[lastCategory].length>0) return
    
    fetchGifs(lastCategory,14)
      .then(categoryEffetcs.setOneCategory)


  },[categories])

  useEffect(()=>{
    const lastCategory:string = Object.keys(categories).reverse()[0]
    
    if(primaryCategory===lastCategory) return
    if((categories as any)[primaryCategory]?.length>0) return
    if(!(categories as any)[primaryCategory]) return
    
    const notLoadedCategories = Object.entries(categories).filter(
      ([category,values]:any[])=>values?.length<1
    )
    if(notLoadedCategories.length<1) return
    
    Promise.all(notLoadedCategories.map(
      ([category,values])=>fetchGifs(category,14)
    )).then(categoryEffetcs.setMultipleCategories)

  },[primaryCategory])

  return (
    <>
      <h1 className="title">GifExpertApp</h1>

      <input
        type="text"
        className="input"
        onKeyUp={categoryEvents.addCategory}
        placeholder="Type a topic"
        data-testid="input"
        key={"mainInput"}
      />

      <button 
        onClick={categoryEvents.addCategory} 
        className="button" 
        key={"inputButton"}
        >
        Agregar
      </button>
      <CategoryBar 
        onRemoveCategory={categoryEvents.removeCategory} 
        categories={categories}
        primaryCategory={primaryCategory}
        onSetPrimary={categoryEvents.setPrimary}/>
      <GifImages gifs={(categories as any)[primaryCategory]}/>
      
    </>
  );
}

export default App;
