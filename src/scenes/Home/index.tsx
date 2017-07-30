import * as React from 'react';

// import * as pandora from 'helpers/pandora';

export default class Home extends React.Component<{}, { text: string }>
{
    state = {
        text: ''
    };

    componentWillMount()
    {
        // pandora.getStationSongs( '3692167171514767338' ).then( ( htmlString ) =>
        // {
        //     this.setState( { text: htmlString as string } );
        // } );
    }

    render()
    {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}