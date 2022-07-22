export const asArray = ({ chirps }, userId = null) => {
    let arr = [];
    if (userId){
        Object.keys(chirps).forEach(key => {
            const chirp = chirps[key];

            if (chirp.author_id == userId){
                arr.push(chirp);
            }
            
        });
        return arr; 
    }
    return Object.keys(chirps).map(key => chirps[key]);
};

export const selectChirp = ( chirps , chirpId) => {
    return chirps[chirpId];
};