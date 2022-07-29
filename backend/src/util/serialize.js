export default function serialize(data) {
  return JSON.stringify(data, (_key, value) => (
    typeof value === 'bigint'
      ? parseInt(value.toString(), 10)
      : value
  ));
}
