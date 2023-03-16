const ExerciseSet = {
  name: 'GeneralSet Set 3',
  description:
    'adsajldkjsjwqiejaksdjiqw uqnundasdsadsasaiqwncusdasnqwuvusadsiewjasj description',
  musculoskeltalTypes: ['back'],
  functional: false,
  exerciseSet: [
    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 11 : Wall push-up',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 11 : ท่าดันกำแพงกางแขน 90 องศา',
            description: '',
            audio: 'https://d1fn61xo5s4ajl.cloudfront.net/exercise11-th.mp3',
          },
        },
        accuracy: 0.97,
        steps: [
          {
            details: {
              en_description: {
                name: 'Begin in a standing upright position, and faced the wall',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยืนตรงหันหน้าเข้าหากำแพง',
                description: '',
                audio: 'https://d1fn61xo5s4ajl.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Standing',
            modelIndex: 4,
            image: 'https://d1fn61xo5s4ajl.cloudfront.net/Step1.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Place hands on a wall shoulder-width apart and at chest level',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'วางมือบนกำแพงโดยแขนอยู่ระดับอก',
                description: '',
                audio: 'https://d1fn61xo5s4ajl.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'Step2',
            modelIndex: 1,
            image: 'https://d1fn61xo5s4ajl.cloudfront.net/Step2.png',
            model: 'https://d1fn61xo5s4ajl.cloudfront.net/exercise11.json',
            timer: false,
          },
          {
            details: {
              en_description: {
                name: 'Bend your elbows and lowering your upper body toward the wall (elbows bent 90 degrees)',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'งอข้อศอกจากนั้นดันตัวไปข้างหน้าเข้าหากำแพง',
                description: '',
                audio: 'https://d1fn61xo5s4ajl.cloudfront.net/step3-th.mp3',
              },
            },
            modelClass: 'Step3',
            modelIndex: 2,
            image: 'https://d1fn61xo5s4ajl.cloudfront.net/Step3.png',
            model: 'https://d1fn61xo5s4ajl.cloudfront.net/exercise11.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 2,
    },
    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 19 : Air chair Squat',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 19 : ท่านั่งเก้าอี้ลม',
            description: '',
            audio: 'https://d1tadatfsfhxob.cloudfront.net/exercise19-th.mp3',
          },
        },
        accuracy: 0.9,
        steps: [
          {
            details: {
              en_description: {
                name: 'Begin in a standing upright position, by your head, shoulder blades and buttocks touching a wall',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยืนตรงหันหน้าเข้าหากำแพง',
                description: '',
                audio: 'https://d1tadatfsfhxob.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Standing',
            modelIndex: 4,
            image: 'https://d1tadatfsfhxob.cloudfront.net/Step1.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Bend your knees 90 degrees like sitting on the chair',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'งอเข่าลง 90 องศาเหมือนกำลังนั่งบนเก้าอี้',
                description: '',
                audio: 'https://d1tadatfsfhxob.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'step2',
            modelIndex: 1,
            image: 'https://d1tadatfsfhxob.cloudfront.net/Step2.png',
            model: 'https://d1tadatfsfhxob.cloudfront.net/exercise19.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 2,
    },
    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 21 : Seated forward bend',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 21 : ท่านั่งยืดเหยียดกล้ามเนื้อขาด้านหน้า',
            description: '',
            audio: 'https://d1fakqhcjcs9xp.cloudfront.net/exercise21-th.mp3',
          },
        },
        accuracy: 0.95,
        steps: [
          {
            details: {
              en_description: {
                name: 'Sitting',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'นั่งตรงบนเสื่อ',
                description: '',
                audio: 'https://dhbrmd5h9gldg.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Sitting',
            modelIndex: 3,
            image: 'https://d2dg13aszggr0f.cloudfront.net/Sitting-Image.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Begin seated with your legs straight in front of you.',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'นั่งเหยียดขาตรงไปด้านหน้า',
                description: '',
                audio: 'https://d1fakqhcjcs9xp.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'step1',
            modelIndex: 0,
            image: 'https://d1fakqhcjcs9xp.cloudfront.net/Step1.png',
            model: 'https://d1fakqhcjcs9xp.cloudfront.net/exercise21.json',
            timer: false,
          },
          {
            details: {
              en_description: {
                name: 'Hinge at your hips to lean forward, and walk your hands as far as you can.',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'โค้งตัวลงไปด้านหน้าเพื่อแตะปลายเท้า',
                description: '',
                audio: 'https://d1fakqhcjcs9xp.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'step2',
            modelIndex: 1,
            image: 'https://d1fakqhcjcs9xp.cloudfront.net/Step2.png',
            model: 'https://d1fakqhcjcs9xp.cloudfront.net/exercise21.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 2,
    },

    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 13 : Extend your arms and raise them above your head',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 13 : ท่ากางแขนออกและชูแขนขึ้นเหนือศีรษะ',
            description: '',
            audio: 'https://dc8wg3s1pinxl.cloudfront.net/exercise13-th.mp3',
          },
        },
        accuracy: 0.99,
        steps: [
          {
            details: {
              en_description: {
                name: 'Begin in a standing upright position',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยืนตรงบนเสื่อ',
                description: '',
                audio: 'https://dc8wg3s1pinxl.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Standing',
            modelIndex: 4,
            image: 'https://dc8wg3s1pinxl.cloudfront.net/Step1.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Extend your arm with 90 degrees elbow',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'กางแขนออก 90 องศา',
                description: '',
                audio: 'https://dc8wg3s1pinxl.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'Step2',
            modelIndex: 1,
            image: 'https://dc8wg3s1pinxl.cloudfront.net/Step2.png',
            model: 'https://dc8wg3s1pinxl.cloudfront.net/exercise13.json',
            timer: false,
          },
          {
            details: {
              en_description: {
                name: 'Raise your hand above your head',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ชูแขนขึ้นเหนือศีรษะ',
                description: '',
                audio: 'https://dc8wg3s1pinxl.cloudfront.net/step3-th.mp3',
              },
            },
            modelClass: 'Step3',
            modelIndex: 2,
            image: 'https://dc8wg3s1pinxl.cloudfront.net/Step3.png',
            model: 'https://dc8wg3s1pinxl.cloudfront.net/exercise13.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 1,
    },
    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 18 : Wall push-up with stepping one leg',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 18 : ท่าดันกำแพงโดยก้าวขาหนึ่งข้าง',
            description: '',
            audio: 'https://dvy8rc2ju81d4.cloudfront.net/exercise18-th.mp3',
          },
        },
        accuracy: 0.97,
        steps: [
          {
            details: {
              en_description: {
                name: 'Begin in a standing upright position, and faced the wall',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยืนตรงหันหน้าเข้าหากำแพง',
                description: '',
                audio: 'https://dvy8rc2ju81d4.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Standing',
            modelIndex: 4,
            image: 'https://dvy8rc2ju81d4.cloudfront.net/Step1.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Place hands on a wall shoulder-width apart and at chest level',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'วางมือบนกำแพงโดยแขนอยู่ระดับอก',
                description: '',
                audio: 'https://dvy8rc2ju81d4.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'step2',
            modelIndex: 1,
            image: 'https://dvy8rc2ju81d4.cloudfront.net/Step2.png',
            model: 'https://dvy8rc2ju81d4.cloudfront.net/exercise18.json',
            timer: false,
          },
          {
            details: {
              en_description: {
                name: 'Step your left leg and push the wall',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ก้าวขาซ้ายไปข้างหน้า 1 ก้าว จากนั้นดันตัวเข้าหากำแพง',
                description: '',
                audio: 'https://dvy8rc2ju81d4.cloudfront.net/step3-th.mp3',
              },
            },
            modelClass: 'step3-left-front',
            modelIndex: 2,
            image: 'https://dvy8rc2ju81d4.cloudfront.net/Step3-left.png',
            model: 'https://dvy8rc2ju81d4.cloudfront.net/exercise18.json',
            timer: true,
          },
          {
            details: {
              en_description: {
                name: 'Step your right leg and push the wall',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ก้าวขาขวาไปข้างหน้า 1 ก้าว จากนั้นดันตัวเข้าหากำแพง',
                description: '',
                audio: 'https://dvy8rc2ju81d4.cloudfront.net/step4-th.mp3',
              },
            },
            modelClass: 'step3-right-front',
            modelIndex: 3,
            image: 'https://dvy8rc2ju81d4.cloudfront.net/Step3-right.png',
            model: 'https://dvy8rc2ju81d4.cloudfront.net/exercise18.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 1,
    },
    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 19 : Air chair Squat',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 19 : ท่านั่งเก้าอี้ลม',
            description: '',
            audio: 'https://d1tadatfsfhxob.cloudfront.net/exercise19-th.mp3',
          },
        },
        accuracy: 0.9,
        steps: [
          {
            details: {
              en_description: {
                name: 'Begin in a standing upright position, by your head, shoulder blades and buttocks touching a wall',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยืนตรงหันหน้าเข้าหากำแพง',
                description: '',
                audio: 'https://d1tadatfsfhxob.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Standing',
            modelIndex: 4,
            image: 'https://d1tadatfsfhxob.cloudfront.net/Step1.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Bend your knees 90 degrees like sitting on the chair',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'งอเข่าลง 90 องศาเหมือนกำลังนั่งบนเก้าอี้',
                description: '',
                audio: 'https://d1tadatfsfhxob.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'step2',
            modelIndex: 1,
            image: 'https://d1tadatfsfhxob.cloudfront.net/Step2.png',
            model: 'https://d1tadatfsfhxob.cloudfront.net/exercise19.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 1,
    },
    {
      exercise: {
        details: {
          en_description: {
            name: 'Exercise 20 : The simple quad stretch',
            description: '',
            audio: 'sdad',
          },
          th_description: {
            name: 'ท่าออกกำลังกายที่ 20 : ท่ายืนยืดเหยียดกล้ามเนื้อขาด้านหน้า',
            description: '',
            audio: 'https://dhbrmd5h9gldg.cloudfront.net/exercise20-th.mp3',
          },
        },
        accuracy: 0.95,
        steps: [
          {
            details: {
              en_description: {
                name: 'Begin in a standing upright position',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยืนตรงบนเสื่อ',
                description: '',
                audio: 'https://dhbrmd5h9gldg.cloudfront.net/step1-th.mp3',
              },
            },
            modelClass: 'Standing',
            modelIndex: 4,
            image: 'https://dhbrmd5h9gldg.cloudfront.net/Step1.png',
            model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
            timer: false,
            // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
          },
          {
            details: {
              en_description: {
                name: 'Bend your left knee to backside, using your left hand to grab your left foot. You can hold a wall by your right hand.',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยกขาซ้ายไปด้านหลัง ใช้มือซ้ายจับเท้าซ้ายไว้ และสามารถใช้มืออีกข้างจับกำแพงได้',
                description: '',
                audio: 'https://dhbrmd5h9gldg.cloudfront.net/step2-th.mp3',
              },
            },
            modelClass: 'step2-left-leg',
            modelIndex: 1,
            image: 'https://dhbrmd5h9gldg.cloudfront.net/Step2-left.png',
            model: 'https://dhbrmd5h9gldg.cloudfront.net/exercise20.json',
            timer: true,
          },
          {
            details: {
              en_description: {
                name: 'Bend your right knee to backside, using your right hand to grab your right foot. You can hold a wall by your left hand.',
                description: '',
                audio: 'sdad',
              },
              th_description: {
                name: 'ยกขาขวาไปด้านหลัง ใช้มือซ้ายจับเท้าขวาไว้ และสามารถใช้มืออีกข้างจับกำแพงได้',
                description: '',
                audio: 'https://dhbrmd5h9gldg.cloudfront.net/step3-th.mp3',
              },
            },
            modelClass: 'step2-right-leg',
            modelIndex: 2,
            image: 'https://dhbrmd5h9gldg.cloudfront.net/Step2-right.png',
            model: 'https://dhbrmd5h9gldg.cloudfront.net/exercise20.json',
            timer: true,
          },
        ],
      },
      timePeriod: 10,
      reps: 1,
    },
    // {
    //   exercise: {
    //     details: {
    //       en_description: {
    //         name: 'Exercise 12 : Hands on Head',
    //         description: '',
    //         audio: 'sdad',
    //       },
    //       th_description: {
    //         name: 'ท่าออกกำลังกายที่ 1 : ท่ามือดันศีรษะ',
    //         description: '',
    //         audio: 'https://d320tre53hbgrb.cloudfront.net/exercise1-th.mp3',
    //       },
    //     },
    //     accuracy: 0.99,
    //     steps: [
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Begin in a standing upright position',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'ยืนตรงบนเสื่อ',
    //             description: '',
    //             audio: 'https://d320tre53hbgrb.cloudfront.net/step1-th.mp3',
    //           },
    //         },
    //         modelClass: 'Standing',
    //         modelIndex: 4,
    //         image: 'https://d320tre53hbgrb.cloudfront.net/Step1.png',
    //         model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
    //         timer: false,
    //         // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
    //       },
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Place your left hand on the left side of head (keep your neck centered and chin in)',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'วางมือด้านซ้ายบนศีรษะด้านซ้าย',
    //             description: '',
    //             audio: 'https://d320tre53hbgrb.cloudfront.net/step2-th.mp3',
    //           },
    //         },
    //         modelClass: 'step2-left',
    //         modelIndex: 1,
    //         image: 'https://d320tre53hbgrb.cloudfront.net/Step2-left.png',
    //         model: 'https://d320tre53hbgrb.cloudfront.net/exercise12.json',
    //         timer: true,
    //       },
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Place your right hand on the right side of head (keep your neck centered and chin in)',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'วางมือด้านขวาบนศีรษะด้านขวา',
    //             description: '',
    //             audio: 'https://d320tre53hbgrb.cloudfront.net/step3-th.mp3',
    //           },
    //         },
    //         modelClass: 'step2-right',
    //         modelIndex: 2,
    //         image: 'https://d320tre53hbgrb.cloudfront.net/Step2-right.png',
    //         model: 'https://d320tre53hbgrb.cloudfront.net/exercise12.json',
    //         timer: true,
    //       },
    //     ],
    //   },
    //   timePeriod: 10,
    //   reps: 1,
    // },
    // {
    //   exercise: {
    //     details: {
    //       en_description: {
    //         name: 'Exercise 14 : Hands crossed behind back using a cloth',
    //         description: '',
    //         audio: 'sdad',
    //       },
    //       th_description: {
    //         name: 'ท่าออกกำลังกายที่ 14 : ท่ามือไขว้หลังโดยใช้ผ้า',
    //         description: '',
    //         audio: 'https://d23te460jqw1gf.cloudfront.net/exercise13-th.mp3',
    //       },
    //     },
    //     accuracy: 0.8,
    //     steps: [
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Begin in a standing upright position',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'ยืนตรงบนเสื่อ',
    //             description: '',
    //             audio: 'https://d23te460jqw1gf.cloudfront.net/step1-th.mp3',
    //           },
    //         },
    //         modelClass: 'Standing',
    //         modelIndex: 4,
    //         image: 'https://d23te460jqw1gf.cloudfront.net/Step1.png',
    //         model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
    //         timer: false,
    //         // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
    //       },
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Hold a top cloth by your left hand and a bottom cloth by your right hand, behind your back',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'ใช้มือซ้ายจับปลายเชือกด้านบน และมือขวาจับปลายเชือกด้านล่างไว้ด้านหลัง',
    //             description: '',
    //             audio: 'https://d23te460jqw1gf.cloudfront.net/step2-th.mp3',
    //           },
    //         },
    //         modelClass: 'step2-left-base',
    //         modelIndex: 1,
    //         image: 'https://d23te460jqw1gf.cloudfront.net/Step2-left-base.png',
    //         model: 'https://d23te460jqw1gf.cloudfront.net/exercise14.json',
    //         timer: false,
    //       },
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Raise your left arm up',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'ยกมือด้านซ้ายขึ้นให้เชือกตึง',
    //             description: '',
    //             audio: 'https://d23te460jqw1gf.cloudfront.net/step3-th.mp3',
    //           },
    //         },
    //         modelClass: 'step3-left-up',
    //         modelIndex: 3,
    //         image: 'https://d23te460jqw1gf.cloudfront.net/Step3-left-up.png',
    //         model: 'https://d23te460jqw1gf.cloudfront.net/exercise14.json',
    //         timer: true,
    //       },
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Hold a top cloth by your right hand and a bottom cloth by your left hand, behind your back',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'ใช้มือขวาจับปลายเชือกด้านบน และมือซ้ายจับปลายเชือกด้านล่างไว้ด้านหลัง',
    //             description: '',
    //             audio: 'https://d23te460jqw1gf.cloudfront.net/step4-th.mp3',
    //           },
    //         },
    //         modelClass: 'step2-right-base',
    //         modelIndex: 2,
    //         image: 'https://d23te460jqw1gf.cloudfront.net/Step2-right-base.png',
    //         model: 'https://d23te460jqw1gf.cloudfront.net/exercise14.json',
    //         timer: false,
    //       },
    //       {
    //         details: {
    //           en_description: {
    //             name: 'Raise your right arm up',
    //             description: '',
    //             audio: 'sdad',
    //           },
    //           th_description: {
    //             name: 'ยกมือด้านขวาขึ้นให้เชือกตึง',
    //             description: '',
    //             audio: 'https://d23te460jqw1gf.cloudfront.net/step5-th.mp3',
    //           },
    //         },
    //         modelClass: 'step3-right-up',
    //         modelIndex: 4,
    //         image: 'https://d23te460jqw1gf.cloudfront.net/Step3-right-up.png',
    //         model: 'https://d23te460jqw1gf.cloudfront.net/exercise14.json',
    //         timer: true,
    //       },
    //     ],
    //   },
    //   timePeriod: 10,
    //   reps: 1,
    // },
  ],
};

// const ExerciseSet = {
//   name: 'GeneralSet Set 3',
//   description:
//     'adsajldkjsjwqiejaksdjiqw uqnundasdsadsasaiqwncusdasnqwuvusadsiewjasj description',
//   musculoskeltalTypes: ['back'],
//   functional: false,
//   exerciseSet: [
//     {
//       exercise: {
//         details: {
//           en_description: {
//             name: 'Exercise 1 : Single knee to chest',
//             description: '',
//             audio: 'sdad',
//           },
//           th_description: {
//             name: 'ท่าออกกำลังกายที่ 1 : ท่ากอดเข่าหนึ่งข้างมาชิด-อก',
//             description: '',
//             audio: 'https://d2rsy2tw36u6t4.cloudfront.net/exercise1-th.mp3',
//           },
//         },
//         accuracy: 0.93,
//         steps: [
//           {
//             details: {
//               en_description: {
//                 name: 'Begin lying on your back',
//                 description: '',
//                 audio: 'sdad',
//               },
//               th_description: {
//                 name: 'นอนหงายลงบนเสื่อ',
//                 description: '',
//                 audio: 'https://d2rsy2tw36u6t4.cloudfront.net/step1-th.mp3',
//               },
//             },
//             modelClass: 'Lie-down',
//             modelIndex: 1,
//             image: 'https://d2dg13aszggr0f.cloudfront.net/Lie-down-Image.png',
//             model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//             timer: false,
//             // 'https://modelphysiopal.blob.core.windows.net/starting/starting.json',
//           },
//           {
//             details: {
//               en_description: {
//                 name: 'Bend your legs and put your feet on a mat',
//                 description: '',
//                 audio: 'sdad',
//               },
//               th_description: {
//                 name: 'ชันขาทั้งสองข้างขึ้นมาและวางเท้าลงบนเสื่อ',
//                 description: '',
//                 audio: 'https://d2rsy2tw36u6t4.cloudfront.net/step2-th.mp3',
//               },
//             },
//             modelClass: 'Step2',
//             modelIndex: 1,
//             image: 'https://d2rsy2tw36u6t4.cloudfront.net/Step2.png',
//             model: 'https://d2rsy2tw36u6t4.cloudfront.net/exercise1.json',
//             timer: false,
//           },
//           {
//             details: {
//               en_description: {
//                 name: 'Bring a left leg to body, pull a left knee, then allow it to return to the floor',
//                 description: '',
//                 audio: 'sdad',
//               },
//               th_description: {
//                 name: 'งอขาข้างซ้ายขึ้นมาหาลำตัวและใช้มือดึงไว้',
//                 description: '',
//                 audio:
//                   'https://d2rsy2tw36u6t4.cloudfront.net/step3-left-th.mp3',
//               },
//             },
//             modelClass: 'Step3-left',
//             modelIndex: 2,
//             image: 'https://d2rsy2tw36u6t4.cloudfront.net/Step3-left.png',
//             model: 'https://d2rsy2tw36u6t4.cloudfront.net/exercise1.json',
//             timer: true,
//           },
//           {
//             details: {
//               en_description: {
//                 name: 'Bring a right leg to body, pull a right knee, then allow it to return to the floor',
//                 description: '',
//                 audio: 'sdad',
//               },
//               th_description: {
//                 name: 'งอขาข้างขวาขึ้นมาหาลำตัวและใช้มือดึงไว้',
//                 description: '',
//                 audio:
//                   'https://d2rsy2tw36u6t4.cloudfront.net/step3-right-th.mp3',
//               },
//             },
//             modelClass: 'Step3-right',
//             modelIndex: 3,
//             image: 'https://d2rsy2tw36u6t4.cloudfront.net/Step3-right.png',
//             model: 'https://d2rsy2tw36u6t4.cloudfront.net/exercise1.json',
//             timer: true,
//           },
//         ],
//       },
//       timePeriod: 5,
//       reps: 1,
//     },
// {
//   exercise: {
//     details: {
//       en_description: {
//         name: 'Exercise 2 : Knees to chest',
//         description: '',
//       },
//       th_description: {
//         name: 'ท่าออกกำลังกายที่ 2 : ท่าดึงหัวเข่า',
//         description: '',
//       },
//     },
//     accuracy: 0.93,
//     steps: [
//       {
//         details: {
//           en_description: {
//             name: 'Begin lying on your back',
//             description: '',
//           },
//           th_description: {
//             name: 'นอนหงายลงบนเสื่อ',
//             description: '',
//             audio: 'https://d2uacysxmpqola.cloudfront.net/step1-th.mp3',
//           },
//         },
//         modelClass: 'Lie-down',
//         modelIndex: 1,
//         image: 'https://d2dg13aszggr0f.cloudfront.net/Lie-down-Image.png',
//         model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//         timer: false,
//       },
//       {
//         details: {
//           en_description: {
//             name: 'Bend your legs and put your feet on a mat',
//             description: '',
//           },
//           th_description: {
//             name: 'ชันขาทั้งสองข้างขึ้นมาและวางเท้าลงบนเสื่อ',
//             description: '',
//             audio: 'https://d2uacysxmpqola.cloudfront.net/step2-th.mp3',
//           },
//         },
//         modelClass: 'Step2',
//         modelIndex: 1,
//         image: 'https://d2uacysxmpqola.cloudfront.net/Step2.png',
//         model: 'https://d2uacysxmpqola.cloudfront.net/exercise2.json',
//         timer: false,
//       },
//       {
//         details: {
//           en_description: {
//             name: 'Hug the knees to chest',
//             description: '',
//           },
//           th_description: {
//             name: 'กอดเท่าทั้งสองข้างไว้บริเวณอก',
//             description: '',
//             audio: 'https://d2uacysxmpqola.cloudfront.net/step3-th.mp3',
//           },
//         },
//         modelClass: 'Step3',
//         modelIndex: 2,
//         image: 'https://d2uacysxmpqola.cloudfront.net/Step3.png',
//         model: 'https://d2uacysxmpqola.cloudfront.net/exercise2.json',
//         timer: true,
//       },
//     ],
//   },
//   timePeriod: 10,
//   reps: 2,
// },
//     // {
//     //   exercise: {
//     //     details: {
//     //       en_description: {
//     //         name: 'Exercise 3 : Glute Bridge',
//     //         description: '',
//     //       },
//     //       th_description: {
//     //         name: 'ท่าออกกำลังกายที่ 3 : ท่าสะพานโค้ง',
//     //         description: '',
//     //       },
//     //     },
//     //     accuracy: 0.93,
//     //     steps: [
//     //       {
//     //         details: {
//     //           en_description: {
//     //             name: 'Begin lying on your back',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'นอนหงายลงบนเสื่อ',
//     //             description: '',
//     //             audio: 'https://d2ntn7882llrhc.cloudfront.net/step1-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'Lie-down',
//     //         modelIndex: 1,
//     //         image: 'https://d2dg13aszggr0f.cloudfront.net/Lie-down-Image.png',
//     //         model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//     //         timer: false,
//     //       },
//     //       {
//     //         details: {
//     //           en_description: {
//     //             name: 'Bend your legs and put your feet on a mat',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'ชันขาทั้งสองข้างขึ้นมาและวางเท้าลงบนเสื่อ',
//     //             description: '',
//     //             audio: 'https://d2ntn7882llrhc.cloudfront.net/step2-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'Step2',
//     //         modelIndex: 1,
//     //         image: 'https://d2ntn7882llrhc.cloudfront.net/Step2.png',
//     //         model: 'https://d2ntn7882llrhc.cloudfront.net/exercise3.json',
//     //         timer: false,
//     //       },
//     //       {
//     //         details: {
//     //           en_description: {
//     //             name: 'Tighten the muscles in your stomach, and raise your hips off the floor',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'พยายามเกร็งหน้าท้อง และยกสะโพกขึ้น',
//     //             description: '',
//     //             audio: 'https://d2ntn7882llrhc.cloudfront.net/step3-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'Step3',
//     //         modelIndex: 2,
//     //         image: 'https://d2ntn7882llrhc.cloudfront.net/Step3.png',
//     //         model: 'https://d2ntn7882llrhc.cloudfront.net/exercise3.json',
//     //         timer: true,
//     //       },
//     //     ],
//     //   },
//     //   timePeriod: 10,
//     //   reps: 2,
//     // },
//     // {
//     //   exercise: {
//     //     details: {
//     //       en_description: {
//     //         name: 'Exercise 4 : Child’s pose',
//     //         description: '',
//     //       },
//     //       th_description: {
//     //         name: 'ท่าออกกำลังกายที่ 4 : ท่าเด็ก',
//     //         description: '',
//     //       },
//     //     },
//     //     accuracy: 0.93,
//     //     steps: [
//     //       {
//     //         details: {
//     //           en_description: {
//     //             name: 'Kneel on the floor',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'นั่งคุกเข่าลงบนเสื่อ',
//     //             description: '',
//     //             audio: 'https://d3s9y2xqam9s7m.cloudfront.net/step1-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'Kneel-on-the-floor',
//     //         modelIndex: 0,
//     //         image: 'https://d3s9y2xqam9s7m.cloudfront.net/Step1.png',
//     //         model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//     //         timer: false,
//     //       },
//     //       {
//     //         details: {
//     //           en_description: {
//     //             name: 'Fold forward, and walk your hands out toward the front of your mat',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'ก้มตัวไปด้านหน้าและเหยียดแขนทั้งสองข้างไปเหนือศีรษะ',
//     //             description: '',
//     //             audio: 'https://d3s9y2xqam9s7m.cloudfront.net/step2-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'step2',
//     //         modelIndex: 1,
//     //         image: 'https://d3s9y2xqam9s7m.cloudfront.net/Step2.png',
//     //         model: 'https://d3s9y2xqam9s7m.cloudfront.net/exercise4.json',
//     //         timer: true,
//     //       },
//     //     ],
//     //   },
//     //   timePeriod: 10,
//     //   reps: 2,
//     // },
//     // {
//     //   exercise: {
//     //     details: {
//     //       en_description: {
//     //         name: 'Exercise 5: Prone press up with arms straight',
//     //         description: '',
//     //       },
//     //       th_description: {
//     //         name: 'ท่าออกกำลังกายที่ 5 : ท่านอนคว่ำใช้ฝ่ามือดันตัวขึ้น',
//     //         description: '',
//     //       },
//     //     },
//     //     steps: [
//     //       {
//     //         name: 'Begin lying on your stomach or prone',
//     //         details: {
//     //           en_description: {
//     //             name: 'Begin lying on your stomach or prone',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'นอนคว่ำลงบนเสื่อ',
//     //             description: '',
//     //             audio: 'https://d1mt8fkw3ndx7r.cloudfront.net/step1-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'Prone',
//     //         modelIndex: 2,
//     //         image: 'https://d1mt8fkw3ndx7r.cloudfront.net/Step1.png',
//     //         model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//     //         timer: false,
//     //       },
//     //       {
//     //         details: {
//     //           en_description: {
//     //             name: 'Push against the floor with you hands, bending your back upward',
//     //             description: '',
//     //           },
//     //           th_description: {
//     //             name: 'ใช้มือดันตัวขึ้นโดยการงอหลัง',
//     //             description: '',
//     //             audio: 'https://d1mt8fkw3ndx7r.cloudfront.net/step2-th.mp3',
//     //           },
//     //         },
//     //         modelClass: 'step2',
//     //         modelIndex: 1,
//     //         image: 'https://d1mt8fkw3ndx7r.cloudfront.net/Step2.png',
//     //         model: 'https://d1mt8fkw3ndx7r.cloudfront.net/exercise6.json',
//     //         timer: true,
//     //       },
//     //     ],
//     //   },
//     //   timePeriod: 10,
//     //   reps: 5,
//     // },
//     {
//       exercise: {
//         details: {
//           en_description: {
//             name: 'Exercise 5: Prone press up on elbows',
//             description: '',
//           },
//           th_description: {
//             name: 'ท่าออกกำลังกายที่ 5 : ท่านอนคว่ำชันข้อศอกขึ้น',
//             description: '',
//           },
//         },
//         accuracy: 0.99,
//         steps: [
//           {
//             details: {
//               en_description: {
//                 name: 'Begin lying on your stomach or prone',
//                 description: '',
//               },
//               th_description: {
//                 name: 'นอนคว่ำลงบนเสื่อ',
//                 description: '',
//                 audio: 'https://d2itawut3ltlzy.cloudfront.net/step1-th.mp3',
//               },
//             },
//             modelClass: 'Prone',
//             modelIndex: 2,
//             image: 'https://d2itawut3ltlzy.cloudfront.net/Step1.png',
//             model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//             timer: false,
//           },
//           {
//             details: {
//               en_description: {
//                 name: 'Push up on your elbows, bending your back upward',
//                 description: '',
//               },
//               th_description: {
//                 name: 'ชันข้อศอกขึ้นเพื่อดันตัวขึ้นโดยการงอหลัง',
//                 description: '',
//                 audio: 'https://d2itawut3ltlzy.cloudfront.net/step2-th.mp3',
//               },
//             },
//             modelClass: 'step2',
//             modelIndex: 1,
//             image: 'https://d2itawut3ltlzy.cloudfront.net/Step2.png',
//             model: 'https://d2itawut3ltlzy.cloudfront.net/exercise7.json',
//             timer: true,
//           },
//         ],
//       },
//       timePeriod: 10,
//       reps: 2,
//     },
//     {
//       exercise: {
//         details: {
//           en_description: {
//             name: 'Exercise 6: Stand with your hands pushing your hips forward',
//             description: '',
//           },
//           th_description: {
//             name: 'ท่าออกกำลังกายที่ 6 : ท่ายืนใช้มือดันสะโพกไปข้างหน้า',
//             description: '',
//           },
//         },
//         accuracy: 0.99,
//         steps: [
//           {
//             details: {
//               en_description: {
//                 name: 'Begin in a standing upright position',
//                 description: '',
//               },
//               th_description: {
//                 name: 'ยืนตรงบนเสื่อ',
//                 description: '',
//                 audio: 'https://d1u6aycwn9c0dw.cloudfront.net/step1-th.mp3',
//               },
//             },
//             modelClass: 'Standing',
//             modelIndex: 4,
//             image: 'https://d1u6aycwn9c0dw.cloudfront.net/Step1.png',
//             model: 'https://d1gx22tbnl8i3v.cloudfront.net/startingv2.json',
//             timer: false,
//           },
//           {
//             details: {
//               en_description: {
//                 name: 'Bend your arm to push your hips forward',
//                 description: '',
//               },
//               th_description: {
//                 name: 'งอแขนไปด้านหลังและใช้มือดันสะโพกมาด้านหน้า',
//                 description: '',
//                 audio: 'https://d1u6aycwn9c0dw.cloudfront.net/step2-th.mp3',
//               },
//             },
//             modelClass: 'step2',
//             modelIndex: 1,
//             image: 'https://d1u6aycwn9c0dw.cloudfront.net/Step2.png',
//             model: 'https://d1u6aycwn9c0dw.cloudfront.net/exercise8.json',
//             timer: true,
//           },
//         ],
//       },
//       timePeriod: 10,
//       reps: 2,
//     },
//   ],
// };

export default ExerciseSet;
