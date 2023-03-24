import { describe, expect, it } from "vitest";
import fetchGifs from "./fetchGifs";
describe.concurrent('Tests in fetchGifs.ts',()=>{

	it.concurrent('Should fetch and render 12 gifs',async ()=>{

		const gifs = await fetchGifs("one punch",20)

		expect(gifs.length).toBe(20)
		
		expect(gifs[0]).toEqual({
			id:expect.any(String),
			title:expect.any(String),
			url:expect.any(String)
		})
	
	},10000000)

})