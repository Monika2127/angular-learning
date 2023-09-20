import { style, transition, trigger, animate, state, keyframes, animation, useAnimation } from '@angular/animations';

//  re-usable animation
export let bounceOutLeftAnimation = animation(
    animate('500ms ease-out',
        keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ])
    )
)

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    // animate(2000),
    //  for dynamically
    animate('{{ duration }} {{ easing }}')
], {
    //  this is the default value, we can get it from the consumer function also
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
})

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),
    state('*', style({ opacity: 1 })),

    transition(':enter, :leave', [animate(2000)]),
])

export let fadeLeft = trigger('fadeLeft', [
    state('void', style({ transform: 'translateX(-10px)' })),

    transition(':enter', [animate(500)]),
    // transition(':leave', [animate('500ms cubic-bezier(.61, .29, .07, 1.02)', style({ transform: 'translateX(-100%)' }))]),
    transition(':leave', 
        useAnimation(bounceOutLeftAnimation)
    ),


])





// animations: [

// trigger('fade', [

//   //  state to tell the styles applied to that state, with this, we don't need to apply style in transitions for the void

//   state('void', style({ opacity: 0 })),
//   state('*', style({ opacity: 1 })),

//   // transition('void => *', [animate(2000)]),
//   // transition('* => void', [animate(2000)]),

//   // we can also use it like this
//   // transition('void => *, * => void', [animate(2000)]),
//   // OR
//   // transition('void <=> *', [animate(2000)]),
//   // OR using aliases, from void to default(get in the DOM, enter) and vice versa for leave
//   transition(':enter, :leave', [animate(2000)]),
// ]),

// ----------------------

//   //  trigger for fadeIn and fadeOut

//   trigger('fade', [
//     transition('void => *', [
//       style({ opacity: 0 }),
//       animate(2000)
//     ]),
//     transition('* => void', [
//       animate(2000, style({ opacity: 0 }))
//     ])
//   ]),

// --------------------------------

//   trigger('fade', [
//     transition('void => *', [
//       //  difference between style and animate, style will apply immediately and animate will apply after interval provided
//       style({
//         backgroundColor: 'yellow',
//         color: 'aqua',
//         opacity: 0
//       }),
//       // animate(2000, style({
//       //   background: 'red',
//       //   opacity: 1
//       // }))
//       animate(2000)    //  it will undo all the changes after this interval
//     ]),

//     transition('* => void', [
//       animate(2000, style({ opacity: 0 }))
//     ])
//   ])
// ]


// in the animate, there are three types of thing in the first argument
// animate('100ms 1s ease-in')
// 1. duration required
// 2. delay
// 3. easing(linear, ease-in, ease-out, ease-in-out, [for custom graph => cubic-bezier(.17, .34, 42, .14)])


//  using keyframes, we can define various styles for each keyframe
//  ech keyframe has an offset property that determines the relative position of the keyframe from the beginning of the
//      animation