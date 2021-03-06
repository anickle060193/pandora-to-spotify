import * as functions from 'firebase-functions';
import * as cors from 'cors';
import * as url from 'url';
import * as rp from 'request-promise';

const addCors = cors( { origin: true } );

export const getStations = functions.https.onRequest( ( request, response ) =>
{
    addCors( request, response, () =>
    {
        let oldUrl = url.parse( request.url, true );
        if( !oldUrl.query.webname )
        {
            return response.status( 400 ).send( 'Must include webname parameter.' );
        }

        let newUrl = url.format( { protocol: 'https', host: 'www.pandora.com', pathname: '/content/stations/', search: oldUrl.search } );

        let jar = rp.jar();
        jar.setCookie( rp.cookie( 'at=woLHZimYH3wf/Pu/U8eUM/XcMXanerCMMxiDXmZEjLvZgUyAZliC+l8Yg15mRIy72DlxLzLZ5Oe6+aO3CSzeYvw==' ), newUrl );

        return rp( { url: newUrl, jar: jar } )
            .then( ( data ) =>
            {
                return response.status( 200 ).send( data );
            } )
            .catch( ( error ) =>
            {
                let statusCode = error && error.statusCode || 500;
                let message = error && error.message || 'An error occured.';
                return response.status( statusCode ).send( message );
            } );
    } );
} );

export const getStationLikes = functions.https.onRequest( ( request, response ) =>
{
    addCors( request, response, () =>
    {
        let oldUrl = url.parse( request.url, true );
        let newUrl = url.format( { protocol: 'https', host: 'www.pandora.com', pathname: '/content/station_track_thumbs/', search: oldUrl.search } );
        return rp( newUrl )
            .then( ( data ) =>
            {
                return response.status( 200 ).send( data );
            } )
            .catch( ( error ) =>
            {
                let statusCode = error && error.statusCode || 500;
                let message = error && error.message || 'An error occured.';
                return response.status( statusCode ).send( message );
            } );
    } );
} );
