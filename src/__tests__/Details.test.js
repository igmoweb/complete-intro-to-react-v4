import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("Snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("Show modal", () => {
	const c = create(<Details search={() =>{}}/>);
	const instance = c.getInstance();
	expect( instance.state.showModal ).toBe( false );
	instance.toggleModal();
	expect( instance.state.showModal ).toBe( true );
})
