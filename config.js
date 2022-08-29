module.exports = {
    app: {
        token: 'MTAxMzgwMTAwODUwMzIxNDE3MQ.Goc5lb.k4uHHUCL7YWWBU50BZFZoc9y6G9w93X8QskMFw',
        playing: 'KTQ MBOT',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
