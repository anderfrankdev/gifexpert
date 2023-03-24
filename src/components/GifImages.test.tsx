import { describe, expect, it, vi } from "vitest";
import { GifImages } from "./GifImages";
import {render, screen, waitForElementToBeRemoved} from '../utils/test-utils'


describe('Tests in <GifImages/>',()=>{

	it('Should fetch and render 12 gifs',async ()=>{

		let component = render(<GifImages id="123" />)
		
		expect(screen.getByTestId("loader")).not.toBeNull()

  		await waitForElementToBeRemoved(
  			screen.getByTestId("loader"),
  			{interval:1000,timeout:10000000}
  		)

  		const gifsRendered = component.container.querySelectorAll(".gif")

		expect(gifsRendered.length).toBe(12)
		
	
	},10000000)

})

