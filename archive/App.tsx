import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <Alert onClick={() => setShowAlert(false)} />}
      <Button onClick={() => setShowAlert(true)}>My Button</Button>
    </div>
  );
}

export default App;
