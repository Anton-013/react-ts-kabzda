import { expect, test } from "vitest"
import { reduser, StateType, TOGGLE_COLLAPSED } from "./reduser"

test('collapsed should be true', () => {
    // date
    const state: StateType = {
        collapsed: false
    }
    // action
    const newState = reduser(state, {type: TOGGLE_COLLAPSED})
    // expection
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    // date
    const state: StateType = {
        collapsed: true
    }
    // action
    const newState = reduser(state, {type: TOGGLE_COLLAPSED})
    // expection
    expect(newState.collapsed).toBe(false)
})

test('collapsed should throw error because action type is incorrect', () => {
    // date
    const state: StateType = {
        collapsed: true
    }
    // action
    expect(() => {reduser(state, {type: 'FAKETYPE'})}).toThrowError()
})
