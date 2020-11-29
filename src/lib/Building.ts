import {PureRect} from './PureEntity';
import $ from 'jquery';
import {buildingNames} from './Data';
import U from './Utils';
import Main from '../page/Main';

export default class Building extends PureRect {
    private door: PureRect | null = null;
    constructor(options: Graphic.EntityInitialOptions & {
        fill?: string;
        w: number;
        h: number;
    }){
        super(options)
        const buildingName = $('<div>').addClass('buildingName').text(U.pickRandomElement(buildingNames))
        buildingName.css('left', this.x - 50)
        buildingName.css('top', this.y)
        $('#graphicTextDOMArea').append(buildingName)
    }
    public onClick(): void {
        console.log(1)
        $('#buildingViewer').show()
        const building = new Building({
            id: U.generateRandomID(),
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: this.w * 2,
            h: this.h * 2,
            fill: 'gray'
        });
        Main.BuildngViewer.addEntity(building)
    }
    public setDoor(position: 'top' | 'left' | 'bottom' | 'right'): void {
        const addDoor = (x: number, y: number) => {
            const door = new PureRect({
                id: U.generateRandomID(),
                w: position == 'top' || position == 'bottom' ? 17 : 10,
                h: position == 'left' || position == 'right' ? 17 : 10,
                x,
                y,
            });
            this.renderer?.addEntity(door)
            this.door = door;
        };
        const getEdgeRandomPosition = (coord: number, edgeLength: number) => {
            return U.rand(coord - edgeLength / 2, coord + edgeLength / 2);
        }
        switch(position){
            case 'top':
                addDoor(getEdgeRandomPosition(this.x, this.w), this.y - this.h / 2)
                break;
            case 'bottom':
                addDoor(getEdgeRandomPosition(this.x, this.w), this.y + this.h / 2)
                break;
            case 'left':
                addDoor(this.x + this.w / 2, getEdgeRandomPosition(this.y, this.h))
                break;
            case 'right':
                addDoor(this.x - this.w / 2, getEdgeRandomPosition(this.y, this.h))
                break;
        }
    }
}

