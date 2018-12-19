import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

const ContactMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{lat: 10.7723821, lng: 106.6978989}}
    >
        {
            props.isMarkerShown &&
            <Marker position={{lat: 10.772513, lng: 106.698165}} />
        }
    </GoogleMap>
));


export default ContactMap;
