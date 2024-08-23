import {Alert, Close, Title} from "@zendeskgarden/react-notifications";

export default function CustomError({errorMessage}) {
    return (
      <Alert type="error">
        <Title>Error</Title>

        {errorMessage}

        <Close aria-label="Close ErrorInfo Alert" />
      </Alert>
    )
}