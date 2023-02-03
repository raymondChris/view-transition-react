import React from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    if (!document.startViewTransition) {
      navigate("/");
      return;
    }
    document.startViewTransition(() => navigate("/"));
  };

  const goBack = () => {
    if (!document.startViewTransition) {
      navigate(-1);
      return;
    }
    document.startViewTransition(() => navigate(-1));
  };

  return (
    <>
      <header className="main-header">
        <div className="back-and-title" onClick={goBack}>
          <svg className="back-icon" viewBox="0 0 24 24">
            <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path>
          </svg>
          <span>Demo site</span>
        </div>
      </header>
      <main className="content">
        <h1 className="content-title">Page 2</h1>
        <p>This is the content for page 2.</p>
        <ol>
          <li>It</li>
          <li>also</li>
          <li>has</li>
          <li>a</li>
          <li>list!</li>
        </ol>
        <div>
          Ok, that's enough fun, you can go back to{" "}
          <div onClick={goToHome}>page 1</div>.
        </div>
      </main>
    </>
  );
};

export default Page2;
