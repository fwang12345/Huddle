function Widget(c_id, s_id, x, y, type_name) {
    this.c_id = c_id;
    this.s_id = s_id;
    this.x = x;
    this.y = y;
    this.type_name = type_name;
}

Widget.prototype.signals = [
]

Widget.prototype.slots = [
]

Widget.copy = function(widget) {
    if (widget.type_name == "Textbox") {
        return new Textbox(widget.c_id, widget.s_id, widget.x, widget.y, widget.text, widget.type_name)
    } else if (widget.type_name == "Circle") {
        return new Circle(widget.c_id, widget.s_id, widget.x, widget.y, widget.r, widget.type_name)
    } else if (widget.type_name == "Rectangle") {
        return new Rectangle(widget.c_id, widget.s_id, widget.x, widget.y, widget.w, widget.l, widget.type_name)
    } else if (widget.type_name == "Slider") {
        return new Slider(widget.c_id, widget.s_id, widget.x, widget.y, widget.value, widget.type_name)
    }
    return null;
}

function Circle(c_id, s_id, x, y, r) {
    Widget.call(this, c_id, s_id, x, y, "Circle");
    this.r = r;
}

//TODO: make the type a default
Circle.prototype = Object.create(Widget.prototype)
Circle.prototype.constructor = Circle;

function Rectangle(c_id, s_id, x, y, w, l) {
    Widget.call(this, c_id, s_id, x, y, "Rectangle");
    this.w = w;
    this.l = l;
}

Rectangle.prototype = Object.create(Widget.prototype)
Rectangle.prototype.constructor = Rectangle;

function Textbox(c_id, s_id, x, y, text) {
    Widget.call(this, c_id, s_id, x, y, "Textbox");
    this.text = text;
}

Textbox.prototype = Object.create(Widget.prototype)
Textbox.prototype.constructor = Textbox;

function Slider(c_id, s_id, x, y, value) {
    Widget.call(this, c_id, s_id, x, y, "Slider");
    this.value = value;
}

Slider.prototype = Object.create(Widget.prototype)
Slider.prototype.constructor = Slider;


export {Widget, Circle, Rectangle, Textbox, Slider};
