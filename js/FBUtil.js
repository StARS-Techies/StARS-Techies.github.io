class FBUtil {
    constructor(args) {
        this.FBdb = firebase.database();
    }

    // function returns entire tracks container obj
    getAllTracks() {
        return new Promise((resolve, reject) => {
            this.FBdb
            .ref('/tracks')
                .once('value')
                .then(snapshot => {
                    resolve(snapshot.val())
                });
        });
    };
}
