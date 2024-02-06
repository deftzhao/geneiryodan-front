import Template from './Template';

export default function Label({ label }: { label: string }) {
  return (
    <label style={{
        color: Template.label.fontColor
      }}>
        {label}
    </label>
  );
}