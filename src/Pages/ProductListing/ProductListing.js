import React, { useState } from 'react';

import Header from '../../Components/Header';

import { Grid, Row, Col } from '../../Utils/StyledComponents';

export default function ProductListing() {
    const [ isOpenLocModal, setOpenLocModal ] = useState(false);
    return(
        <React.Fragment>
            <Grid padding={'20px'}>
                <Row>
                    <Col size={1}><Header setOpenLocModal={setOpenLocModal} /></Col>
                </Row>
                <Row>
                    PRODUCT LISTING
                </Row>
            </Grid>
        </React.Fragment>
    );
};
