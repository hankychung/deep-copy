## description
a tool for copying object/array in a real deep way

## usage
```
npm i deepcopy_han -D

import deepCopy from 'deepcopy_han'

let a = {
  age: 1,
  jobs: {
    first: "Fir"
  },
  lang: [
    {
      name: 'usa'
    },
    {
      name: 'cn'
    }
  ],
  arr: [
    [
      {
        value: '1'
      }
    ],
    [
      {
        value: '2'
      }
    ],
  ]
};

let dc = deepCopy(a)
```

## params
_example: deepCopy(input)_

**_input_**

type: `object`, `array`

desc: things you want to copy

return: things that have been copied and have no any relationship with the source
