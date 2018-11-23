import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';


interface CardSettings {
    title: string;
    iconClass: string;
    type: string;
}

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

    private alive = true;

    lightCard: CardSettings = {
        title: 'Luces pasillos',
        iconClass: 'nb-lightbulb',
        type: 'primary',
    };
    rollerShadesCard: CardSettings = {
        title: 'Barrera de entrada',
        iconClass: 'nb-locked',
        type: 'success',
    };
    wirelessAudioCard: CardSettings = {
        title: 'Barrera de salida',
        iconClass: 'nb-locked',
        type: 'info',
    };
    coffeeMakerCard: CardSettings = {
        title: 'Coffee Maker',
        iconClass: 'nb-coffee-maker',
        type: 'warning',
    };

    statusCards: string;

    commonStatusCardsSet: CardSettings[] = [
        this.lightCard,
        this.rollerShadesCard,
        this.wirelessAudioCard,
    ];

    infoCards = [
        {
            title: 'Vehículos esperando en barrera de entrada',
            value: 2,
            description: 'vehículos',
            color: '#fffc',
            tiempoEspera: 'Tiempo promedio de espera 180s',
        },
        {
            title: 'Vehículos esperando en barrera de salida',
            value: 0,
            description: 'vehículos',
            color: '#fffc',
            tiempoEspera: 'Tiempo promedio de espera 59s',
        },
        {
            title: 'Vehículos camino a la cochera',
            value: 1,
            description: 'vehículo',
            color: '#fffc',
        },
        {
            title: 'Vehículos estacionados',
            value: 39,
            description: 'vehículos',
            color: '#fffc',
        },
        {
            title: 'Vehículos abonados en camino a la salida',
            value: 0,
            description: 'vehículos',
            color: '#fffc',
        },
        {
            title: 'Vehículos que abandonaron la cochera y no abonaron',
            value: 1,
            description: 'vehículos',
            color: '#f00c',
        },
    ];

    statusCardsByThemes: {
        default: CardSettings[];
        cosmic: CardSettings[];
        corporate: CardSettings[];
    } = {
        default: this.commonStatusCardsSet,
        cosmic: this.commonStatusCardsSet,
        corporate: [
            {
                ...this.lightCard,
                type: 'warning',
            },
            {
                ...this.rollerShadesCard,
                type: 'primary',
            },
            {
                ...this.wirelessAudioCard,
                type: 'danger',
            },
            {
                ...this.coffeeMakerCard,
                type: 'secondary',
            },
        ],
    };

    constructor(private themeService: NbThemeService, private modalService: NgbModal) {
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
                this.statusCards = this.statusCardsByThemes[theme.name];
            });
    }

    showLargeModal() {
        const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

        activeModal.componentInstance.modalHeader = 'Large Modal';
    }
    ngOnDestroy() {
        this.alive = false;
    }
}
