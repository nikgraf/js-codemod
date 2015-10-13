module.exports = function(file, api) {
  const j = api.jscodeshift;
  const {expression, statement, statements} = j.template;
  const root = j(file.source);

  const flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a;

  const update = (path) => {
    const [first, ...rest] = path.value.arguments;

    if (first.type !== 'ObjectExpression' ||
        first.properties.length !== 0) {
      return;
    }

    j(path).replaceWith(j.objectExpression(
      flatten(rest.map((p) => {
        return p.type === 'ObjectExpression'
          ? p.properties
          : j.spreadProperty(p)
      }))
    ));
  }

  root.find(j.CallExpression, {callee: {name: 'extend'}})
   .forEach(update);

  return root.toSource();
};
