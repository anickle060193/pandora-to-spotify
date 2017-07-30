export function get( url: string, params: object = { } )
{
    let u = new URL( url );
    for( let p of Object.keys( params ) )
    {
        u.searchParams.set( p, params[ p ] );
    }
    console.log( u.href );
    return new Promise( ( resolve, reject ) =>
    {
        let request = new XMLHttpRequest();
        request.withCredentials = true;
        request.onreadystatechange = () =>
        {
            if( request.readyState === 4 && request.status === 200 )
            {
                resolve( request.responseText );
            }
        };
        request.open( 'GET', u.href, true );
        request.send();
    } );
}