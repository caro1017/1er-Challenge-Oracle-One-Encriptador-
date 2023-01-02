/* Definir variables */
const botonEncriptar = document.querySelector('#btn_encriptar');
const botonDesencriptar = document.querySelector('#btn_desencriptar');
const botonCopiar = document.querySelector('#btn_copiar');

const contenedorInicial = document.querySelector('.contenedor_inicial');
const textoEncriptar = document.querySelector('#texto_encriptado');
const textarea = document.querySelector('#texto_entrada').focus();

/* Darle un evento al boton */
botonEncriptar.onclick = validar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarPortapapeles;


/* Validar que la informacion sea la adecuada */
function validar(){
    let textarea = document.querySelector('#texto_entrada').value;
    let textoIngreso = textarea;
    
    let vacio = ''; // espacio vacio
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;//Caracteres especiales
    let mayusculas = /[A-Z]/g; //Mayusculas
    let numero =  /[0-9]/g ; //Numeros 

    if (textarea.match(caracteres)|| textarea.match(mayusculas)){
        alert ('SOLO LETRAS MINUSCULAS Y SIN ACENTOS');
        document.querySelector('#texto_entrada').value='';//Poner el textaera en blanco
        foco();//Enfocar el cursor en el textarea
    } else if (textarea.match(numero)) {
        alert('NO SE PERMITEN NUMEROS');
        document.querySelector('#texto_entrada').value='';
        foco();
    } else if (textarea == vacio) {
        alert('INGRESE UN MENSAJE PARA ENCRIPTAR');
        document.querySelector('#texto_entrada').value='';
        foco();
    } else{
        ocultar();
        textoEncriptar.textContent = encriptar(textoIngreso);        
    }
}

/* Ocultar imagen principal */
function ocultar(){
    contenedorInicial.classList.add('ocultar');
}


/* Encriptar texto ingresado */
function encriptar(texto){
    let textoInicial = texto;
    let textoFinal = '';

    alert('Texto ingresado / '+ textoInicial );
    
    

    for(let i = 0 ; i < textoInicial.length; i++){
        if(textoInicial[i] == 'e'){
            textoFinal = textoFinal + 'enter';
        }else if(textoInicial[i] == 'i'){
            textoFinal = textoFinal + 'imes';
        }else if(textoInicial[i] == 'a'){
            textoFinal = textoFinal + 'ai';
        }else if(textoInicial[i] == 'o'){
            textoFinal = textoFinal + 'ober';
        }else if(textoInicial[i] == 'u'){
            textoFinal = textoFinal + 'ufat';
        } else{
            textoFinal = textoFinal + textoInicial[i];
        }
    }
    
    return textoFinal;
}


/* Desencriptar texto */
function desencriptar(){

    let textarea = document.querySelector('#texto_entrada').value;
    let textoIngreso = textarea;

    ocultar();
    textoEncriptar.textContent = desencriptarTexto(textoIngreso); 
    
    
}

function desencriptarTexto(texto){

    let textoInicial = texto;
    let textoFinal = '';

    let remplazar = textoInicial
                        .replaceAll('enter','e')
                        .replaceAll('imes','i')
                        .replaceAll('ai','a')
                        .replaceAll('ober','o')
                        .replaceAll('ufat','u')

    return remplazar;

}

/* Copiar portapapeles */
function copiarPortapapeles(){
    let copiado = document.getElementById('texto_encriptado');
    copiado.select();
    document.execCommand('copy');
    document.querySelector('#texto_entrada').value='';
    foco();
    alert('dar CTRL+V en el teclado')
}

/* focus inicial */
function foco(){
    document.querySelector('#texto_entrada').focus();
}











