
const  dictionary= {red:"đỏ",yellow:"vàng",black:"đen"}

// đẩy lên local
function translatelist() {
    const fileTranslationsJSON = localStorage.getItem("translations");
    if (!fileTranslationsJSON) {
        localStorage.setItem("translations", JSON.stringify(dictionary));
    }
 }
 translatelist() 
const localStorageData = localStorage.getItem("translations");
const data = localStorageData ? JSON.parse(localStorageData) : {}
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
function search() {
    const valueInput = searchInput.value
    const text = document.querySelector('.text') as HTMLElement
    if (valueInput === "") {
        alert("Vui lòng nhập từ cần dịch");
        return;
    }
    for (const key in data) { 
        if(valueInput == key) {
           text.textContent = data[key]
           break      
        }else {
           text.textContent = 'từ chưa có'
        }
    }
}
 
function del() {
   
}

function edit() {}




















