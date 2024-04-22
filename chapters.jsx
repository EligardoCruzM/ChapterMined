// Definición de la dirección del contrato inteligente.
const contract = "books.testnet";

// Obtener todos los registros del contrato utilizando Near Protocol.
const books = Near.view(contract, "get_all_records", {});

// Definición de estilo de componente a
const StyledLink = styled.a`
  color: inherit !important;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding-top: 2px;

  @media (max-width: 400px) {
    width: 110px;
  }
`;

// Código de retorno con el listado de capítulos
return (
  <div class="p-3" style={{ width: "100%" }}>
    <div class="border border-black p-3">
      {/* Tabla para mostrar los registros de los libros */}
      <table className="table table-sm">
        <thead>
          <tr class="p-3 mb-2 bg-primary text-white text-center">
            <th>Autor</th>
            <th>Titulo</th>
            <th>Chapter</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Iteración de libros */}
          {books &&
            books.map((data, key) => {
              return (
                <tr class="text-center">
                  <td>{data.sender}</td>
                  <td>{data.title}</td>
                  <td>{data.chapter}</td>
                  <td>
                    {/* Enlace a widget de capítulo */}
                    <StyledLink
                      href={
                        "https://test.near.social/elicruz.testnet/widget/chapter??title=" +
                        data.title +
                        "&title=" +
                        data.title +
                        "&chapter=" +
                        data.chapter +
                        "&author=" +
                        data.sender +
                        "&text=" +
                        data.text
                      }
                      target="_blank"
                    >
                      {/* Botón para leer capítulo */}
                      <button class="btn btn-primary" onClick={async () => {}}>
                        Leer
                      </button>
                    </StyledLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  </div>
);