export function handleChange(e, f) {
  let value = e.target.value;

  // remove any word that is not a number
  value = value.replace(/[^0-9.]/g, "");

  f(Number(value));
}
