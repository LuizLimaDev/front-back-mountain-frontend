import underConstructionImg from "../../assets/under-construction.gif"

function Billings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80vw", height: "100vh", paddingBottom: "15rem" }}>
      <h1 style={{ paddingRight: "5rem" }}>Em construção</h1>

      <img src={underConstructionImg} alt="Em construção" />
    </div>
  );
}

export default Billings;