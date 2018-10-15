import _ from 'lodash' ;

export default function xhr( options ) {
    let request = new XMLHttpRequest();
    const DEFAULT_ACCEPT = 'application/json';
    const DEFAULT_CONTENT_TYPE = 'application/json; charset=utf-8';

    options = _.assign( {
        url: '',
        method: 'GET',
        accept: DEFAULT_ACCEPT,
        contentType: DEFAULT_CONTENT_TYPE,
        data: null
    }, options );

    request.onload = function () {

        if ( this.status >= 200 && this.status < 400 ) {
            let data = /json/.test( options.accept ) && this.response !== '' ? JSON.parse( this.response ) : this.response;
            // Success
            // @todo: refactor how the response is handled so we can get both date and checksum if needed
            if ( typeof options.success === 'function' ) {
                if ( options.returnChecksum ) {
                    options.success( {
                        data: data,
                        checksum: this.getResponseHeader( 'checksum' )
                    } );
                } else if ( options.returnDate ) {
                    options.success( {
                        data: data,
                        date: this.getResponseHeader( 'Date' )
                    } );
                } else {
                    options.success( data );
                }
            }
        } else {
            // We reached our target server, but it returned an error
            if ( typeof options.error === 'function' ) {
                options.error( this.response );
            }
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        if ( typeof options.error === 'function') {
            options.error( new Error( 'XMLHttpRequest Error: ' + this.statusText ) );
        }
    };

    request.open( options.method, options.url );
    request.setRequestHeader( 'Accept', options.accept );
    request.setRequestHeader( 'Content-type', options.contentType );

    // Add any additional headers
    if ( options.headers ) {
        for ( let header in options.headers ) {
            if ( options.headers.hasOwnProperty( header ) ) {
                request.setRequestHeader( header, options.headers[ header ] );
            }
        }
    }

    request.send( options.data );
};
