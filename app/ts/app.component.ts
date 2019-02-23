import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;
    constructor(){
        this.videos = [
            new Video(1, "Ford Focus VS Peugeot 308", "Dicdx3UUru8", "Этот тест мы специально готовили для любителей узнать мельчайшие подробности о своем будущем автомобиле. Именно поэтому длинна этого теста составляет рекордные 28 минут."),
            new Video(2, "ак выглядит Camry 40", "azyNBp1cbY8", "Как выглядит Camry 40 с реальным пробегом 300000 км")
        ]
    }
}
