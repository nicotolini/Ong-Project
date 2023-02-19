const getPaginationData = (quantity, array) => {
  const pagination = array.reduce(
    (acc, item, index) => {
      const sizePage = quantity * acc.quantity;

      const page = acc.pages[acc.quantity] ? acc.pages[acc.quantity].concat(item) : [item];

      if (index + 1 === sizePage && index + 1 !== array.length) {
        const newQuantity = acc.quantity + 1;

        return {
          quantity: newQuantity,
          pages: {
            ...acc.pages,
            [acc.quantity]: page,
          },
        };
      }

      return {
        ...acc,
        pages: {
          ...acc.pages,
          [acc.quantity]: page,
        },
      };
    },
    {
      pages: {
        1: [],
      },
      quantity: 1,
    }
  );

  return pagination;
};

export { getPaginationData };
