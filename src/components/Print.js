import React from 'react';


function Print () {
  return(
     <button className="print"
            onClick={() => window.print()}>
     Print
     </button>
  );
}

export default Print
