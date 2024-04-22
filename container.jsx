// Estado local para controlar la pestaña list por defecto.
const [tabSelected, setTabSelected] = useState("list");

// Arreglo de objetos que representan las pestañas disponibles.
const pills = [
  { id: "list", title: "Lista de Capítulos" },
  { id: "new", title: "Crear Capítulo" },
];

// Estilos
const Wrapper = styled.div`
* {
  font-family: 'system-ui','Inter', 'Space Grotesk' !important;
}
`;

const PillButtonActive = styled.div`
font-weight: 700;
background-color: gray;
color: black;
border-radius: 10px;
margin: 0 10px 0 10px;
cursor: pointer;
padding: 7px 0 7px 0;
  }
`;

const PillButton = styled.div`
font-weight: 700;
cursor: pointer;
background-color: #1E1E1E;
color: white;
padding-bottom: 5px;
border-radius: 10px;
margin: 0 10px 0 10px;
padding: 7px 0 7px 0;
  }
`;

// Código de retorno
return (
  <div>
    <Wrapper>
      <div
        style={{
          display: "flex",
          "justify-content": "center",
        }}
      ></div>
      <br />
      {/* Lista de pestañas (nav-pills) */}
      <ul
        className="nav nav-pills nav-fill mb-4"
        id="pills-tab2"
        role="tablist2"
        style={{ "margin-top": "15px" }}
      >
        {/* Mapeo de las pestañas para renderizar cada una */}
        {pills.map(({ id, title }, i) => (
          <li className="nav-item" role="presentation" key={i}>
            {tabSelected == id ? (
              <PillButtonActive
                onClick={() => {
                  setTabSelected(id);
                }}
              >
                {title}
              </PillButtonActive>
            ) : (
              <PillButton
                onClick={() => {
                  setTabSelected(id);
                }}
              >
                {title}
              </PillButton>
            )}
          </li>
        ))}
      </ul>
      <div
        className="tab-content"
        id="pills-tabContent"
        style={{ display: "flex", "justify-content": "center" }}
      >
        {/* Renderizar un Widget diferente según la pestaña seleccionada */}
        {tabSelected == "list" ? (
          <Widget src="elicruz.testnet/widget/chapters" />
        ) : (
          <Widget src="elicruz.testnet/widget/new" />
        )}
      </div>
    </Wrapper>
  </div>