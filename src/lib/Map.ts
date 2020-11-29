import RenderingEngine from './Canvas';
import Entity from './Entity';
import Human from './Human';
import {PureCircle} from './PureEntity'
import U from './Utils';
import $ from 'jquery';

export default class Map extends RenderingEngine {
    constructor(options: {
        width?: number;
        height?: number;
        id: string
    }){
        super(options)
    }
    /**@override */
    public onMouseClick(e: MouseEvent): void {
        $('#buildingViewer').css('pointer-events', 'all')
        $('#stage').css('pointer-events', 'none')
        super.onMouseClick(e)
    }
}

