const ExerciseSet = {
  name: 'GeneralSet Set 3',
  description:
    'adsajldkjsjwqiejaksdjiqw uqnundasdsadsasaiqwncusdasnqwuvusadsiewjasj description',
  musculoskeltalTypes: ['back'],
  functional: false,
  exerciseSet: [
    {
      exercise: {
        name: 'Exercise 1',
        steps: [
          {
            name: 'Lie down',
            modelClass: 'Lie-down',
            modelIndex: 0,
            Image: 'Image',
            model: 'https://d2dg13aszggr0f.cloudfront.net/starting.json',
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            name: 'Lie down',
            modelClass: 'Step3-left',
            modelIndex: 2,
            Image: 'Image',
            model: 'https://d2rsy2tw36u6t4.cloudfront.net/exercise1.json',
          },
          {
            name: 'Step 3 Name',
            modelClass: 'Step3',
            modelIndex: 2,
            Image: 'Image',
            model:
              'https://modelphysiopal.blob.core.windows.net/exercise3/exercise3.json',
          },
        ],
      },
      timePeriod: 4,
      reps: 3,
    },
    {
      exercise: {
        name: 'Exercise 2',
        steps: [
          {
            name: 'Lie down',
            modelClass: 'LieDown',
            modelIndex: 0,
            Image: 'Image',
            model:
              'https://seniorprojectdemomodel.blob.core.windows.net/startingdemo/startingmodel.json',
          },
          {
            name: 'Raise your knee up',
            modelClass: 'RaiseYourKneeUp',
            modelIndex: 1,
            Image: 'Image',
            model:
              'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
          },
          {
            name: 'Raise your back up',
            modelClass: 'RaiseYourBackUp',
            modelIndex: 0,
            Image: 'Image',
            model:
              'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
          },
        ],
      },
      timePeriod: 5,
      reps: 2,
    },
  ],
};

export default ExerciseSet;
