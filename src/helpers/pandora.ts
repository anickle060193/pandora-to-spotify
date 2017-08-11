import * as request from 'helpers/request';

export interface Station
{
    stationId: string;
    stationName: string;
}

export interface StationLike
{
    trackName: string;
    artist: string;
}

export function getStations( username: string )
{
    return request.get( `https://pandora-to-spotify-server.herokuapp.com/stations/${username}` ) as Promise<Station[]>;
}

export function getStationLikes( stationId: string )
{
    return request.get( `https://pandora-to-spotify-server.herokuapp.com/station-likes/${stationId}` ) as Promise<StationLike[]>;
}