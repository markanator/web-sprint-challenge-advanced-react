import React from "react";
import { render } from "@testing-library/react";
import Cart from "./ShoppingCart";

// Write up the two tests here and make sure they are testing what the title shows
const plants = {{}}
     // with each object being a mock plant

test("renders without crashing", () => {
    // arrange
    const {getByTestId} = render(<Cart cart={plants}/>)
    // Act
    // Assert
    expect(getByTestId(/cart/i)).toBeTruthy();
});