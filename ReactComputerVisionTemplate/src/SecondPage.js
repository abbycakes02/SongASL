import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => (
    <div>
      <h1>Second Page</h1>
      <Link to="/detection">Go to Detection Page</Link>
    </div>
  );

  export default SecondPage;