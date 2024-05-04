function User(firebaseUser){
    let m = {
        displayName: '',
        photoURL: '',
        age: '',
        points: '',
        badges: [],
        streaks:[],
        uid: '',
    }

    if(firebaseUser){
        m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        m.age = firebaseUser.age ? firebaseUser.age : '';
        m.points = firebaseUser.points ? firebaseUser.points : '';
        m.badges = firebaseUser.badges ? firebaseUser.badges : '';
        m.streaks = firebaseUser.streaks ? firebaseUser.streaks : '';
        m.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }
    return m;
}
