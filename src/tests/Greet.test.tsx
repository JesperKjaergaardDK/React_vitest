
import {render, screen} from "@testing-library/react"
import Greet from "../components/Greet";
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
  it('should render when name is provided', () => { 
    render(<Greet name="Jesper"/>);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/Jesper/i)
  })
 
  it('should render login button when name is not provided', () => { 
    render(<Greet/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i)
  })
})