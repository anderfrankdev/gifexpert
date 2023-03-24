import { useState } from "react";
import addCategory from "../events/addCategory";
import { gif } from "../types";

const useCategories = (initialCategories:Object) => {
	const [categories, setCategories] = useState({});
	const [primaryCategory,setPrimaryCategory] = useState("")

	const removeCategory = (event:any) => {
		const category = event.target!.dataset.category
		const newCategories = JSON.parse(JSON.stringify(categories))
		delete newCategories[category]
		setCategories(newCategories)
		if(category===primaryCategory){ 
			setPrimaryCategory(Object.keys(newCategories).reverse()[0])
		}
	}

	const setPrimary = (category:string) => {
		if(category===primaryCategory) return
		setPrimaryCategory(category)
	}

	const setOneCategory = (gifsData:any) =>{
		const [category,gifs] = gifsData
		setCategories({...categories, [category]:gifs})
	}
	const setMultipleCategories = (gifsData:any) =>{
		const newCategories = Object.fromEntries(gifsData)
		setCategories({...categories,...newCategories })
	}

  	return {
    	categories,
    	primaryCategory,
    	categoryEvents:{
    		setPrimary,
    		removeCategory,
    		addCategory:addCategory([
    			categories,
    			setCategories,
    			setPrimaryCategory
    		]),
    	},
    	categoryEffetcs:{
    		setOneCategory,
    		setMultipleCategories
    	}
  	};
};

export default useCategories;
