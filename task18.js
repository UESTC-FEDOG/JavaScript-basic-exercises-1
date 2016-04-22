(function() {
	function queue() {
		this.array = [];
		this.ele = document.getElementById('chart');
	}
	queue.prototype = {
		constructor: queue,
		creatEle: function(value) {
			var ele = document.createElement('div');
			ele.innerHTML = value;
			ele.className = "haha";
			return ele;
		},
		unshift: function(value) {
			this.array.unshift(value);
			var item = this.creatEle(value),
				ele = this.ele;
			if(ele.children.length > 0 ) {
				ele.insertBefore(item,ele.firstElementChild);
			}else {
				ele.appendChild(item);
			}
		},
		push: function(value) {
			this.array.push(value);
			var item = this.creatEle(value),
				ele = this.ele;
				ele.appendChild(item);
		},
		shift: function() {
			if(this.ele.children.length == 0) {
				return false;
			}
			this.ele.removeChild(this.ele.firstElementChild);
			alert(this.array.shift());
		},
		pop: function() {
			if(this.ele.children.length == 0) {
				return false;
			}
			this.ele.removeChild(this.ele.lastElementChild);
			alert(this.array.pop());
		},
		remove: function(index) {
			this.ele.removeChild(this.ele.children[index]);
			this.array.splice(index,1);
		}
	}
	var queue = new queue();
	var button = Array.prototype.slice.call(document.getElementsByTagName('button'));
		button.forEach(function(item) {
		item.addEventListener('click', function(e) {
			var num = document.getElementById('value').value;
			if(isNaN(num)) {
				alert('You mush input number');
				return false;
			}
			queue[item.value](num);
		})
	});
	var chart = document.getElementById('chart');
	chart.addEventListener('click', function(e) {
		if(e.target.matches(".haha")) {
			for (var index = 0; index < chart.children.length; index++) {
				if (chart.children[index] === e.target) break;
			}
			queue.remove(index);
		}
	})
})()
