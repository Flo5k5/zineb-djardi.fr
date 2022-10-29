////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////

import barba from '@barba/core';
import gsap from 'gsap';
import { scroll } from '../index';
import { animation } from '../index';
import { navigation } from '../index';
import { videoblock } from '../index';

////////////////////////////////////////////////////////////////
//
//  TRANSITIONS
//
////////////////////////////////////////////////////////////////

export default class Transition {

    constructor() {
        this.init();
    }
    
    init() {
        let that = this;

        barba.init({
            debug: true,

            transitions: [{

                ////////////////////////////////////////////////////////////////
                //
                //  DEFAULT
                //
                ////////////////////////////////////////////////////////////////

                name: 'default-transition',
                leave( data ) {
                    //
                    // console.log('LEAVE');
                },
                enter( data ) {
                    //
                    // console.log('ENTER');
                },
                after( data ) {
                    //
                    // console.log('AFTER');
                    videoblock.startAutoplay();
                    videoblock.coverAction();
                    scroll.reset();
                }
            }]
        });
    }

    link( link_ ) {
        let link = link_;
        barba.go( link );
    }
}