// Definición de la dirección del contrato inteligente.
const contract = "books.testnet";

const { title, chapter, author, text } = props;

const [newDeposit, setNewDeposit] = useState(0);

// Función para realizar una donación al autor a través de Near Protocol.
const donate = (author) => {
  Near.call(
    contract,
    "transfer",
    {
      beneficiary: author,
    },
    "30000000000000",
    newDeposit * 1e24
  );
};

// Definir una sola constante para contener estilos y estructura HTML
const StyledContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;

  .chapter-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    text-align: left;
  }

  .novel-link {
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .novel-link:hover {
    color: #0056b3;
  }

  .author {
    font-style: italic;
    color: #666;
    margin-bottom: 10px;
  }

  .chapter-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .chapter-text {
    line-height: 1.6;
    max-height: 350px;
    overflow-y: scroll;
  }
`;

// Código de retorno con la estructura del capítulo
return (
  <StyledContainer>
    <div className="chapter-container">
      {/*Datos de la novela */}
      <p>
        Novela: <span className="novel-link">{title}</span>
      </p>
      <p className="author">Autor: {author}</p>
      <h2 className="chapter-title">{chapter}</h2>
      <div className="chapter-text">{text}</div>
      {/* Sección para ingresar la cantidad de la donación */}
      <div class="mt-2">
        <div class="row">
          <div class="col-4">
            <input
              type="number"
              min="0"
              placeholder="Deposit"
              onChange={(e) => setNewDeposit(e.target.value)}
            />
          </div>
          <div class="col-4">
            <button
              class="btn btn-primary"
              onClick={async () => {
                donate(author);
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  </StyledContainer>
);