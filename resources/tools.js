function po (o) {
  console.log(
    JSON.stringify(o)
    .replace("[","[\n\t")
    .replace(/}\,/g,"},\n\t")
    .replace("]","\n]"));
  return'----'
}

function pt (o) {
  console.table(o)
  return'----'
}

const l = console.log
