// import fetch from 'node-fetch';


// const button = document.getElementById('btn');

function show(data) {
    var  container = document.getElementById('show');
    for( i=0; i<data.length;i++){

        var tr = document.createElement("tr");
        var id_td = document.createElement("td");
        id_td.innerHTML = data[i].id
        var name_td = document.createElement("td");
        name_td.innerHTML = data[i].name
        var email_td = document.createElement("td");
        email_td.innerHTML = data[i].email
        var gender_td = document.createElement("td");
        gender_td.innerHTML = data[i].gender
        tr.appendChild(id_td);
        tr.appendChild(name_td);
        tr.appendChild(email_td);
        tr.appendChild(gender_td);
        container.append(tr);
        
    }
}

function fetchData(cb) {
    const file = 'http://127.0.0.1:5500/javaScript%20Assignment/data.json';
    const fetchDemo = fetch(file);
    
    fetchDemo.then(res => {
        return res.json();
    }).then(data => {
        // console.log(data);
        cb(data);
    }).catch(err => {
        console.log(err);
    });

    /* promises.then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    }); */
}
fetchData(show);

    /* 
        async function fetchData() {
            // const promises = new Promise((resolve, reject) => {
            let file = 'http://127.0.0.1:5500/javaScript%20Assignment/data.json';
            const fetchDemo = fetch(file);
            return new Promise((res, rej) => {
                fetchDemo.then(res => {
                    return res.json();
                }).then(data => {
                    console.log(data);
                    show(data);
                }).catch(err => {
                    console.log(err);
                })
            })
    
        }
        fetchData(show); */


// ------------------------------------------------------------------------------------
/* fetch('http://127.0.0.1:5500/javaScript%20Assignment/data.json').then(res => {
    res.json();
}).then(data => {
    console.log("hello");
    console.log(data);
}).catch(err => {
    console.log(err);
}); */
