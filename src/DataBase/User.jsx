export function User({ id, name, email, phone }) {
  return (
    <>
      <li>
        <span>Id: {id}</span>
        <span>Nome: {name}</span>
        <p>E-mail: {email}</p>
        <span>Telefone: {phone}</span>
      </li>
      <br />
    </>
  );
}
