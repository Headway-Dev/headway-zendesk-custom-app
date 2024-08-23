import { Span, SM } from "@zendeskgarden/react-typography";

export default function StatusSpan({ status }) {
  return (
    <SM isBold={true}>
      {status ? <Span hue="green">TRUE</Span> : <Span hue="red">FALSE</Span>}
    </SM>
  );
}
