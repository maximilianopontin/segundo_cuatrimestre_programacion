function checkAuth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isAuthenticated = true;
            if (isAuthenticated) {
                resolve("123456");
            } else {
                reject("Authentication failed");
            }
        }, 1000);
    });
}


function getUser(auth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error occured while fetching user ");
        }, 1500);
    });
}


async function fetchUser() {
    try {
        const auth = await checkAuth();
        const user = await getUser(auth);
        return user;
    }

    catch (err) {
        return { name: " default", error: err }
    }
}

fetchUser()
    .then((user) => console.log(user.name))
    .catch((err) => console.log(err));