export const fetchBenches = (bounds) => {
    return $.ajax({
        method: 'GET',
        url: '/api/benches',
        error: (err) => console.log(err),
        data: {bounds}
    })
}