// Definición de la dirección del contrato inteligente.
const contract = "books.testnet";

// Estados locales para manejar el estado del componente.
const [books, setBooks] = useState([]);
const [title, setTitle] = useState("");
const [chapter, setChapter] = useState("");
const [text, setText] = useState("");

// Función para añadir un nuevo capítulo.
const addNewMessage = () => {
  if (text.trim() == "") {
    return;
  }

  Near.call(
    contract,
    "new_record",
    {
      title: title,
      chapter: chapter,
      text: text,
    },
    "30000000000000",
    newDeposit * 1e24
  );
};

// Código de retorno
return (
  <div class="p-3" style={{ width: "100%" }}>
    {context.accountId ? (
      <div class="border border-black p-3">
        <div class="row">
          {/* Input para ingresar el título de la novela */}
          <div class="col-sm">
            <input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="col-sm">
            {/* Input para ingresar el título del capítulo */}
            <input
              placeholder="Capítulo"
              onChange={(e) => setChapter(e.target.value)}
            />
          </div>
        </div>{" "}
        <br />
        <div class="row">
          <div class="col-12">
            {/* Input para ingresar el título de la novela */}
            <textarea
              style={{ width: "100%", height: "310px" }}
              placeholder="Texto"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        {/* Añadir mensaje */}
        <button
          class="btn btn-primary mt-2"
          onClick={async () => {
            addNewMessage();
          }}
        >
          Guardar Capítulo
        </button>
      </div>
    ) : (
      <p class="text-center py-2">
        Debes iniciar sesiÃ³n para guardar un mensaje
      </p>
    )}
  </div>
);