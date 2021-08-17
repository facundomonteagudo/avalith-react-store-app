import React from 'react';
import { withRouter } from 'react-router-dom';
//import tag from '../../Icon/tags-solid.svg';
import stl from './Header.module.css';

const Header = withRouter(({ history, location }) => {
  return (
    <header className={stl.header}>
      <h1 className={stl.title}>
        Avalith skill factory - <em> Monteagudo </em>, Facundo.
      </h1>

      <div style={{ display: 'flex', gap: '1rem', marginRight: '10rem' }}>
        {location.pathname === '/add-product' ? (
          <button
            className={stl.btn}
            onClick={() => history.replace('/avalith-react-store-app')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="20px"
            >
              <path
                fill="currentColor"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
              ></path>
            </svg>
          </button>
        ) : null}
        <button
          className={stl.btn}
          onClick={() => history.push('/add-product')}
        >
          <p>Add a Product</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="20px"
          >
            <g>
              <path
                fill="currentColor"
                d="M497.94 225.94L286.06 14.06A48 48 0 0 0 252.12 0H48A48 48 0 0 0 0 48v204.12a48 48 0 0 0 14.06 33.94l211.88 211.88a48 48 0 0 0 67.88 0l204.12-204.12a48 48 0 0 0 0-67.88zM112 160a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"
              />
              <path
                fill="currentColor"
                d="M625.94 293.82L421.82 497.94a48 48 0 0 1-67.88 0l-.36-.36 174.06-174.06a90 90 0 0 0 0-127.28L331.4 0h48.72a48 48 0 0 1 33.94 14.06l211.88 211.88a48 48 0 0 1 0 67.88z"
              />
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
});

export default Header;
