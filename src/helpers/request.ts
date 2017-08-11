export function get( url: string )
{
    return new Promise( ( resolve, reject ) =>
    {
        let request = new XMLHttpRequest();
        request.onreadystatechange = () =>
        {
            if( request.readyState === 4 )
            {
                if( request.status === 200 )
                {
                    resolve( JSON.parse( request.response ) );
                }
                else
                {
                    reject( request.response );
                }
            }
        };
        request.open( 'GET', url, true );
        request.send();
    } );
}