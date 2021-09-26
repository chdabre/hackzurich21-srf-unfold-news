/* eslint-disable func-names */

export default function (server) {
  const widgetA = server.create('widget', {
    type: 'article',
    title: 'Überschwemmungen',
    subtitle: 'Berichterstattung',
    span: '12',
    data: {
      imageUrl: '/media/media01.png',
      text: 'Aufgrund des Hochwassers wird die Schifffahrt auf dem Vierwaldstättersee ab morgen Mittwoch bis mindestens Samstag, 17. Juli, eingestellt. Das teilt die Schifffahrt-Gesellschaft auf Ihrer Website mit\nEbenfalls eingestellt wird die Schifffahrt vorübergehend auf dem Rhein in Basel, inklusive Fährbetrieb. Das Rheinschwimmen beider Rheinfelden wird vom 18. Juli auf den 8. August verschoben. Für den Vierwaldstättersee hat der Bund die Hochwasser-Gefahrenstufe 4 ausgerufen.'
    },
    actions: [
      server.create('widget', {
        type: 'video',
        title: 'Vierwaldstättersee',
        subtitle: 'Tagesschau Spezial',
        span: '6',
        data: {
          text: 'Guy Parmelin beobachtet die Situation am Vierwaldstättersee kritisch. Schutzmassnahmen wurden getroffen.',
          imageUrl: '/media/media02.png',
          videoUrl: '/media/media03.mp4',
        },
        actions: [
          server.create('widget', {
            type: 'audio',
            title: 'Guy Parmelin',
            subtitle: 'Echo',
            data: {
              imageUrl: '/media/media04.png',
              audioUrl: '/media/media05.wav',
            },
            span: '6',
          })
        ]
      }),
      server.create('widget', {
        type: 'article',
        title: 'Wasserstand',
        subtitle: 'Meteo-Daten',
        data: {
          imageUrl: '/media/media02.png',
        },
        span: '6',
      })
    ]
  });

  server.create('story', {
    overline: 'Unwetter + Schifffahrt',
    headline: 'Schifffahrt auf Vierwaldstättersee und Rhein eingestellt',
    actions: [widgetA],
  });

  server.create('story', {
    overline: 'CORONA + FREIHEIT',
    headline: '“Die Geschichte wiederholt sich immer zweimal - das erste Mal als Tragödie und das zweite Mal als Farce.”',
    subtitle: 'Karl Marx zum Thema Ueli Maurer trägt Freiheitstrychler-Shirt',
    actions: [
      server.create('widget', {
        type: 'article',
        title: 'Wer sind die Freiheitstrychler?',
        span: '12',
        data: {
          text: '',
        },
      }),
      server.create('widget', {
        type: 'article',
        title: 'Karl Marx',
        span: '6',
        data: {
          text: '',
        },
      })
    ],
  });
}
