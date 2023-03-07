import Link from 'next/link';
import { territorios } from '../data';
import Bganimated from './Bganimated';

export default function Territorios() {
  return (
    <>
      <div className='card my-3' id='home-card'>
        <Bganimated />
        <div className='row' id='home'>
          {territorios.map((num) => {
            return (
              <div
                className='col-md-4 text-light mx-auto my-2'
                style={{ width: '110px' }}
                key={num}
                id={num}
              >
                <Link href={`/territorio/${num}`} className='text-decoration-none'>
                  <div
                    className='card-body rounded border bg-light border-black bg-opacity-50'
                    style={{ height: '120px' }}
                  >
                    <div className='my-4'>
                      <h1 className='text-center text-dark fw-bold'>{num}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
