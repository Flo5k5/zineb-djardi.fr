////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////

import mediaLoaded from '@maeertin/medialoaded';

////////////////////////////////////////////////////////////////
//
//  LOADER
//
////////////////////////////////////////////////////////////////

export default class Loader {

    constructor() {
        this.loadMedia();
    }

    loadMedia() {
        const preloadImg = new Promise( resolve => {
        });

        const elements = document.querySelectorAll('.video');
        console.log(elements);
        mediaLoaded(elements, instance => {
            console.log('All media loaded', instance)
          })

        let allDone = [ preloadImg ];

        Promise.all( allDone ).then( ()=> {
            console.log('MEDIA LOADED');
        });
    }
}