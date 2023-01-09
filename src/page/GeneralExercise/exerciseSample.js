const ExerciseSet = {
        name: "GeneralSet Set 3",
        description: "adsajldkjsjwqiejaksdjiqw uqnundasdsadsasaiqwncusdasnqwuvusadsiewjasj description",
        musculoskeltalTypes: ["back"],
        functional: false,
        exerciseSet: [
            {
                exercise: {
                    name: "Exercise 1",
                    steps : [
                        {
                          name: 'Lie down',
                          modelClass: 'LieDown',
                          modelIndex: 0,
                          Image: "Image",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/startingdemo/startingmodel.json',
                        },
                        {
                          name: 'Raise your knee up',
                          modelClass: 'RaiseYourKneeUp',
                          modelIndex: 1,
                          Image: "Image",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
                        },
                        {
                          name: 'Raise your back up',
                          modelClass: 'RaiseYourBackUp',
                          modelIndex: 0,
                          Image: "Image",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
                        },
                      ]
                },
                timePeriod: 4,
                reps: 3,
                
            },
            {
                exercise: {
                    name: "Exercise 2",
                    steps : [
                        {
                          name: 'Lie down',
                          modelClass: 'LieDown',
                          modelIndex: 0,
                          Image: "Image",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/startingdemo/startingmodel.json',
                        },
                        {
                          name: 'Raise your knee up',
                          modelClass: 'RaiseYourKneeUp',
                          modelIndex: 1,
                          Image: "Image",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
                        },
                        {
                          name: 'Raise your back up',
                          modelClass: 'RaiseYourBackUp',
                          modelIndex: 0,
                          Image: "Image",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
                        },
                      ]
                },
                timePeriod: 5,
                reps: 2,
            }
        ]
}

export default ExerciseSet