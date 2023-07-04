let date = new Date();
let newDate = date.toLocaleDateString();
let modifiedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString()

const datas = [
    {
        S_N: 1,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 2,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 3,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 4,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 5,
        emailAddress: "adebanjoademola@gmail.com",
        role: "Senior Software Engineer",
        createdBy: "Adebanjo Ademola",
        createdDate: newDate,
        modifiedBy: "Adebanjo Ademola",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 6,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 7,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 8,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 9,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 10,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let keyText = document.createTextNode(key);
        th.appendChild(keyText);
        row.appendChild(th);
        th.style.border = "1px solid black"
        th.style.backgroundColor = "crimson"
    }
}

function generateTableContent(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let td = row.insertCell();
            let keyText = document.createTextNode(element[key]);
            td.appendChild(keyText);
            td.style.border = "1px solid black";
            td.style.backgroundColor = "green"
            td.style.color = "orange"
            
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(datas[0]);
console.log(table)

generateTableContent(table, datas);
generateTableHead(table, data);


