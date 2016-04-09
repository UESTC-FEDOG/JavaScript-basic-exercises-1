(function() {
    function VisualQueue(ele) {
        this.array = [];
        this.canvas = ele;
    }

    VisualQueue.createElement = function(num) {
        var domobj = document.createElement('div');
        domobj.innerHTML = num;
        domobj.className = 'vq';
        return domobj;

    };
    vqProto = VisualQueue.prototype;

    // 右侧入
    vqProto.push = function(num) {
        var domObj = VisualQueue.createElement(num);

        this.array.push(num);
        this.canvas.appendChild(domObj);
    };

    // 左侧入
    vqProto.unshift = function(num) {
        var domObj = VisualQueue.createElement(num),
            canvas = this.canvas;

        this.array.unshift(num);
        if (canvas.children.length > 0) canvas.insertBefore(domObj, canvas.firstElementChild);
        else canvas.appendChild(domObj);
    };

    // 右侧出
    vqProto.pop = function() {
        var canvas = this.canvas;
        canvas.removeChild(canvas.lastElementChild);
        alert(this.array.pop());
    };

    // 左侧出
    vqProto.shift = function() {
        var canvas = this.canvas;
        canvas.removeChild(canvas.firstElementChild);
        alert(this.array.shift());
    };

    // 中间出
    vqProto.remove = function(index) {
        this.canvas.removeChild(this.canvas.children[index]);
        this.array.splice(index, 1);
    };

    var buttons = Array.prototype.slice.call(document.querySelectorAll('button')),
        canvas = document.getElementById('canvas'),
        vq = new VisualQueue(canvas);

    buttons.forEach(function(ele) {
        ele.addEventListener('click', function(){
            var num = Number(document.getElementById('input').value);
            
            if(isNaN(num)) {
                alert('输入不合法');
                return false;
            }
            
            vq[this.dataset.type](num);
        });
    });

    canvas.addEventListener('click', function(e) {
        var that = this;
        if (e.target.matches('.vq')) {
            for (var index = 0; index < that.children.length; index++) {
                if (that.children[index] === e.target) break;
            }
            
            vq.remove(index);
        }
    });

} ());