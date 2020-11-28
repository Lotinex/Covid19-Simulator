import Entity from './Entity';

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