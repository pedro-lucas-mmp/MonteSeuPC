import styled from '@emotion/styled';

export default function NavHardware({ onSelectCategory, selectedCategory, setGuiado }) {
  return (
    <NavHStyled>
      <div className="divnavhardware">
        <nav className="navhardware">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  className={`li-a-link ${selectedCategory === category.id ? 'selected' : ''}`}
                  href={`#${category.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (category.id === 'todos') {setGuiado(false)};
                    onSelectCategory(category.id); 
                  }}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </NavHStyled>
  );
}

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'processador', name: 'Processadores' },
  { id: 'placa_mae', name: 'Placas Mãe' },
  { id: 'memoria_ram', name: 'Memória RAM' },
  { id: 'cpu_cooler', name: 'CPU Coolers' },
  { id: 'placa_de_video', name: 'Placas de Vídeo' },
  { id: 'armazenamento', name: 'Armazenamento' },
  { id: 'fonte', name: 'Fontes' },
  { id: 'gabinete', name: 'Gabinetes' },
];

const NavHStyled = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  padding: 10px 0;

  .divnavhardware {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .navhardware ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  .navhardware li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .li-a-link {
    text-decoration: none;
    color: #343a40;
    font-size: 1.05rem;
    padding: 10px 15px;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;
    display: inline-block;
    text-align: center;
  }

  .li-a-link:hover,
  .li-a-link:focus {
    background-color: #e9ecef;
    color: #495057;
    transform: scale(1.05);
  }

  .li-a-link.selected {
    background-color: #e9ecef;
    color: black;
    font-weight: bold;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .navhardware ul {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .li-a-link {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .navhardware ul {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }

    .li-a-link {
      font-size: 0.9rem;
      padding: 8px 10px;
    }
  }
`;