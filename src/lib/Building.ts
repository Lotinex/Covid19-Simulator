import {PureRect} from './PureEntity';
import $ from 'jquery';
import {buildingNames} from './Data';
import U from './Utils';
import Main from '../Main';

export default class Building extends PureRect {
    constructor(options: Graphic.EntityInitialOptions & {
        fill?: string;
        w: number;
        h: number;
    }){
        super(options)
        const buildingName = $('<div>').addClass('buildingName').text(U.pickRandomElement(buildingNames))
        buildingName.css('left', this.x - 50)
        buildingName.css('top', this.y)
        $(document.body).append(buildingName)
    }
    public setDoor(): void {
        
    }
}

