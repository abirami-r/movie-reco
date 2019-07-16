
var tablerow = document.getElementById('table-data');
var tabledata = '';
//get request
fetch('http://localhost:3000/movies')
.then(res => res.json())
.then((movies,i) => {
    for(let i=0;i<movies.length;i++){
        tabledata += `<tr>
            <td> `+(i+1)+` </td>
            <td> `+(movies[i].moviename)+` </td>
            <td> `+(movies[i].director)+` </td>            
            <td> `+(movies[i].genre)+` </td>                        
            <td> `+(movies[i].rating)+` </td>                        
            <td> <i style= 'cursor:pointer' class="fas fa-edit"></i> &nbsp; &nbsp; &nbsp;
             <i style= 'cursor:pointer' class="far fa-trash-alt"></i> </td>     
            </tr>`;
    };
    tablerow.innerHTML = tabledata;
});

function onSubmit() {
console.log('form submitted');
}

function validation() {

    if(document.myform.moviename.value === 'blank') {
        alert('movie name is required')
        return false;
        
    }
return true;
}

// fetch('http://localhost:3000/movies')
//     .then(response => response.json())
//     .then(movies => {
//         console.log('abcfdugrwejinegrwjegrojk');
//         for (let i = 0; i < movies.length; i++) {
//             tabledata.innerHTML = `
//     <tr>
//     <td> 1 </td>
//     <td> Jason Bourne </td>
//     <td> Jason Bourne </td>
//     <td> Action </td>
//     <td> 5 </td>
//     <td> Delete </td>
//     </tr>`
//         }
//         console.log(tabledata);
//         tablerow.innerHTML = tabledata;
//     })
//     .catch((error) => {

//     })

// //get function

console.log('absdsdhn');