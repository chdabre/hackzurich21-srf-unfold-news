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
                    videoUrl: '/media/media03.mp4',
                },
                actions: [
                    server.create('widget', {
                        id: 100,
                        type: 'audio',
                        title: 'Guy Parmelin',
                        subtitle: 'Echo',
                        data: {
                            imageUrl: '/media/media04.png',
                            audioUrl: '/media/media05.wav',
                            text: '“Wir hoffen niemand wird verletzt.” - Guy Parmelin, Bundesrat'
                        },
                        span: '6',
                        actions: [
                            server.create('widget', {
                                type: 'article',
                                title: 'Wasserstand',
                                subtitle: 'Meteo-Daten',
                                data: {
                                    imageUrl: '/media/media02.png',
                                    text: 'Vorallem im letzten Monat stieg der Wasserstand extrem an. Seit 1956 wurde nichtmehr so ein hoher Wasserstand im Vierwaldstättersee gemessen.'
                                },
                                span: '6',
                            })
                        ]
                    }),
                    server.create('widget', {
                            type: 'article',
                            title: 'Brücke zu',
                            subtitle: 'Berichterstattung',
                            span: '6',
                            data: {
                                imageUrl: '/media/media06.jpeg',
                                text: 'In der Stadt Luzern ist der Pegel des Vierwaldstättersees in der Nacht von Samstag auf Sonntag unter die kritische Marke von 434.9 Metern gesunken. Seither ist er stetig, aber langsam zurückgegangen. Heute kurz vor Mittag lag der Pegel bei 434.86 Metern über Meer. Die Gefahr vor einer Überschwemmung des Schwanenplatzes ist gebannt. Dennoch gilt für den Vierwaldstättersee weiterhin die höchste Gefahrenstufe 5 und die Schutzmassnahmen werden aufrechterhalten. Die Fussgängerbrücken in der Stadt Luzern werden voraussichtlich am Montag wieder freigegeben.'
                            },
                            actions: [
                                server.create('widget', {
                                    type: 'article',
                                    title: 'Wasserstand',
                                    subtitle: 'Meteo-Daten',
                                    data: {
                                        imageUrl: '/media/media02.png',
                                        text: 'Vorallem im letzten Monat stieg der Wasserstand extrem an. Seit 1956 wurde nichtmehr so ein hoher Wasserstand im Vierwaldstättersee gemessen.'
                                    },
                                    span: '6',
                                }),
                                server.create('widget', {
                                    type: 'audio',
                                    title: 'Kritische Lage',
                                    subtitle: 'Rendez-Vous Beitrag',
                                    data: {
                                        imageUrl: '/media/media07.png',
                                        audioUrl: '/media/20210716_Hochwasserlage_Zentralschweiz.wav',
                                        text: '"Der See ist in der Nacht deutlich angestiegen.” - Guy Parmelin, Bundesrat'
                                    },
                                    span: '6',
                                    actions: [
                                        server.create('widget', {
                                            type: 'article',
                                            title: 'Wasserstand',
                                            subtitle: 'Meteo-Daten',
                                            data: {
                                                imageUrl: '/media/media02.png',
                                                text: 'Vorallem im letzten Monat stieg der Wasserstand extrem an. Seit 1956 wurde nichtmehr so ein hoher Wasserstand im Vierwaldstättersee gemessen.'
                                            },
                                            span: '12',
                                        }),
                                    ]
                                })
                            ]
                        }
                    )
                ]
            }),
            server.create('widget', {
                type: 'article',
                title: 'Wasserstand',
                subtitle: 'Meteo-Daten',
                data: {
                    imageUrl: '/media/media02.png',
                    text: 'Vorallem im letzten Monat stieg der Wasserstand extrem an. Seit 1956 wurde nichtmehr so ein hoher Wasserstand im Vierwaldstättersee gemessen.'
                },
                span: '6',
                actions: [
                    server.create('widget', {
                        type: 'video',
                        title: 'Vierwaldstättersee',
                        subtitle: 'Tagesschau Spezial',
                        span: '6',
                        data: {
                            text: 'Guy Parmelin beobachtet die Situation am Vierwaldstättersee kritisch. Schutzmassnahmen wurden getroffen.',
                            videoUrl: '/media/media03.mp4',
                        },
                        actions:[
                            server.create('widget', {
                                type: 'audio',
                                title: 'Kritische Lage',
                                subtitle: 'Rendez-Vous Beitrag',
                                data: {
                                    imageUrl: '/media/media07.png',
                                    audioUrl: '/media/20210716_Hochwasserlage_Zentralschweiz.wav',
                                    text: '"Der See ist in der Nacht deutlich angestiegen.” - Guy Parmelin, Bundesrat'
                                },
                                span: '12',})
                        ]
                    })
                ]
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
        subtitle: 'Ueli Maurer trägt Freiheitstrychler-Shirt',
        actions: [
            server.create('widget', {
                type: 'article',
                title: 'Wer sind die Freiheitstrychler?',
                subtitle: 'Berichterstattung',
                span: '12',
                data: {
                  imageUrl: '/media/ueli-maurer.jpeg',
                    text: 'Die «Freiheitstrychler» traten im Herbst 2020 erstmals in Erscheinung. Sie wehrten sich gegen die Corona-Massnahmen des Bundes und marschierten an teils unbewilligten Demonstrationen mit.\n' +
                        '\n' +
                        'Gegründet wurde die Gruppierung mit Sitz Altendorf SZ laut eigenen Angaben, um sich für verfassungsmässige Rechte einzusetzen. Nach dem deutlichen Ja des Schweizer Stimmvolkes zum Covid-Gesetz im Juni sprachen sie von einem «Rückschlag».',
                },
                actions:[
                    server.create('widget', {
                        type: 'article',
                        title: 'Obelix',
                        subtitle: 'Zitat',
                        span: '6',
                        data: {
                            imageUrl: '/media/obelix.jpeg',
                            text: '"Die Spinnen doch die Römer!"' },
                        actions:[

                        ]
                    }),
                ]
            }),
            server.create('widget', {
                type: 'article',
                title: 'Kampfjets?!',
                subtitle: ' Wer ist auf diese Schnapsidee gekommen?',
                span: '6',
                data: {
                    imageUrl: '/media/jet.jpeg',
                    text: 'Ist es der hochmoderne, aber auch umstrittene US-Tarnkappen-Jet F-35? Oder entscheidet sich die Landesregierung am Schluss doch noch für ein europäisches Modell? Das Rennen sei völlig offen, berichteten mehrere bundesratsnahe Quellen vor der möglicherweise entscheidenden Sitzung der Landesregierung.\n' +
                        '\n' +
                        'Der F-35-Jet schneidet laut Informationen der Rundschau von letzter Woche bei den Kosten besonders gut ab – für einige Beobachter überraschend. Laut Hersteller Lockheed Martin kann der Jet wesentlich mehr als seine Mitbewerber. Deshalb stellt sich auch die Frage, ob es überhaupt die vom VBS angestrebte maximale Stückzahl von 40 Flugzeugen braucht. Oder ob auch weniger Flugzeuge den Schweizer Luftraum schützen könnten.',
                },
                actions:[
                    server.create('widget', {
                        type: 'audio',
                        title: 'Bestmögliche Schätzung?',
                        subtitle: ' Echo',
                        span: '6',
                        data: {
                            audioUrl: '/media/kampfjet.mp3',
                            imageUrl: '/media/f35.jpeg',
                            text: 'Das VBS sagt, die Schweiz habe mit den USA Fixpreise für den Kampfjet vereinbart. Wie das möglich sein soll, bleibt ein Rätsel.'},
                        actions:[

                        ]
                    })
                ]
            })
        ],
    });
}
