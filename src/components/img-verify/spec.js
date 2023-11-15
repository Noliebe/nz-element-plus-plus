
let itemIdSeed = 0

class specGroup {
    id
    specValues
    name
    constructor(options){
        this.id += itemIdSeed
        
        for (const name in options) {
            if (Object.hasOwn(options, name)) {
                this[name] = options[name]
            }
        }

    }
            //     id: '1231223113',
            //     specValues: [{
            //         value: "绿色",
            //         id: '1231223113',
            //     }],
            //     name: '颜色',
}