import React from "react";
import styles from "./Header.module.css";

import {Container, Row, Col} from "react-grid-system";

const Header = () => {
    return(
        <header>
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <div className={styles.logo}>
                            <img src="/assets/logo.svg" />
                        </div>
                    </Col>
                    <Col xs={6}>

                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;