var background = document.querySelector('.cover');
			var b1 = document.querySelector('.section1');
			var b2 = document.querySelector('.section2');
			var b3 = document.querySelector('.section3');
			var d1 = document.querySelector('.d1');
			var d2 = document.querySelector('.d2');
			var d3 = document.querySelector('.d3');
			var h1 = document.querySelector('.h1');
			var h2 = document.querySelector('.h2');
			var h3 = document.querySelector('.h3');
			document.addEventListener('scroll', () => {
				var scrollY = window.scrollY;

				if (scrollY !== 0) {
					background.style.backgroundPosition = 'calc(50% + ' + scrollY + 'px)';
					d1.style.top = 'calc(890px - ' + scrollY * 0.5 + 'px) ';
					b1.style.top = 'calc(1050px - ' + scrollY * 0.3 + 'px) ';
					h1.style.top = 'calc(2000px - ' + scrollY * 0.8 + 'px) ';

					d2.style.top = 'calc(1990px - ' + scrollY * 0.5 + 'px) ';
					b2.style.top = 'calc(2000px - ' + scrollY * 0.3 + 'px) ';
					h2.style.top = 'calc(3200px - ' + scrollY * 0.8 + 'px) ';

					d3.style.top = 'calc(2990px - ' + scrollY * 0.5 + 'px) ';
					b3.style.top = 'calc(2850px - ' + scrollY * 0.3 + 'px) ';
					h3.style.top = 'calc(4400px - ' + scrollY * 0.8 + 'px) ';
				} else {
					background.style.backgroundPosition = '';
					d1.style.top = '890px';
					b1.style.top = '1050px';
					h1.style.top = '2000px';

					d1.style.top = '1990px';
					b1.style.top = '2000px';
					h1.style.top = '3200px';

					d1.style.top = '2990px';
					b1.style.top = '2850px';
					h1.style.top = '4400px';
				}
			});