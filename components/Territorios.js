import { territorios } from '../data';

export default function Territorios() {
  return (
    <>
      <div className='card my-3 bg-dark border-secondary'>
        <div className='row'>
          {territorios.map((num) => {
            return (
              <div
                className='col-md-4 text-light mx-auto'
                style={{ width: '150px' }}
              >
                <div
                  className='card-body bg-primary m-2'
                  style={{ height: '120px' }}
                >
                  <div className='my-4'>
                    <h1 className='text-center text-dark'>{num}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
