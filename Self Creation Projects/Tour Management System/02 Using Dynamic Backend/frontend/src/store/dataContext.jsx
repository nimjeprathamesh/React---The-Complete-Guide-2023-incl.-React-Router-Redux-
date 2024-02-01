import React, { createContext, useReducer } from "react";

const DataContext = createContext({
    items: [],
    addItem: (item) => {},
});

function contactReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        const existingDataItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if(existingDataItemIndex > -1) {
            const existingItem = state.items[existingDataItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingDataItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {
            ...state, items: updatedItems
        };
    }

    return state;
}

export function DataContextProvider({children}) {
    const [contact, dispatchContactInfo] = useReducer(contactReducer, {items: []});

    function addItem(item) {
        // Extract the necessary information from the item
        const { id, customer: { email } } = item;

        // Create the new format
        const formattedItem = { id, email };

        // Dispatch the action with the new formatted item
        dispatchContactInfo({ type: 'ADD_ITEM', item: formattedItem });
    }

    const DataContext = {
        items: contact.items,
        addItem,
    };

    return (
        <DataContext.Provider value={DataContext}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;