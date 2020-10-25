import React from 'react'
import './instagram.scss'
import './Footer.css'


export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/buttlesonthebus/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://buttlesonthebus/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)


