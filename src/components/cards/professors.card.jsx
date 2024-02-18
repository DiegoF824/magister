import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ProfessorCard = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/magister/data/personagens.json");
        const data = await response.data;
        setCharacters(data.professores);
      } catch (error) {
        setError(`Error fetching Magister character: ${error.message}`);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="flex gap-5">
      {characters.length > 0 &&
        characters.map((character) => (
          <li key={character.id} className="h-52 w-52 bg-cyan-200 p-5">
            <h3>{character.name}</h3>
            <img
              src={character.photoplayer}
              alt={character.name}
              className="h-full w-full"
            />
          </li>
        ))}
    </ul>
  );
};

ProfessorCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photoplayer: PropTypes.string,
};

export default ProfessorCard;
