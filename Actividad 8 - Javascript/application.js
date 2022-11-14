function guardar() {
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var numero = document.getElementById('numero').value;

	var data = {nombre, apellido, numero};

    if (localStorage.getItem('users') === null) {
        var user = [data];
        saveToLocalStorage('users', user);
    }
    else{
        var userArray = JSON.parse(localStorage.getItem('users'));
        userArray.push(data);
        saveToLocalStorage('users', userArray);
    }


    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('numero').value = '';

}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }