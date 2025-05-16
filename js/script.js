    //obtener elementos 
    const btnAdd = document.getElementById('ingresarTarea');
    const input = document.getElementById('tareas');
    const lista = document.getElementById('listaTareas');

    //escuchar click del boton
    btnAdd.addEventListener('click', addTask );
    //funcion para agregar tarea
    function agregarTarea() {
        const textoTarea = input.value.trim();
        if (taskText === '') return;
    }
    //agregar nuevo li
    const li = document.createElement('li');
    li.textContent = taskText;


    li.addEventListener('click', () => {
        li.classList.toggle('Hecho');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = ''; // Limpiar input
