import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToPageTwo = () => {
    if (!document.startViewTransition) {
      navigate("/page-2");
      return;
    }
    document.startViewTransition(() => navigate("/page-2"));
  };
  return (
    <>
      <header className="main-header">Demo site</header>
      <main className="content">
        <h1 className="content-title">Page 1</h1>
        <p>This is the content for page 1.</p>
        <div>
          Why not check out <div onClick={goToPageTwo}>page 2</div>?
        </div>
      </main>
    </>
  );
};

export default Home;
