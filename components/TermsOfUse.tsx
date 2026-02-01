import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfUse: React.FC = () => {
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
            Términos de Uso
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bienvenido a <a href="https://importadoracaifu.com" className="text-brand-500 hover:underline">https://importadoracaifu.com</a>. 
                Estos Términos de Uso («Términos») rigen tu acceso y uso del sitio web de Importadora Caifu («Importadora Caifu», «Compañía», «Nosotros» o «Nuestro») y cualquier producto, servicio, aplicación, característica o funcionalidad ofrecida o puesta a disposición en o a través del sitio web.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tu acceso y uso del sitio web está condicionado a tu aceptación de estos Términos. Al acceder o utilizar el sitio web, aceptas estar sujeto a estos Términos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Al utilizar este sitio web o al hacer clic en «Acepto» este acuerdo, tú («Usuario») manifiestas tu aceptación de estos términos y condiciones. Si no estás de acuerdo con este acuerdo, no utilices este sitio web y no hagas clic en «Acepto». Importadora Caifu se reserva el derecho de terminar el uso de este sitio web por un usuario en cualquier momento sin previo aviso.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Edad Mínima</h2>
              <p className="text-gray-700 leading-relaxed">
                Debes ser mayor de 18 años para aceptar este acuerdo y utilizar este sitio. Si un padre o tutor desea permitir que una persona menor de 18 años acceda a este sitio, debe enviar un correo electrónico a Importadora Caifu con su permiso explícito y la aceptación total de la responsabilidad legal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Licencia de Uso del Sitio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Con tu consentimiento, Importadora Caifu te otorga una licencia limitada no exclusiva e intransferible para utilizar este sitio web en estricta conformidad con los términos y condiciones de este acuerdo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Reconoces y aceptas que todo el contenido y los servicios disponibles en este sitio web son propiedad de Importadora Caifu y están protegidos por derechos de autor, marcas comerciales, marcas de servicio, patentes, secretos comerciales y otros derechos y leyes de propiedad internacionalmente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Restricciones de la Licencia</h2>
              <p className="text-gray-700 leading-relaxed">
                Salvo que se permita explícitamente, aceptas no guardar, descargar, cortar y pegar, vender, licenciar, alquilar, arrendar, modificar, distribuir, copiar, reproducir, transmitir, exhibir públicamente, ejecutar públicamente, publicar, adaptar, editar o crear trabajos derivados de materiales de este sitio web. Está directamente prohibida la recuperación sistemática de datos u otro contenido de este sitio para crear o compilar, directa o indirectamente, una colección, base de datos o directorio sin el permiso por escrito de Importadora Caifu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aceptas que, si la Compañía te emite un nombre de usuario y una contraseña, deberás hacer todo lo posible para evitar el acceso a este sitio web a través de tu nombre de usuario y contraseña por cualquier persona que no seas tú.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aceptas no tratar de realizar ingeniería inversa, descompilar, desensamblar, traducir o alterar de cualquier otra forma cualquier código ejecutable, contenido o material en o recibido a través de este sitio web.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Errores y Correcciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Aunque hacemos todos los esfuerzos razonables para incluir información precisa y actual en nuestro sitio web, no garantizamos ni declaramos que el sitio web esté libre de errores. Nos reservamos el derecho de corregir cualquier inexactitud o error tipográfico en nuestro sitio web, incluidos los precios y la disponibilidad de productos y servicios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enlaces a Otros Sitios Web</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestro sitio web contiene enlaces a otros sitios web para tu información y conveniencia. Estos sitios web de terceros son responsables y se comprometen a mantener sus propios términos de uso del sitio web. Te sugerimos que revises cuidadosamente los términos de uso de cada sitio web al que elijas acceder desde nuestro sitio web.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Conducta del Usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al utilizar las funciones de este sitio web que te permiten publicar o transmitir información hacia o a través de este sitio web, aceptas que no cargarás, publicarás ni distribuirás ningún contenido que:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sea ilegal, amenazante, abusivo, acosador, difamatorio, obsceno o en violación de las reglas de este sitio web.</li>
                <li>Infrinja cualquier patente, marca comercial, derecho de autor u otro derecho de propiedad.</li>
                <li>Constituya publicidad no autorizada, spam o cualquier forma de solicitud no autorizada.</li>
                <li>Contenga virus de software o cualquier código malicioso.</li>
                <li>Se haga pasar por cualquier persona o entidad.</li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Última actualización: Enero 2026
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
