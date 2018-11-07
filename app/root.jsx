import React from 'react';
import PollutionMap from './components/PollutionMap';
import DataHolder from './components/DataHolder';

class Root extends React.Component {
    render () {
        return (
            <React.Fragment>
                <PollutionMap/>
                {/* <DataHolder/> */}
            </React.Fragment>
        );
    }
}

export default Root;
