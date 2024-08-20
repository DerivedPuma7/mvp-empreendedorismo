/**
 * v0 by Vercel.
 * @see https://v0.dev/t/H89Vb5gvw5D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function Details() {
  return (
    <div className="bg-background text-foreground p-4 md:p-6 lg:p-8">
      <div className="bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary-foreground text-primary p-4 md:p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">João da Silva</div>
            <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6 text-muted-foreground" />
              <div className="text-lg md:text-xl lg:text-2xl font-medium">(123) 456-7890</div>
            </div>
            <div className="flex items-center gap-4">
              <DollarSignIcon className="w-6 h-6 text-muted-foreground" />
              <div className="text-lg md:text-xl lg:text-2xl font-medium">R$50/h</div>
            </div>
          </div>
          <Separator className="my-4 md:my-6 lg:my-8" />
          <div className="prose max-w-none">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Sobre João da Silva</h3>
            <p>
              João da Silva é um pintor altamente qualificado e experiente com mais de 10 anos de expertise na
              indústria. Ele se especializa em pintura interna e externa, garantindo um acabamento impecável a cada vez.
              João é conhecido por sua atenção aos detalhes, serviço confiável e preços competitivos.
            </p>
            <p>
              Seja você precisa de uma nova demão de tinta para sua casa ou uma transformação completa, João da Silva é
              o profissional em quem você pode confiar para fazer o trabalho certo.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <Button>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Book Services
            </Button>
            <Button variant="secondary">
              <PhoneIcon className="w-4 h-4 mr-2" />
              Call (123) 456-7890
            </Button>
            <Button variant="outline">
              <WebcamIcon className="w-4 h-4 mr-2" />
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function WebcamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}