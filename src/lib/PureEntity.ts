import Entity from './Entity';

export class PureRect extends Entity {
    protected fill: string;
    public w: number;
    public h: number;
    constructor(options: Graphic.EntityInitialOptions & {
        fill?: string;
        w: number;
        h: number;
    }){
        super(options)
        this.fill = options.fill || 'black';
        this.w = options.w;
        this.h = options.h;
    }
    /**@override */
    public render(){
        this.renderer?.drawRect({
            x: this.x - this.w / 2,
            y: this.y - this.h / 2,
            w: this.w,
            h: this.h,
            fill: this.fill
        })
    }
}
export class PureCircle extends Entity {
    public radius: number;
    protected fill: string;
    constructor(options: Graphic.EntityInitialOptions & {
        radius: number;
        fill?: string;
    }){
        super(options)
        this.radius = options.radius;
        this.fill = options.fill || 'black';
    }
    /**@override */
    public render(){
        this.renderer?.drawCircle({
            x: this.x,
            y: this.y,
            radius: this.radius,
            fill: this.fill
        })
    }
}