import { useReducer } from "react";
import { expect, test } from "vitest";


test('user reducer should increment only age' () = {
    const startState = {age: 20, childrenCount: 26, name: 'Dimych'};

    const endState = useReducer(startState, {type: 'INCREMENT-AGE'});
    
expect(endState.age).toBe(21);
})