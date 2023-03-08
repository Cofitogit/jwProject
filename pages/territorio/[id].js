import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Bganimated from '../../components/Bganimated';
import Layout from '../../components/Layout';
import { terr, territorios } from '../../data';

function CardPage() {
  const router = useRouter();
  const { id } = router.query;
  const card = territorios.find((c) => c == id);
  const [visible, setVisible] = useState(false);

  const [direccion, setdireccion] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setInputValue('');
    setVisible(!visible);
  }

  function handleExample(e) {
    e.preventDefault();
    const rIndex = Math.floor(Math.random() * terr.examples.length);
    setdireccion([
      ...direccion,
      `${terr.examples[rIndex]} ${Math.floor(Math.random() * 30) * 7 + 100}`,
    ]);
  }

  function handleSave(e) {
    e.preventDefault();
    if (inputValue === null || inputValue === '') {
      alert('No ingresaste ningun dato');
    } else {
      setdireccion([...direccion, inputValue]);
    }
    setVisible(!visible);
  }

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
            <div
              className='position-absolute card-body rounded-3'
              style={{
                width: '300px',
                top: '100px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#f9e2f7',
                display: visible ? 'block' : 'none',
              }}
            >
              <h3 className='text-left text-secondary'>
                Introduzca la dirección del edificio en el espacio blanco:
              </h3>
              <hr className='text-secondary' />
              <div className='input-group flex-nowrap'>
                <span className='input-group-text' id='addon-wrapping'></span>
                <input
                  type='text'
                  className='form-control'
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder='Escribir aquí'
                  aria-label='Dirección del edificio'
                  aria-describedby='addon-wrapping'
                />
              </div>
              <div className='d-flex justify-content-between my-3'>
                <button className='btn btn-success' onClick={handleSave}>
                  GUARDAR
                </button>
                <button className='btn btn-light' onClick={handleClick}>
                  CANCELAR
                </button>
              </div>
            </div>
            {direccion.map((d) => {
              return (
                <Link href={`/tablero/2`} className='text-decoration-none'>
                  <div
                    className='border-bottom text-dark border-dark bg-light rounded-end my-2'
                    style={{ height: '35px' }}
                  >
                    <h2 className='fw-light mx-2' style={{ height: '20px' }}>
                      {d}
                    </h2>
                  </div>
                </Link>
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
