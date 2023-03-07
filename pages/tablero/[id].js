import Link from 'next/link';
import Layout from '../../components/Layout';
import { terr } from '../../data';

export default function tablero() {
  const title = terr.directions[0];
  return (
    <>
      <Layout>
        <div className='container d-flex justify-content-center'>
          <div
            className='position-absolute card-body d-flex justify-content-between'
            style={{ top: '410px', width: '330px', height: '190px' }}
          >
            <div
              className='bg-secondary bg-gradient align-items-center justify-content-center d-grid'
              style={{ height: '100%', width: '55px' }}
            >
              <Link href={'!#'}><button className='btn btn-sm btn-danger'>1-A</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-success'>2-A</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-success'>3-A</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-light'>4-A</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-danger'>5-A</button></Link>
            </div>
            <div
              className='bg-secondary bg-gradient align-items-center justify-content-center d-grid'
              style={{ height: '100%', width: '55px' }}
            >
              <Link href={'!#'}><button className='btn btn-sm btn-success'>1-B</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-light'>2-B</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-success'>3-B</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-light'>4-B</button></Link>
              <Link href={'!#'}><button className='btn btn-sm btn-danger'>6-B</button></Link>
            </div>
          </div>
          <div>
            <div className='card-body rounded mt-3 mx-1'>
              <h3 className='text-center text-secondary pt-2'>{title}</h3>
              <img src='/fondo3.jpg' className='w-100' />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
