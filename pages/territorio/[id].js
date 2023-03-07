import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Bganimated from '../../components/Bganimated';
import Layout from '../../components/Layout';
import { terr, territorios } from '../../data';

function CardPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const card = territorios.find((c) => c == id);
  console.log(card);

  const [direccion, setdireccion] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    console.log('clicked');
    let nombre = prompt('Ingresa la dirección por favor', '');
    if (nombre === null || nombre === '') {
      alert('No ingresaste ningun dato');
    } else {
      setdireccion([...direccion, nombre]);
      console.log(direccion);
    }
  }

  function handleExample(e) {
    e.preventDefault();
    const rIndex = Math.floor(Math.random() * terr.examples.length);
    setdireccion([
      ...direccion,
      `${terr.examples[rIndex]} ${Math.floor(Math.random() * 30) * 7 + 100}`,
    ]);
  }

  useEffect(() => {
    console.log('effect activo');
    setdireccion(terr.directions);
  }, []);

  if (!card) {
    return <div>Error al buscar el territorio</div>;
  }

  return (
    <Layout>
      <div className='container text-light mx-auto'>
        <h1 className='mt-2 text-dark text-center border-bottom border-secondary'>
          TERRITORIO {card}
        </h1>
        <div className='card my-3'>
          <Bganimated />
          <div className='card-body rounded'>
            {direccion.map((d) => {
              return (
                <div
                  className='border-bottom text-dark border-dark bg-light rounded-end my-2'
                  style={{ height: '35px' }}
                >
                  <h2 className='fw-light mx-2' style={{ height: '20px' }}>
                    {d}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className='my-2 d-grid justify-content-center'>
          <div className='mx-auto'>
            <button className='btn btn-secondary' onClick={handleClick}>
              <h3 className='text-light text-center' style={{ height: '20px' }}>
                AGREGAR EDIFICIO
              </h3>
            </button>
          </div>
          <div className='mx-auto'>
            <button className='btn btn-info mt-2' onClick={handleExample}>
              <h3 className='text-light text-center' style={{ height: '20px' }}>
                EJEMPLO AUTO 
              </h3>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CardPage;
