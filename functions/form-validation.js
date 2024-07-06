function validateForm(){
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;

    if (name === '' || gender === '' || birthdate === ''){
        alert('All fields are required');
        return false;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('birthdate', birthdate);

    window.location.href = 'welcome.html';
    return false;
}
