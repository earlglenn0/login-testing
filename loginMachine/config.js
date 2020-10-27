
const loginMachine = Machine({
    id: 'dna-login',
    initial: 'off_duty',
    context: {},
    states: {
        off_duty: {
            id: 'off_duty',
            on: {
                TIME_IN: { target: 'on_duty' }
            }
        },
        on_duty: {
            id: 'on_duty',
            initial: 'idle',
            on: {
                TIME_OUT: 'off_duty'
            },
            states: {
                idle: {
                    on: {
                        BREAK: { target: '#logged_out' },
                        LUNCH: { target: '#lunch_time' }
                    }
                },
            }
        },
        lunch_time: {
            id: 'lunch_time',
            after: {
                10000: '#overbreak'
            },
            on: {

                LUNCH_OVER: { target: '#on_duty' }

            }

        },
        logged_out: {
            id: 'logged_out',
            after: {
                5000: '#overbreak'
            },
            on: {
                BREAK_OVER: '#on_duty'
            }
        },
        overbreak: {
            id: 'overbreak',
            on: {
                BREAK_OVER: '#on_duty'
            }
        }
    },
    services: {

    },
    guards: {

    },
    actions: {

    },
    activities: {

    }
});
