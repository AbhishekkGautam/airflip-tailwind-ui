export const PRICE_OPTIONS = {
  default: 2717,
};

export const OPTIONS = [
  {
    category: 'Power Amp',
    sub_category: [
      {
        label: 'None',
        description: 'Use in the studio or with your own power amp.',
        price: null,
        selected: true,
      },
      {
        label: 'Powered',
        description: 'Built-in 600W solid state power amp.',
        price: 449,
        selected: false,
      },
    ],
  },
  {
    category: 'Foot Controller',
    sub_category: [
      {
        label: 'None',
        description: null,
        price: null,
        selected: true,
      },
      {
        label: 'Profiler Remote Foot Controller',
        description: null,
        price: 449,
        selected: false,
      },
    ],
  },
];
