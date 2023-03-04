import Layout from '../components/Layout';

export default function territorio() {
  return (
    <Layout>
      <div className='container row text-light'>
        <div className='border-start border-warning bg-black mx-1 rounded-end my-2' style={{height: '35px'}}>
          <h2 className='fw-bold my-1'>Mariano Moreno 255</h2>
        </div>
        <div className='border-start border-warning bg-black mx-1 rounded-end my-2' style={{height: '35px'}}>
          <h2 className='fw-bold my-1'>Alvear 120</h2>
        </div>
        <div className='border-start border-warning bg-black mx-1 rounded-end my-2' style={{height: '35px'}}>
          <h2 className='fw-bold my-1'>Alvear 381</h2>
        </div>
        <div className='border-start border-warning bg-black mx-1 rounded-end my-2' style={{height: '35px'}}>
          <h2 className='fw-bold my-1'>Belgrano 15</h2>
        </div>
        <div className='border-start border-warning bg-black mx-1 rounded-end my-2' style={{height: '35px'}}>
          <h2 className='fw-bold my-1'>Bruselas 10</h2>
        </div>
        <h3 className='text-light text-center my-4 w-75 mx-auto rounded p-2 bg-success bg-gradient border-top'>
          añadir dirección
        </h3>
      </div>
    </Layout>
  );
}
