function User(firebaseUser){
    let m = {
        displayName: '',
        photoURL: '',
        age: '',
        points: '',
        uid: '',
        dailyStreak: 0,
        badges: [],
        lastCheckedIn: Date,
    }

    if(firebaseUser){
        m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        m.age = firebaseUser.age ? firebaseUser.age : '';
        m.points = firebaseUser.points ? firebaseUser.points : '';
        m.uid = firebaseUser.uid ? firebaseUser.uid : '';
        m.dailyStreak = firebaseUser.dailyStreak ? firebaseUser.dailyStreak : '';
        m.badges = firebaseUser.badges ? firebaseUser.badges : '';
        m.lastCheckedIn = firebaseUser.lastCheckedIn ? firebaseUser.lastCheckedIn : '';
    }
    return m;
}
