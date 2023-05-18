var nav = document.querySelector('.nav');
			var line = document.querySelector('.line');
			var backblock = document.querySelector('.backblock');
			var sliptAll = document.querySelectorAll('.nav a');

			// 给所有 a 添加索引
			for (let i = 0; i < sliptAll.length; i++) {
				sliptAll[i].setAttribute('data-index', i);
			}

			// 点击
			for (let i = 0; i < sliptAll.length; i++) {
				sliptAll[i].onclick = function (e) {
					//排他思想
					for (let j = 0; j < sliptAll.length; j++) {
						sliptAll[j].classList.remove('selected');
					}
					// this.style.color = '#FFF';
					this.classList.add('selected'); // 通过添加类名实现颜色变化
					let len = 155 * (4 - i) + 767; // 计算背景滑块left值
					backblock.style.left = len + 'px';
				};
			}

			// 鼠标经过
			for (let i = 0; i < sliptAll.length; i++) {
				sliptAll[i].onmouseover = function () {
					let len = 155 * (4 - i) + 770;
					backblock.style.left = len + 'px';
				};
			}

			// 鼠标离开
			for (let i = 0; i < sliptAll.length; i++) {
				sliptAll[i].onmouseleave = function () {
					let selected = document.querySelector('.nav .selected'); //原先被选中的元素
					let len = 155 * (4 - selected.dataset.index) + 770;
					backblock.style.left = len + 'px';
				};
			}
