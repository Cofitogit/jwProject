import Link from 'next/link';
import { territorios } from '../data';

export default function Territorios() {
  return (
    <>
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
        <div className='row'>
          {territorios.map((num) => {
            return (
              <div
                className='col-md-4 text-light mx-auto my-2'
                style={{ width: '110px' }}
                key={num}
              >
                <Link href={'/territorio'} className='text-decoration-none'>
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
