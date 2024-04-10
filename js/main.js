var siteNameInput = document.getElementById('siteName');
var siteURLInput = document.getElementById('siteURL');
var addBtn = document.getElementById('addBtn');
var tableBody = document.getElementById('tableBody');
// localStorage.clear();
if (localStorage.getItem('sites')) {
    sitesContainer = JSON.parse(localStorage.getItem('sites'));
    display(sitesContainer);
}else{

var sitesContainer=[];
}
function addSite() {
    if (validateName(siteNameInput.value)&&validateSite(siteURLInput.value)) {
        var sites={
            Name:siteName.value,
            URL:siteURL.value,
        }
        
        sitesContainer.push(sites);
        localStorage.setItem('sites', JSON.stringify(sitesContainer));
        console.log(sitesContainer);
        display(sitesContainer);
        clear();
    } else {
        alert(`
        The Site Name Must be only Words
        The Site URL Must start With 'https://'`)
    }  
    
}
function clear() {
    siteNameInput.value='';
    siteURLInput.value='';
}
function display(array) {
    var lol = ``;
    for (var i=0;i<array.length;i++) {
        lol +=`
        <tr>
            <td>${i+1}</td>
            <td>${array[i].Name}</td>
            <td><button onClick="visitSite('${array[i].URL}')" class="btn btn-outline-success  ">Open</button></td>
            <td><button onClick="deleteElemnte(${i})" class="btn btn-outline-dark ">Delete</button></td>
       </tr>`
        
    }
    tableBody.innerHTML=lol  
}
function deleteElemnte(deleteIndex) {
    sitesContainer.splice(deleteIndex,1)
    localStorage.setItem('sites', JSON.stringify(sitesContainer));

    display(sitesContainer)
}
function visitSite(url) {
    if(url.startsWith('https://')||url.startsWith('http://')){
        window.open(url,"_blank");
    }
    else{
        var url1 = `https://${url}`;
        window.open(url1,"_blank");
    }
   
}

function validateName(name) {
    var regex =/^[A-Za-z]{3,}$/ ;
    if (regex.test(name)) {
        siteNameInput.classList.replace('is-invalid','is-valid')
        return true;
    } else {
        siteNameInput.classList.add('is-invalid')
        return false ;    
    }
    
}
 function validateSite(name) {
    var regex =/^\w{3,}/ ;
    if (regex.test(name)) {
        siteURLInput.classList.replace('is-invalid','is-valid')
        return true;
    } else {
        siteURLInput.classList.add('is-invalid')
        return false ;    
    }
    
}
