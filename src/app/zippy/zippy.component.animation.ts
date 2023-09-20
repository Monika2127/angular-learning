import { trigger, transition, style, animate, state } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('expanded', style({
        height: '*',
        // overflow: 'auto'
    })),
    state('collapse', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
    })),

    transition('expanded => collapse', [
        animate('1s ease-in')
    ]),

    transition('collapse => expanded', [
        animate('1s ease-out', style({
            height: '*',
            paddingTop: '*',
            paddingBottom: '*'
        })),
        animate('1s', style({
            opacity: 1
        }))
    ])
])