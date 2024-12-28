import {Title} from "@zendeskgarden/react-notifications";
import {Col, Grid, Row} from "@zendeskgarden/react-grid";
import {SM, Span} from "@zendeskgarden/react-typography";
import {Tooltip} from "@zendeskgarden/react-tooltips";
import {Anchor} from "@zendeskgarden/react-buttons";
import { copyText } from '../utils/copyText.js'

export default function GeneralInfo({userEmail, userId, userCountry, userLanguage}) {
    return (
        <div>
            <Title style={{ margin: "12px 0px", bold: true, textTransform: "uppercase" }}>General info</Title>

            <Grid>
                <Row>
                    <Col size={3}>
                        <SM isBold={true}>Email:</SM>
                    </Col>
                    <Col xs>
                        <SM>
                            <Tooltip content="Copy">
                                <Anchor
                                    href="#default"
                                    isExternal={false}
                                    onClick={() => copyText(userEmail)}
                                >
                                    <Span hue="blue">{userEmail}</Span>
                                </Anchor>
                            </Tooltip>
                        </SM>
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>UID:</SM>
                    </Col>
                    <Col>
                        <SM>
                            <Tooltip content="Copy">
                                <Anchor
                                    href="#default"
                                    isExternal={false}
                                    onClick={() => copyText(userId)}
                                >
                                    <Span hue="blue">{userId}</Span>
                                </Anchor>
                            </Tooltip>
                        </SM>
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>Country:</SM>
                    </Col>
                    <Col>
                        <SM>{userCountry}</SM>
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>Language:</SM>
                    </Col>
                    <Col>
                        <SM>{userLanguage}</SM>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}