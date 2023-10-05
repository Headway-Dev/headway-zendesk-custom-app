import React from "react";
import { render } from "react-dom";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";
import { Ellipsis, SM, Span } from "@zendeskgarden/react-typography";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Alert, Title, Close } from "@zendeskgarden/react-notifications";
import { Tooltip } from "@zendeskgarden/react-tooltips";
import { Anchor } from "@zendeskgarden/react-buttons";
import { resizeContainer } from "../../javascripts/lib/helpers";
import Subscription from "./subscription";
import Payments from "./payments";

const MAX_HEIGHT = 2000;

class App {
  constructor(client, _appData) {
    this._client = client;

    this.initializePromise = this.init();
  }

  async init() {
    const requester = (await this._client.get("ticket.requester"))[
      "ticket.requester"
    ];

    const userDataRequestOptions = {
      url: `https://zendesk--integration-hlg6qksfkq-uc.a.run.app/api/zendesk/requester?requester_email=${requester.email}`,
      method: "GET",
      cors: false,
      headers: {
        Authorization: "Bearer {{setting.JWT_TOKEN}}",
      },
      secure: true
    };

    const appContainer = document.querySelector(".main");

    const l = await this._client
      .request(userDataRequestOptions)
      .then((data) => {
        this.renderRequesterData(appContainer, requester, data);
      })
      .catch((err) => {
        this.renderErrorMessage(appContainer, err.responseJSON.detail);
      });

    return resizeContainer(this._client, MAX_HEIGHT);
  }

  renderRequesterData(container, requester, requesterData) {
    render(
      <ThemeProvider theme={{ ...DEFAULT_THEME }}>
        <Title style={{ margin: "12px 0px", bold: true }}>GENERAL INFO</Title>
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
                    onClick={() => {
                      this.copyText(requester.email);
                    }}
                  >
                    <Span hue="blue">{requester.email}</Span>
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
                    onClick={() => {
                      this.copyText(requester.externalId);
                    }}
                  >
                    <Span hue="blue">{requester.externalId}</Span>
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
              <SM>{requesterData.user.country}</SM>
            </Col>
          </Row>
        </Grid>

        <Title style={{ margin: "12px 0px", bold: true }}>APP INFO</Title>
        <Grid>
          <Row>
            <Col size={3}>
              <SM isBold={true}>OS:</SM>
            </Col>
            <Col xs>
              <SM>
                <Ellipsis>{requesterData.user.app.os_version}</Ellipsis>
              </SM>
            </Col>
          </Row>
          <Row>
            <Col size={3}>
              <SM isBold={true}>App:</SM>
            </Col>
            <Col>
              <SM>{requesterData.user.app.app_version}</SM>
            </Col>
          </Row>
        </Grid>

        {requesterData.web_subscription && (
          <Subscription
            subscription={requesterData.web_subscription}
            title="WEB SUBSCRIPTION"
          />
        )}
        {requesterData.web_upsell_subscription && (
          <Subscription
            subscription={requesterData.web_upsell_subscription}
            title="WEB UPSELL SUBSCRIPTION"
          />
        )}
        {requesterData.web_payments.length != 0 && (
          <Payments payments={requesterData.web_payments} />
        )}
      </ThemeProvider>,
      container
    );
  }

  renderErrorMessage(container, errorMessage) {
    render(
      <Alert type="error">
        <Title>Error</Title>
        {errorMessage}
        <Close aria-label="Close Error Alert" />
      </Alert>,
      container
    );
  }

  copyText(text) {
    navigator.clipboard.writeText(text);
  }
}

export default App;
