import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { heroid } = useParams();
  const hero = useMemo(() => getHeroById(heroid),[heroid]);

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to='/marvel' />;
  }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`/assets/heroes/${heroid}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: {hero.alter_ego}</b>
          </li>
          <li className='list-group-item'>
            <b>Publisher: {hero.publisher}</b>
          </li>
          <li className='list-group-item'>
            <b>First apperance: {hero.first_appearance}</b>
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
