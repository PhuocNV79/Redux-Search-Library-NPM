import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelectors';

const RepositoriesList: React.FC = () => {
  const [name, setName] = useState('');
  const { searchRepositories } = useActions();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchRepositories(name);
  };

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={name} onChange={handleOnChange} />
        <button>search</button>
      </form>
      {error && <h3> An error accur: {error}</h3>}
      {loading && <h3>Loading...</h3>}
      {data && (
        <div>
          <ul>
            {data.map<JSX.Element>((pack: string, index: number) => {
              return <li key={index}>{pack}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;
