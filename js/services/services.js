const postData = async (url, data) => { // async/await идут всегда вместе
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
    
};

const getResources = async (url) => {
    const res = await fetch(url);
    if(!res.ok) {
        throw new Error(`could not fetch ${url}, status; ${res.status}`);
    }
    return await res.json();
};

export {postData};

export {getResources};