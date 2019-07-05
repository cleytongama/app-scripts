const retangle = {}

Object.defineProperty(retangle, "x", {
    set(x){
        this._x = x
    }
})
Object.defineProperty(retangle, "area", {
    set(y){
        this._y  = y
    }
})
Object.defineProperty(retangle, "area", {
    get(){
        return this._x * this._y
    }
})

retangle.x = 10
retangle.y = 2

console.log(retangle.area)