import {ListComponent} from "./List.jsx";
import {Dashboard} from "./DashBoard.jsx";
import {ReactIconComponent} from "./ReactIcon.jsx";
import "./index.css";
function App() {
  return (
    <>
      <ReactIconComponent />
      <Dashboard />
      <div className="Content">
        <h1 className="Fun-Facts">Fun facts about React</h1>
        <ul>
          <ListComponent name="Was first released in 2013" />
          <ListComponent name="Was originally created by Jordan Walke" />
          <ListComponent name="Has well over 100K stars on GitHub" />
          <ListComponent name="Is maintained by Facebook" />
          <ListComponent name="Powers thousands of enterprise apps, including mobile apps" />
        </ul>
      </div>
    </>
  );
}

export default App;
