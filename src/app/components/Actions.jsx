import {Title} from "@zendeskgarden/react-notifications";
import {Col, Grid, Row} from "@zendeskgarden/react-grid";
import {SM} from "@zendeskgarden/react-typography";
import {Anchor} from "@zendeskgarden/react-buttons";

export default function Actions({ userEmail }) {
    return (
        <div>
            <Title style={{ margin: "12px 0px", bold: true, textTransform: "uppercase" }}>Actions</Title>

            <Grid>
                <Row>
                    <Col>
                        <SM>
                            <Anchor
                                isExternal
                                href={`https://app.iterable.com/users/profiles/${userEmail}/subscriptions?projectId=14766`}
                            >
                                Iterable subscriptions
                            </Anchor>
                        </SM>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SM>
                            <Anchor
                                isExternal
                                href={`https://app.amplitude.com/analytics/get-headway/project/225541/search/email=${userEmail}`}
                            >
                                Amplitude events
                            </Anchor>
                        </SM>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SM>
                            <Anchor
                                isExternal
                                href={`https://canary.solidgate.com/payments/order?customer_email=${userEmail}`}
                            >
                                Solid orders
                            </Anchor>
                        </SM>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}