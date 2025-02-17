const account = {
    id:1,
    username : "Asep",
    password: "asepganteng001",
}

const editPassword = (pass)=>{
    const editPassword = {
        ...account,
        password: pass,
    }
    let{username, password} = account;
    console.log(username, password);
}

editPassword("test");


