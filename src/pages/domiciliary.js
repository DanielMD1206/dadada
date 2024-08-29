import { faEdit, faPlus, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';
import Header from '../components/HeaderD';

const Couriers = () => {
  return (
    <div>
      <Header/>
      <div class="d1">
            <div class="d2">
                <div class="d3">
                  <FontAwesomeIcon className='icono' icon={faUser}/>
                </div>
                <div class="d4">
                    <span class="d5">Mauricio</span>
                    <span class="d6">Repartidora de profecion, tu pedido estara seguro</span>
                </div>
                <div class="d7">
                    <div class="d8">
                        <a href="/updatedomi" class="d9">
                            <span class="d10">Editar</span>
                            <div class="d11 link-black">
                              <FontAwesomeIcon icon={faEdit} />
                            </div>
                        </a>
                        <a href="deletedom" class="d15">
                            <span class="d16">Eliminar</span>
                            <div class="d17 link-black">
                              <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </a>
                    </div>
                    <div class="d18"><div class="d19"></div></div>
                </div>
            </div>
        <div class="d20">
            <div class="d3">
              <FontAwesomeIcon className='icono' icon={faUser}/>
            </div>
            <div class="d22">
                <span class="d23">Luis</span>
                <span class="d24">Me encanta mi trabajo, mi prioridad, tu pedido</span>
            </div>
            <div class="d25">
            <div class="d26">
                <a href="/updatedomi" class="d9">
                    <span class="d28">Editar</span>
                    <div class="d29 link-black">
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                </a>
                <a href="/deletedom" class="d15">
                    <span class="d34">Eliminar</span>
                    <div class="d35 link-black">
                      <FontAwesomeIcon icon={faTrash}/>
                    </div>
                </a>
            </div>
            <div class="d36"><div class="d37"></div></div>
            </div>
        </div>
        <div class="d38">
            <div class="d3">
              <FontAwesomeIcon className='icono' icon={faUser}/>
            </div>
            <div class="d40">
                <span class="d41">Yesid</span>
                <span class="d42">Tu pedido, mi prioridad</span>
            </div>
            <div class="d43">
                <div class="d44">
                <a href="/updatedomi" class="d9">
                    <span class="d46">Editar</span>
                    <div class="d47 link-black">
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                </a>
                <a href="/deletedom" class="d15">
                    <span class="d52">Eliminar</span>
                    <div class="d53 link-black">
                      <FontAwesomeIcon icon={faTrash}/>
                    </div>
                </a>
                </div>
                <div class="d54"><div class="d55"></div></div>
            </div>
        </div>
        <div class="d56">
            <div class="d3">
              <FontAwesomeIcon className='icono' icon={faUser}/>
            </div>
            <div class="d58">
                <span class="d59">Jose</span>
                <span class="d60">Rapidez, eficiencia y seguridad</span>
            </div>
            <div class="d61">
                <div class="d62">
                <a href="/updatedomi" class="d9">
                    <span class="d64">Editar</span>
                    <div class="d65 link-black">
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                </a>
                <a href="/deletedom" class="d15">
                    <span class="d70">Eliminar</span>
                    <div class="d71 link-black">
                      <FontAwesomeIcon icon={faTrash}/>
                    </div>
                </a>
                </div>
                <div class="d72"><div class="d73"></div></div>
            </div>
        </div>
        </div>
        <div class="d74"><div class="d75"></div></div>
        <div class="d76">
            <h1 class="d77">Nuestros domiciliarios</h1>
            <span class="d78">Repartimos pedidos con seguridad y cariño nuestra prioridad es
            satisfacer tus necesidades y brindar la mejor experiencia posible</span>
        </div>
        <div class="d79"></div>
        <a href="/adddomi" class="d80 link-black">
          <FontAwesomeIcon icon={faPlus} />
        </a>
    </div>
  );
};

export default Couriers;
