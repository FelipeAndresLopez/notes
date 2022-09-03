import { noteReducer } from "./noteReducer";
import deepFreeze from 'deep-freeze'

describe('noteReducer', () => {
    test('return new state after action with toggle importance', () => {
        const state = [
            {
                id: 1,
                content: 'note1',
                importance: false
            },
            {
                id: 2,
                content: 'note2',
                importance: false,

            }
        ]
        const action = {
            type: '@note/toggle_importance',
            payload: {
                id: 2
            }
        }

        deepFreeze(state)

        const newState = noteReducer(state, action)

        expect(newState).toHaveLength(2)
        expect(newState).toContainEqual(state[0])
        expect(newState).toContainEqual({
            id: 2,
            content: 'note2',
            importance: true
        })

    })
});
