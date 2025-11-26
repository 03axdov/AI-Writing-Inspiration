import Textbox from "../components/Textbox";
import "../css/Landing.css";

function Landing() {

  return <div className="app-main">
    <div className="app-inner">
      <p className="title">Writing Inspiration Generator</p>
      <Textbox /> 
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        width: "100%",
        marginTop: "10px"
      }}>
        <button className="app-submit button">Submit</button>
      </div>
    </div>
  </div>;
}

export default Landing;
