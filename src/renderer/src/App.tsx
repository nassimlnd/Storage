import {Button} from "./components/ui/button";
import React from "react";

function App(): JSX.Element {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Button
        onClick={handleClick}
      >You clicked {count} times</Button>
    </div>
  )
}

export default App
