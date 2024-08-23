import {Title} from "@zendeskgarden/react-notifications";
import {Col, Grid, Row} from "@zendeskgarden/react-grid";
import {Ellipsis, SM} from "@zendeskgarden/react-typography";
import StatusSpan from "./StatusSpan.jsx";

export default function AppInfo({ app, subscription }) {
    return (
        <div>
            <Title style={{ margin: "12px 0px", bold: true, textTransform: "uppercase" }}>App info</Title>

            <Grid>
                <Row>
                    <Col size={3}>
                        <SM isBold={true}>OS:</SM>
                    </Col>
                    <Col xs>
                        <SM>
                            <Ellipsis>{app.os_version}</Ellipsis>
                        </SM>
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>App:</SM>
                    </Col>
                    <Col>
                        <SM>{app.app_version}</SM>
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>Platform:</SM>
                    </Col>
                    <Col>
                        <SM>{app.platform}</SM>
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>Active:</SM>
                    </Col>
                    <Col>
                        <StatusSpan status={subscription.is_active} />
                    </Col>
                </Row>

                <Row>
                    <Col size={3}>
                        <SM isBold={true}>Recurrent:</SM>
                    </Col>
                    <Col>
                        <StatusSpan status={subscription.is_recurrent} />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}