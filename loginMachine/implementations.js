module.exports = {
    id: 'dna-login',
    initial: 'logged_out',
    states: {
        logged_in : {
            id: 'logged_in',
            on : {
                LOGOUT: 'logged_out'
            }
        },
        logged_out : {
            on : {
                LOGIN: 'logged_in'
            }
        }
    }
}