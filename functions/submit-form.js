export function exportFormData() {
    const name = localStorage.getItem('name');
    const gender = localStorage.getItem('gender');
    const birthdate = localStorage.getItem('birthdate');
  
    const formData = {
      name,
      gender,
      birthdate
    };
  
    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form_data.json';
    link.textContent = 'Download Form Data';
    document.body.appendChild(link);
  }