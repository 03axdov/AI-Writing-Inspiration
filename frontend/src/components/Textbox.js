import { useEffect, useState } from "react";
import "../css/textbox.css"

function Textbox() {
  const [value, setValue] = useState("");

  useEffect(() => {
    
  }, [])

  return <textarea 
  className="textbox" 
  placeholder="Enter a prompt... "
  value={value}
  onChange={(e) => setValue(e.target.value)}>
    
  </textarea>;
}

export default Textbox;
