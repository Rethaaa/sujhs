import React, { useEffect } from 'react';
import './banner.css';

export default function Banner() {
  useEffect(() => {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .foto');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    const reloadSlider = () => {
      slider.style.left = -items[active].offsetLeft + 'px';

      const lastActiveDot = document.querySelector('.slider .dots li.active');
      if (lastActiveDot) lastActiveDot.classList.remove('active');
      dots[active].classList.add('active');

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => next.click(), 3000);
    };

    next.onclick = () => {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };

    prev.onclick = () => {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };

    let refreshInterval = setInterval(() => next.click(), 3000);

    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });

    window.onresize = reloadSlider;
  }, []);

  return (
    <div className="slider">
      <div className="logo">
        <img src="./Logo_Botol.png" alt="Logo" />
      </div>
      <div className="list">
        <div className="foto foto-1"></div>
        <div className="foto foto-2"></div>
        <div className="foto foto-3"></div>
        <div className="foto foto-4"></div>
        <div className="foto foto-5"></div>
      </div>
      <div className="button">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <ul className="dots">
        <li className="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}