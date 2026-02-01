import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              El presente Política de Privacidad establece los términos en que Importadora Caifu en la web <a href="https://importadoracaifu.com" className="text-brand-500 hover:underline">https://importadoracaifu.com</a> usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información que es recogida</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Uso de la información recogida</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted, estos correos electrónicos podrán ser cancelados en cualquier momento.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Importadora Caifu está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro sitio web puede identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enlaces a Terceros</h2>
              <p className="text-gray-700 leading-relaxed">
                Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Control de su información personal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, puede marcar o desmarcar la opción de recibir información por correo electrónico.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Importadora Caifu se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Documento generado el día 01/04/2025
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
