import AlunoCard from "../../components/cards/alunos-card";
import ProfessorCard from "../../components/cards/professors.card";

const Personagens = () => {
  return (
    <div className="mt-10 flex flex-col gap-10 justify-center items-center text-center">
      <section>
        <h2 className="text-2xl mb-5">Alunos</h2>
        <AlunoCard />
      </section>

      <section>
        <h2 className="text-2xl mb-5">Professores</h2>
        <ProfessorCard />
      </section>
    </div>
  );
};

export default Personagens;
