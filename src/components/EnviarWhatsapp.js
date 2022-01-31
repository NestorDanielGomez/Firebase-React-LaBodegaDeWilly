export default function EnviarWhatsapp(producto) {
  const urlProducto = `http://localhost:3000/producto/${producto.id}`;
  const saltoDeLinea = "%0D%0A";
  const numeroCelular = +5493482318980;
  const mensaje = `Hola Willy, quiero comprar:${saltoDeLinea}${saltoDeLinea} ${producto.name}-${producto.marca}-${producto.varietal}-${producto.precio}${saltoDeLinea}${saltoDeLinea}|| El link del producto es: ${urlProducto}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone-51${numeroCelular}&text=${mensaje}&app_absent=0`;
  return window.open(whatsappLink, "_blank");
}
