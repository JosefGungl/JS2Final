function User(firebaseUser){
    let m = {
        displayName: '',
        photoURL: '',
        age: '',
        points: '',
        dailyStreak: 0,
        uid: '',
    }

    if(firebaseUser){
        m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        m.age = firebaseUser.age ? firebaseUser.age : '';
        m.points = firebaseUser.points ? firebaseUser.points : '';
        m.dailyStreak = firebaseUser.dailyStreak ? firebaseUser.dailyStreak : '';
        m.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }
    return m;
}
