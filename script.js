function update() {
    if (localStorage.getItem('itemjson') == null) {

        itemjsonarray=[];
        localStorage.setItem('itemjson', JSON.stringify(itemjsonarray));
    }
    else {
        itemjsonarraystr = localStorage.getItem('itemjson');
        itemjsonarray = JSON.parse(itemjsonarraystr);
    }


    itemjsonarraystr = localStorage.getItem('itemjson');
    itemjsonarray = JSON.parse(itemjsonarraystr);
    console.log(itemjsonarray);


    let tablebody = document.getElementById('tablebody')
    let str = "";
    itemjsonarray.forEach((element, index) => {
        str += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})" >Delete</button></td>
        </tr>`
    });

    tablebody.innerHTML = str;
}

function getupdate() {
    let itemjsonarraystr;
    let itemjsonarray = [];
    tit = document.getElementById('title').value;
    dec = document.getElementById('description').value;
    if (localStorage.getItem('itemjson') == null) {

        itemjsonarray.push([tit, dec]);
        localStorage.setItem('itemjson', JSON.stringify(itemjsonarray));
        // console.log("item added");
    }
    else {
        itemjsonarraystr = localStorage.getItem('itemjson');
        itemjsonarray = JSON.parse(itemjsonarraystr);
        itemjsonarray.push([tit, dec]);
        localStorage.setItem('itemjson', JSON.stringify(itemjsonarray));
    }

    update();
}


function deleted(itemindex) {
   
    let itemjsonarray=[];
    let itemjsonarraystr = localStorage.getItem('itemjson');
     itemjsonarray = JSON.parse(itemjsonarraystr);
    itemjsonarray.splice(itemindex, 1);
    localStorage.setItem('itemjson', JSON.stringify(itemjsonarray));
    update();

}

let add = document.getElementById("add");
update();
add.addEventListener('click', getupdate);