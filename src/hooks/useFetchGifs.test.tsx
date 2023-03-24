import { expect, vi,describe,it } from "vitest";
import useFetchGifs from "./useFetchGifs";
import {fireEvent, render, screen} from '../utils/test-utils'
import { GifImages } from "../components/GifImages";

vi.mock("./useFetchGifs",()=>{
	return {
		default:()=>{
			return {
				
				gifs:[{
					id:"s2d2a32d1",
					title:"Great image",
					url:"algo.com"
				}],
				isLoading:false
		
			}
		}
	}
})

describe('Tests in useFetchGifs()',()=>{

	it('Should mock custom hook',async ()=>{

		let component = render(<GifImages id="123" />)
		
		expect(screen.getAllByRole('img').length).toBe(2) 
		
	},10000000)

})