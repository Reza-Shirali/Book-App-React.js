import { useState } from "react";

import Books from "./components/Books.jsx";

import Layouts from "./Layouts/Layouts.jsx";


function App() {
  return (
    <Layouts>
      <Books/>
    </Layouts>
  );
}

export default App;
