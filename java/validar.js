function ingresar()
{

var usuario="victor"
var contraseña="examen"; 

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)   
{
    document.location="html/inicio.html"
}
else
{
    alert("ingrese usuario y contraseña correctamente")
}

}