import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <div className="bg-primary rounded-full p-2">
            <HomeIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="ml-2 font-bold text-lg">Pereirão</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Serviços
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Profissionais
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Conectando clientes a profissionais
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Reserve profissionais de confiança para limpeza, pintura e muito mais com apenas alguns cliques.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Reserve um Serviço
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="img/deal.jpg"
                  width="500"
                  height="500"
                  alt="Handshake"
                  className="aspect-square object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Principais Serviços</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nós o conectamos a profissionais de confiança para todas as suas necessidades domésticas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center justify-center rounded-full bg-primary p-4">
                  <WashingMachineIcon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">Limpeza</h3>
                <p className="text-muted-foreground">Reserve profissionais de limpeza para sua casa ou escritório.</p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center justify-center rounded-full bg-primary p-4">
                  <PaintbrushIcon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">Pintura</h3>
                <p className="text-muted-foreground">Encontre pintores qualificados para transformar seu espaço.</p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center justify-center rounded-full bg-primary p-4">
                  <HandIcon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">Serviços Gerais</h3>
                <p className="text-muted-foreground">
                  Contrate profissionais de confiança para reparos e manutenção residencial.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que Nossos Clientes Dizem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ouça de nossos clientes satisfeitos sobre sua experiência com nossos serviços.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-full bg-primary p-2">
                    <StarIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-lg font-bold">5.0</div>
                  <div className="text-sm text-muted-foreground">(123 avaliações)</div>
                </div>
                <p className="text-muted-foreground">
                  "O serviço de limpeza foi fantástico! A equipe foi profissional, minuciosa e deixou minha casa
                  impecável. Eu recomendo muito os serviços deles."
                </p>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Lorena Pereira</p>
                    <p className="text-xs text-muted-foreground">Cliente Satisfeita</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-full bg-primary p-2">
                    <StarIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-lg font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">(87 avaliações)</div>
                </div>
                <p className="text-muted-foreground">
                  "Fiquei impressionado com o profissionalismo e atenção aos detalhes da equipe de pintura. Eles
                  transformaram minha sala de estar e ela parece nova."
                </p>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Maria Fernanda Pereira Borges</p>
                    <p className="text-xs text-muted-foreground">Cliente Satisfeita</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-full bg-primary p-2">
                    <StarIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-lg font-bold">4.9</div>
                  <div className="text-sm text-muted-foreground">(105 avaliações)</div>
                </div>
                <p className="text-muted-foreground">
                  "O serviço de serviços gerais foi fantástico. Eles conseguiram resolver vários problemas em minha casa
                  rapidamente e com eficiência. Com certeza usarei os serviços deles novamente."
                </p>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Gabriel Martins</p>
                    <p className="text-xs text-muted-foreground">Cliente Satisfeito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Pereirão. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function HandIcon(props) {
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
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PaintbrushIcon(props) {
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
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
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


function WashingMachineIcon(props) {
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
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </svg>
  )
}