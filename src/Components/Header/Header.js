import React from 'react';

import { Grid, Row, Col, Icon } from '../../Utils/StyledComponents';
import backIcon from '../../Assets/icons/back.svg';
import downIcon from '../../Assets/icons/arrow-down.svg';

export default function Header({setOpenLocModal}) {
    return (
        <Grid>
            <Row>
                <Col>
                    <Icon height="25px" src={backIcon} />
                </Col>
                <Col padding="0 0 0 20px">
                    <Grid>
                        <Row>
                            <Col fontSize="9px" color="textSecondary">
                                AlAMAT PENGANTARAN
                            </Col>
                        </Row>
                        <Row>
                            <Col fontSize="14px" color="textPrimary" bold={true}>Tokopedia Tower</Col>
                            <Icon height="20px" src={downIcon} onClick={() => setOpenLocModal(true)} />
                        </Row>
                    </Grid>
                </Col>
            </Row>
        </Grid>
    );
};
