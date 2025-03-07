const getRandomNode = () => {
  const nodes = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank'
  ];
  return nodes[Math.floor(Math.random() * nodes.length)];
};
