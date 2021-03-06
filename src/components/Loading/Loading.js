import React from 'react';
import loading from '../../images/loading.gif'


const Loading = (props) =>{
    return (
        <div className="noPrayers flex-column center">
            <code>Prayers are Being Fetched From the Cloud. Please Wait or try &nbsp; p r a y i n g.</code>
            <br /><img src={loading} alt="Blocks boucing around" className="img-small" /><br />
            <code>if nothing comes to you, contact your nearest <br />s p i r i t u a l &nbsp; l e a d e r .</code>
        </div>
    )
}

export default Loading;