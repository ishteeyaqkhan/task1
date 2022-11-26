import './App.css';
import Toaster from './screens/toaster/toaster';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState([{ content: "open first time" }]);
  const [type, setType] = useState("error")
  const [postion, setPosition] = useState("t-right")

  const handleOpen = (content) => {
    setOpen([...open, { content }])
  }
  const handleClose = (data) => {
    let filter = open.filter((prev) => prev !== data)
    setOpen(filter)
  }
  return (
    <div>
      <Toaster
        show={open}
        setShow={setOpen}
        type={type}
        postion={postion}
        handleClose={handleClose}
      />
      <div className='d-flex'>


        <div className='btn-c'>
          {/* <button onClick={() => toast.fire()}>Open toaster</button> */}

          <button onClick={() => handleOpen(" dynamic content")}>Open toaster</button>
          <button onClick={() => setOpen(false)}>close toaster</button>
          <button onClick={() => setType("error")}>Error</button>
          <button onClick={() => setType("success")}>Success</button>
          <button onClick={() => setPosition("t-left")}>Top Left</button>
          <button onClick={() => setPosition("t-right")}>Top Right</button>
          <button onClick={() => setPosition("b-left")}>Bottom Left</button>
          <button onClick={() => setPosition("b-right")}>Bottom Right</button>
        </div>
      </div>
    </div>
  );
}

export default App;
