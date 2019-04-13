import React from 'react';
import loading from '../../images/loading.gif'


const Loading = (props) =>{
    return (
        <div className="noPrayers flex-column center">
            <code>Prayers ar Being Fetched From the Cloud. Please Wait.</code>
            <br /><img src={loading} alt="Blocks boucing around" /><br />
            <code>if you are not automatically redirected please consult your nearest <br />s p i r i t u a l &nbsp; l e a d e r .</code>
        </div>
    )
}

export default Loading;