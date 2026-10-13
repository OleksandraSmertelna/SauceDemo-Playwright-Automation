export const users = {

    standardUser: {
        username: process.env.SAUCE_USERNAME ?? 'standard_user',
        password: process.env.SAUCE_PASSWORD ?? 'secret_sauce'
    },

    lockedUser: {
        username: process.env.LOCKED_USERNAME ?? 'locked_out_user',
        password: process.env.LOCKED_PASSWORD ?? 'secret_sauce'
    },

    invalidUser: {
        username: process.env.INVALID_USERNAME ?? 'wrong_user',
        password: process.env.INVALID_PASSWORD ?? 'wrong_password'
    }
};