export default class Texture {
    public img: HTMLImageElement;
    constructor(options: Graphic.TextureInitialOptions){
        this.img = new Image();
        this.img.src = options.source;
    }

}