import CompB from "./CompB";

let CompA = () => {
  let eid = 101;
  let name = "Gokul";

  return (
    <div>
      <h1>Component A</h1>
      <CompB msg={"GM"} />
    </div>
  );
};
export default CompA;
