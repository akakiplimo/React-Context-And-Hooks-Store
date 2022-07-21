import React from 'react';
import { ItemList, NewItem } from "./Items";


export default function Todos() {
    return (
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <NewItem />
          <ItemList />
        </header>
    );
}