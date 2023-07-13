import React from 'react';

export const Sidebar = ({desc}) => {
  return (
    <>
    {desc.map((item) => (
            <div className="col-md-3">
          <div className="card">
              <div className="card-header">
                  <div className="card-title text-center">{item.place}</div>
              </div>
              <div className="card-body">
                  <img src={item.img} className='img-fluid' alt={item.place} />
              </div>
              <div className="card-footer">
                  <p>{item.descriptions}</p>
                  <span>Price: </span><b className='text-success'>{item.price}</b>
              </div>
          </div>
      </div>
    ))}
    </>
  )
}
