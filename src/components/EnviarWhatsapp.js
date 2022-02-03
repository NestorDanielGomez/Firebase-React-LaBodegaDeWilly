export default function EnviarWhatsapp(producto) {
  const urlProducto = `https://la-bodega-de-willy.netlify.app/producto/${producto.id}`;
  const saltoDeLinea = "%0D%0A";
  const numeroCelular = 5493482318980;
  const mensaje = `Hola Willy, quiero comprar:${saltoDeLinea}${producto.name}-${producto.marca}-${producto.varietal}-$${producto.precio}${saltoDeLinea}${saltoDeLinea}${urlProducto}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${numeroCelular}&text=${mensaje}&app_absent=0`;
  return window.open(whatsappLink, "_blank");
}
