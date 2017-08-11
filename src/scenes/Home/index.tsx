import * as React from 'react';

import * as pandora from 'helpers/pandora';

interface DisplayStation
{
    stationId: string;
    stationName: string;
    stationLikes: pandora.StationLike[];
}

interface HomeState
{
    likes: { [ stationId: string ]: DisplayStation };
    stationsComplete: number;
    totalStations: number;
    totalLikes: number;
}

export default class Home extends React.Component<{ }, HomeState>
{
    constructor( props: { } )
    {
        super( props );

        this.state = {
            likes: { },
            stationsComplete: 0,
            totalStations: 0,
            totalLikes: 0
        };
    }

    async componentWillMount()
    {
        try
        {
            let stations = await pandora.getStations( 'anickle060193' );
            this.setState( { totalStations: stations.length } );

            stations.forEach( async ( station ) =>
            {
                let { stationId, stationName } = station;
                console.log( 'Start ' + stationName );
                try
                {
                    let stationLikes = await pandora.getStationLikes( stationId );
                    this.setState( ( prevState: HomeState ) =>
                    {
                        let { likes, stationsComplete, totalLikes } = prevState;
                        likes[ stationId ] = {
                            stationId,
                            stationName,
                            stationLikes
                        };
                        stationsComplete += 1;
                        totalLikes += stationLikes.length;
                        return {
                            likes,
                            stationsComplete,
                            totalLikes
                        };
                    } );
                }
                catch( error )
                {
                    console.error( error );
                }
                console.log( 'End ' + stationName );
            } );
        }
        catch( error )
        {
            console.error( error );
        }
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.stationsComplete}/{this.state.totalStations} Stations - {this.state.totalLikes} Likes</h1>
                <ul>
                    {
                        Object.keys( this.state.likes ).map( ( stationId ) =>
                        (
                            <li key={stationId}>
                                {this.state.likes[ stationId ].stationName}
                                <ul>
                                    {
                                        this.state.likes[ stationId ].stationLikes.map( ( stationLike ) =>
                                        (
                                            <li key={stationLike.trackName + stationLike.artist + Math.random()}>{stationLike.trackName} - {stationLike.artist}</li>
                                        ) )
                                    }
                                </ul>
                            </li>
                        ) )
                    }
                </ul>
            </div>
        );
    }
}