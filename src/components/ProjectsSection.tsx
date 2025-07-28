// src/components/ProjectsSection.tsx

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Agendamento Escolar",
      description: "Gerenciamento completo de turmas, alunos, professores e notificações em tempo real.",
      link: "#",
    },
    {
      title: "Dashboard Administrativo",
      description: "Painel moderno com visualização de métricas, controle de usuários e integrações.",
      link: "#",
    },
    {
      title: "Landing Page Pessoal",
      description: "Página institucional desenvolvida com Next.js, Tailwind e identidade visual própria.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-surface text-dark" id="projetos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-title mb-12 text-center">
          Projetos Recentes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="bg-white p-6 rounded-xl shadow-card  hover:shadow-lg transition duration-300 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-light"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary font-title">
                {project.title}
              </h3>
              <p className="text-gray text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
