export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
);

export const postFollowToUser = id => (
    $.ajax({
        method: 'POST',
        url: '/api/follows',
        data: { id }
    })
);

export const deleteFollowFromUser = id => (
    $.ajax({
        method: 'DELETE',
        url: '/api/follows',
        data: { id }
    })
);