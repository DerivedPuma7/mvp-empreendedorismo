"use client";

import { useState, useMemo, JSX, SVGProps } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Filters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Pintura");
  const categories = [
    { id: 1, name: "Limpeza" },
    { id: 2, name: "Lavagem" },
    { id: 3, name: "Pintura", color: "bg-primary text-primary-foreground" },
    { id: 4, name: "Encanamento" },
    { id: 5, name: "Elétrica" },
    { id: 6, name: "Jardinagem" },
    { id: 7, name: "Carpintaria" },
  ];
  const professionals = [
    {
      id: 1,
      name: "João Silva",
      category: "Pintura",
      description: "Serviços profissionais de pintura de paredes",
      price: 150,
      rating: 4.9,
      image: "img/pintor1.jpg"
    },
    {
      id: 2,
      name: "Pedro Almeida",
      category: "Pintura",
      description: "Pintura de interiores com acabamento impecável",
      price: 120,
      rating: 4.6,
      image: "img/pintor2.jpg"
    },
    {
      id: 3,
      name: "Maria Oliveira",
      category: "Pintura",
      description: "Especialista em pintura de fachadas",
      price: 100,
      rating: 4.7,
      image: "img/pintora.jpg"
    },
    {
      id: 4,
      name: "Ana Souza",
      category: "Lavagem",
      description: "Lavar, secar e dobrar suas roupas",
      price: 25,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Carlos Pereira",
      category: "Pintura",
      description: "Especialista em pintura de exteriores",
      price: 85,
      rating: 4.6,
      image: "img/pintor3.jpeg"
    },
    {
      id: 6,
      name: "Rubens Fernando",
      category: "Jardinagem",
      description: "Cuidados com seu jardim e plantas",
      price: 45,
      rating: 4.8,
    },
    {
      id: 7,
      name: "Matheus Oliveira",
      category: "Carpintaria",
      description: "Serviços de carpinteiro de alta qualidade",
      price: 50,
      rating: 4.8,
    },
    {
      id: 8,
      name: "Marcio Caligari",
      category: "Limpeza",
      description: "Serviços de faxina doméstica",
      price: 120,
      rating: 4.8,
    },
    {
      id: 9,
      name: "Marcos",
      category: "Encanamento",
      description: "Encanamento interior e exterior",
      price: 120,
      rating: 4.8,
    },
    {
      id: 10,
      name: "Vinicius Silva",
      category: "Elétrica",
      description: "Engenheiro eletricista",
      price: 120,
      rating: 4.8,
    },
  ];
  const filteredProfessionals = useMemo(() => {
    return professionals
      .filter((professional) => {
        if (selectedCategory && professional.category !== selectedCategory) {
          return false;
        }
        return professional.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  }, [searchTerm, selectedCategory]);
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-primary p-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Pesquisar por profissionais"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-primary-foreground text-primary rounded-lg px-4 py-2 pr-8"
          />
          <SearchIcon className="absolute right-2 top-2 h-5 w-5 text-primary-foreground" />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex gap-4 px-4 py-3 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.name ? "solid" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                category.color || ""
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <div className="grid gap-4 p-4">
          {filteredProfessionals.map((professional) => (
            <Card
              key={professional.id}
              className="grid grid-cols-[100px_1fr] gap-4"
            >
              <img
                src={professional.image ?? ""}
                alt={professional.name}
                width={100}
                height={100}
                className="object-cover rounded-lg"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
              <div className="grid gap-2">
                <div className="font-medium text-lg">{professional.name}</div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    ({professional.rating})
                  </span>
                </div>
                <div className="text-muted-foreground text-sm">
                  {professional.description}
                </div>
                <div className="font-semibold">R${professional.price}</div>
                <div className="flex gap-2">
                  <Button variant="solid" className="flex-1">
                    Agendar Agora
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Ver Mais
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
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
  );
}
