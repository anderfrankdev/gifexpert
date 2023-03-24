import { describe, expect, it } from "vitest";
import { GifGrid } from "./GifGrid";
import {render, screen} from '../utils/test-utils'

describe.concurrent('Tests in <GifGrid/>',()=>{

	it.concurrent('Should render 2 categories',async ()=>{

		let component = render(<GifGrid categories={["Goku","Vegeta"]} />)
  		
  		const categories = component
  			.container
  			.querySelectorAll(".category")
		
		expect(categories.length).toBe(2)

	})

})