type BegruessungProps = {
  name: string;
};

function Begruessung({ name }: BegruessungProps) {
  return (
    <div>
      <h2>Hallo, {name}!</h2>
      <p>Willkommen bei deinem ersten React-Projekt mit TypeScript!</p>
    </div>
  );
}

export default Begruessung;
