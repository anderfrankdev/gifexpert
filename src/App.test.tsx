import { describe, expect, it } from "vitest";
import App  from "./App";
import {fireEvent, render, screen} from './utils/test-utils'

describe.concurrent('Tests in <App/>',()=>{

	it('Should match snapshot',async ()=>{

		let component = render(<App />)
		expect(component.container).toMatchSnapshot()

	})

	it('Should render a category',()=>{

		const inputValue = "Goku"

		const {container} = render(<App/>)
		const inputScreen:HTMLInputElement = screen.getByTestId('input')!

		fireEvent.input(inputScreen, {target: {value: inputValue}})
		
		const input:HTMLInputElement = container.querySelector('.input')! 
		
		expect(input.value).toBe(inputValue)

		fireEvent.keyUp(screen.getByTestId('input'),{keyCode:13})

		expect(container.querySelector(".category")).not.toBeNull()
	})
})