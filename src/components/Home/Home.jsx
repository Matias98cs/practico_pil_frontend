import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();

  return (
    <div>
      <h1>HOME ACADEMICO</h1>
      <h4>Bienvenido {auth.username}</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        excepturi itaque inventore, recusandae iure distinctio, officia mollitia
        voluptas totam sapiente enim! Libero ab soluta ipsa excepturi cum nihil
        impedit fugit!
      </p>
    </div>
  );
};

export default Home;
