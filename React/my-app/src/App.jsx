// Airtel.jxs - React Application Root Component
// Component is Funtion
// React component responsibility render the UI

import Navbar from "./Navbar/Navbar";
import Users from "./Axios/Users";

let App = () => {
  return (
    <div>
      <Navbar />
      <Users />
    </div>
  );
};
export default App;
