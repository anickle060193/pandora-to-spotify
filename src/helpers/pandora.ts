import * as request from 'request-promise';

export function getStations( username: string ): Promise<string>
{
    let stations: string[] = [ ];

    return new Promise( ( resolve, reject ) =>
    {
        return request( `http://www.pandora.com/content/stations?startIndex=${stations.length}&webname=${username}` );
        // return request.get( 'http://www.pandora.com/content/stations', {
        //     startIndex: stations.length,
        //     webname: username
        // } );
        // return request.get( `http://www.pandora.com/content/stations?startIndex=' + stations.length + '&webname=' + username` );
        // request.get( `http://www.pandora.com/content/stations?startIndex=${stations.length}&webname=${username}` )
        //      .then( ( htmlString: string ) =>
        //      {
        //          resolve( htmlString );
        //      } )
        //      .catch( ( error ) =>
        //      {
        //          reject( error );
        //      } );
    } );
}

export function getStationSongs( stationId: string )
{
    let startIndex = 0;
    return new Promise( ( resolve, reject ) =>
    {
        return request( `http://www.pandora.com/content/station_track_thumbs?stationId=${stationId}&posFeedbackStartIndex=${startIndex}&posSortAsc=false&posSortBy=date` );
    } );
}