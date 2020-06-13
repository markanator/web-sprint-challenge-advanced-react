import React from "react";
import { render,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // arrange
    const {getByText} = render(<CheckoutForm />)
    // Act
    // Assert
    expect(getByText(/Checkout Form/i).innerHTML).toBe('Checkout Form');
    expect().to
});

test("form shows success message on submit with form details", async () => {
    // arrange
    const {getByTestId,findByTestId,debug} = render(<CheckoutForm />);

    const fName = getByTestId(/FirstName/i);
    const lName = getByTestId(/lastname/i);
    const addr  = getByTestId(/address/i);
    const city  = getByTestId(/city/i);
    const state = getByTestId(/state/i);
    const zip   = getByTestId(/zip/i);
    const Submit= getByTestId(/submitBtn/i);

    //act
    fireEvent.change(fName,{target: {value:'mark'       }});
    fireEvent.change(lName,{target: {value:'ambro'      }});
    fireEvent.change(addr, {target: {value:'321 main st'}});
    fireEvent.change(city, {target: {value:'chicago'    }});
    fireEvent.change(state,{target: {value:'IL'         }});
    fireEvent.change(zip,  {target: {value:'60626'      }});
    fireEvent.click(Submit);

    const ftw = await findByTestId(/successMessage/i);

    // assert
    expect(fName.value).toBe('mark');
    expect(lName.value).toBe('ambro');
    expect(addr.value) .toBe('321 main st');
    expect(city.value) .toBe('chicago');
    expect(state.value).toBe('IL');
    expect(zip.value)  .toBe('60626');
    expect(ftw).toBeTruthy();
});
