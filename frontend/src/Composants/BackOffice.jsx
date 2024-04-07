import { useState } from 'react';
import { classNames } from '@emotion/react';

const ArtisanList = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Michel Durand', profession: 'Plombier' },
    { id: 2, name: 'Jean Dupont', profession: 'Électricien' },
    { id: 3, name: 'Marie Martin', profession: 'Chauffagiste' },
    { id: 4, name: 'Pierre Dubois', profession: 'Menuisier' },
    { id: 5, name: 'Anne Bertrand', profession: 'Peintre' },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-gray-800">ProMEET</h1>

      <div className="flex justify-between items-center mt-4">
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          className="btn btn-primary ml-2"
        >
          Rechercher
        </button>
      </div>

      <div className="mt-8">
        {data.length === 0 ? (
          <p className="text-gray-500">Aucun artisan trouvé.</p>
        ) : (
          <ul className="list-none">
            {data.map((item) => (
              <li
                key={item.id}
                className={classNames(
                  'flex items-center p-4 border border-gray-300 rounded-md',
                  'hover:bg-gray-100',
                )}
              >
                <div className="flex-grow">
                  <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">{item.profession}</p>
                </div>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="btn btn-secondary">Précédent</button>
        <button className="btn btn-secondary">Suivant</button>
      </div>
    </div>
  );
};

export default ArtisanList;