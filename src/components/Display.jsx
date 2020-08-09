import React from 'react';

const Display = ({ history, total }) => {
  let arr = Object.entries(history);
    return  (
      <section>
        {arr.map((item, i) => {
          return (
            <div key={i}>
              {item[0]}
              {item[1].map(elem => 
                <div key={i + Math.random()}>
                  {elem.goodsName}&nbsp;
                  {elem.amount}&nbsp;
                  {elem.currency}
                </div>
              )}
            </div>    
          )
        })}
        <br />
        <div>
          {total.total.amount}&nbsp;
          {total.total.currency}
        </div>
      </section>
    )
}

export default Display;