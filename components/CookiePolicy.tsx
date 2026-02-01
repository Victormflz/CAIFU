import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-400 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              <a href="https://importadoracaifu.com" className="text-brand-500 hover:underline">https://importadoracaifu.com</a>
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también ayudar a identificar y resolver errores.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información Recogida</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies propias</h2>
              <p className="text-gray-700 leading-relaxed">
                Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Importadora Caifu para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de redes sociales</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Importadora Caifu incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener" className="text-brand-500 hover:underline">Facebook</a></li>
                <li><a href="https://twitter.com/es/privacy" target="_blank" rel="noopener" className="text-brand-500 hover:underline">Twitter</a></li>
                <li><a href="https://help.instagram.com/1896641480634370" target="_blank" rel="noopener" className="text-brand-500 hover:underline">Instagram</a></li>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-brand-500 hover:underline">YouTube</a></li>
                <li><a href="https://policy.pinterest.com/es/privacy-policy" target="_blank" rel="noopener" className="text-brand-500 hover:underline">Pinterest</a></li>
                <li><a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener" className="text-brand-500 hover:underline">LinkedIn</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deshabilitar, rechazar y eliminar cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer).
              </p>
              <p className="text-gray-700 leading-relaxed">
                En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enlaces a Terceros</h2>
              <p className="text-gray-700 leading-relaxed">
                Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Control de su información personal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, puede marcar o desmarcar la opción de recibir información por correo electrónico.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Importadora Caifu se reserva el derecho de cambiar los términos de la presente Política de Cookies en cualquier momento.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Este documento fue creado el día 29/03/2025
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
