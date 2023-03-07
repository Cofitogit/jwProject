import Layout from '../components/Layout';

export default function territorio() {
  return (
    <Layout>
      <div className='container text-light mx-auto'>
        <div className='card my-3'>
          <div className='background rounded'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='card-body rounded'>
            <div
              className='border-bottom text-dark border-dark bg-light rounded-end my-2'
              style={{ height: '35px' }}
            >
              <h2 className='fw-bold my-1'>Mariano Moreno 255</h2>
            </div>
            <div
              className='border-bottom text-dark border-dark bg-light rounded-end my-2'
              style={{ height: '35px' }}
            >
              <h2 className='fw-bold my-1'>Alvear 120</h2>
            </div>
            <div
              className='border-bottom text-dark border-dark bg-light rounded-end my-2'
              style={{ height: '35px' }}
            >
              <h2 className='fw-bold my-1'>Alvear 381</h2>
            </div>
            <div
              className='border-bottom text-dark border-dark bg-light rounded-end my-2'
              style={{ height: '35px' }}
            >
              <h2 className='fw-bold my-1'>Belgrano 15</h2>
            </div>
            <div
              className='border-bottom text-dark border-dark bg-light rounded-end my-2'
              style={{ height: '35px' }}
            >
              <h2 className='fw-bold my-1'>Bruselas 10</h2>
            </div>
          </div>
        </div>
        <div className='my-2 d-flex justify-content-center'>
          <div>
            <button className='btn btn-secondary'>
              <h3 className='text-light text-center' style={{height: '20px'}}>AGREGAR EDIFICIO</h3>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
