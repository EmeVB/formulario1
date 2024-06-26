document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('miFormulario');
    
    formulario.addEventListener('submit', (e)=> {
        e.preventDefault();

        const correo = document.getElementById('correo').value;
        const clae = document.getElementById('pass').value;
        const ciudad = document.getElementById('ciudad').value;
        
        var error = false;
        if (!correo) error=true;
        if (!clae) error=true;
        if (!ciudad) error=true;
        if (error) alert('Faltan campos');
        if (!error) alert("Correo es: "+correo+"\nSu clave es: "+clae+"\nCiudad: "+ciudad);

    });
})