

const formController = () => {
  const form = document.querySelector('.form');
  console.log('form: ', form);

  form.addEventListener('submit', formSend)


  const formSend = async e => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      let response = await fetch('sendmail.php', {
        method: 'POST', 
        body: formData,
      })

      if(response.ok){
        let result = await response.json();

        form.reset();
      } else {
        alert('ошибка');
      }
    } catch (error) {
      
    }
  }
}

export default formController;
