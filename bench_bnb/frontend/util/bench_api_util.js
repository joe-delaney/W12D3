export const fetchBenches = (filters) => {
    return $.ajax({
        method: 'GET',
        url: '/api/benches',
        error: (err) => console.log(err),
        data: filters
    })
}

export const createBench = (bench) => {
    return $.ajax({
        method: 'POST',
        url: '/api/benches',
        data: {bench}
    })
}