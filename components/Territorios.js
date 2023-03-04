import { territorios } from '../data';

export default function Territorios() {
  return (
    <>
      <div className='card my-3 bg-dark'>
        <div className='row'>
          {territorios.map((num) => {
            return (
              <div
                className='col-md-4 text-light mx-auto'
                style={{ width: '100px' }}
                key={num}
              >
                <div
                  className='card-body rounded bg-black border-top border-warning bg-opacity-25'
                  style={{ height: '120px'}}
                >
                  <div className='my-4'>
                    <h1 className='text-center text-light fw-bold'>{num}</h1>
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
