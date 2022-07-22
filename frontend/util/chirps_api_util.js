export const getChirps = () => (
    $.ajax({
        url: '/api/chirpings',
        method: "GET"
    })
);

export const getChirp = (id) => (
    $.ajax({
        url: `/api/chirpings/${id}`,
        method: "GET"
    })
);

export const postChirp = chirp => (
    $.ajax({
        method: 'POST',
        url: '/api/chirpings',
        data: { chirp }
    })
);

export const deleteChirp = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/chirpings/${id}`,
    });
}

export const updateChirp = chirp => (
    $.ajax({
        method: 'PATCH',
        url: `/api/chirpings/${chirp.id}`,
        data: { chirp }
    })
);


export const postLikeToChirp = id => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { id }
    })
);

export const deleteLikeFromChirp = id => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/likes',
        data: { id }
    });
}
