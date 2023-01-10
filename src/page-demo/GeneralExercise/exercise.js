const ExerciseSet = {
        name: "GeneralSet Set 3",
        description: "adsajldkjsjwqiejaksdjiqw uqnundasdsadsasaiqwncusdasnqwuvusadsiewjasj description",
        musculoskeltalTypes: ["back"],
        functional: false,
        exerciseSet: [
            {
                exercise: {
                    name: "Bridge",
                    steps : [
                        {
                          name: 'Lie down',
                          modelClass: 'LieDown',
                          modelIndex: 0,
                          Image: "https://cdni.iconscout.com/illustration/premium/thumb/bridge-pose-3503127-2965793.png",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/starting/starting.json',
                        },
                        {
                          name: 'Raise your knee up',
                          modelClass: 'RaiseYourKneeUp',
                          modelIndex: 1,
                          Image: "https://cdni.iconscout.com/illustration/premium/thumb/bridge-pose-3503127-2965793.png",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
                        },
                        {
                          name: 'Raise your back up',
                          modelClass: 'RaiseYourBackUp',
                          modelIndex: 0,
                          Image: "https://cdni.iconscout.com/illustration/premium/thumb/bridge-pose-3503127-2965793.png",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json',
                        },
                      ]
                },
                timePeriod: 5,
                reps: 3,
                
            },
            {
                exercise: {
                    name: "Knees To Chese",
                    steps : [
                        {
                          name: 'Lie down',
                          modelClass: 'LieDown',
                          modelIndex: 0,
                          Image: "https://cdn3.iconfinder.com/data/icons/yoga-poses-2-3/256/Knees-to-chest-pose-yoga-512.png",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/starting/starting.json',
                        },
                        {
                          name: 'Raise your knee up',
                          modelClass: 'RaiseYourKneeUp',
                          modelIndex: 1,
                          Image: "https://cdn3.iconfinder.com/data/icons/yoga-poses-2-3/256/Knees-to-chest-pose-yoga-512.png",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/exercise2/exercise2.json',
                        },
                        {
                          name: 'Raise your back up',
                          modelClass: 'RaiseYourBackUp',
                          modelIndex: 2,
                          Image: "https://cdn3.iconfinder.com/data/icons/yoga-poses-2-3/256/Knees-to-chest-pose-yoga-512.png",
                          model:
                            'https://seniorprojectdemomodel.blob.core.windows.net/exercise2/exercise2.json',
                        },
                      ]
                },
                timePeriod: 5,
                reps: 2,
            }
        ]
}

export default ExerciseSet